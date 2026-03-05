import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Share2, X, Reply } from 'lucide-react';

export interface CommentType {
    id: string;
    email: string;
    name: string;
    text: string;
    timestamp: string;
    replies: CommentType[];
}

export interface NoteInteractionsProps {
    noteId: string;
    content: string;
}

const BASE_URL = 'https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2';
const AUTHOR_EMAIL = 'sonakhirumi@gmail.com';
const AUTHOR_NAME = 'Sonakhi Rumi (Author)';

// Helper to extract a display name from email if name isn't provided
const extractNameFromEmail = (email: string) => {
    if (email.toLowerCase() === AUTHOR_EMAIL) return AUTHOR_NAME;
    return email.split('@')[0];
};

// Helper to convert WP comments to our recursive format
const formatWPComments = (wpComments: any[]): CommentType[] => {
    const map = new Map();
    const result: CommentType[] = [];

    wpComments.forEach(c => {
        map.set(c.id.toString(), {
            id: c.id.toString(),
            email: c.author_email || '',
            name: c.author_name || extractNameFromEmail(c.author_email || 'anonymous@user.com'),
            text: c.content.rendered.replace(/<[^>]*>/g, '').trim(),
            timestamp: new Date(c.date).toLocaleString(),
            replies: []
        });
    });

    wpComments.forEach(c => {
        const mapped = map.get(c.id.toString());
        if (c.parent && map.has(c.parent.toString())) {
            map.get(c.parent.toString()).replies.push(mapped);
        } else {
            result.push(mapped);
        }
    });

    return result;
};

export const NoteInteractions: React.FC<NoteInteractionsProps> = ({ noteId, content }) => {
    const [likes, setLikes] = useState<number>(0);
    const [comments, setComments] = useState<CommentType[]>([]);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    // Reset Likes for Note #1 if it's the "crippled by love" local note
    useEffect(() => {
        if (noteId === '1') {
            localStorage.setItem(`likes_note_1`, '0');
            localStorage.setItem(`user_liked_1`, 'false');
            setLikes(0);
        }
    }, [noteId]);

    // Storage keys
    const likesKey = `likes_note_${noteId}`;
    const commentsKey = `comments_note_${noteId}`;

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch(`${BASE_URL}/comments?post=${noteId}&per_page=100&_=${Date.now()}`);
                const wpComments = await res.json();
                if (Array.isArray(wpComments)) {
                    setComments(formatWPComments(wpComments));
                }
            } catch (err) {
                console.error("Comment fetch error:", err);
                // Fallback to local storage if API fails
                const savedComments = localStorage.getItem(commentsKey);
                if (savedComments) setComments(JSON.parse(savedComments));
            }
        };

        const savedLikes = localStorage.getItem(likesKey);
        if (savedLikes) setLikes(parseInt(savedLikes));

        fetchComments();
    }, [noteId]);

    const saveComments = async (newComments: CommentType[], justPosted?: { email: string, text: string, parent?: string }) => {
        if (justPosted) {
            try {
                // Post to WordPress
                await fetch(`${BASE_URL}/comments`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        post: parseInt(noteId),
                        author_email: justPosted.email,
                        author_name: extractNameFromEmail(justPosted.email),
                        content: justPosted.text,
                        parent: justPosted.parent ? parseInt(justPosted.parent) : 0
                    })
                });
            } catch (err) {
                console.error("WP Comment post error:", err);
            }
        }

        setComments(newComments);
        localStorage.setItem(commentsKey, JSON.stringify(newComments));
    };

    const toggleLike = () => {
        const currentLikesCount = parseInt(localStorage.getItem(likesKey) || '0');
        const userLikedKey = `user_liked_${noteId}`;
        const hasLiked = localStorage.getItem(userLikedKey) === 'true';

        let newLikes;
        if (hasLiked) {
            newLikes = Math.max(0, currentLikesCount - 1);
            localStorage.setItem(userLikedKey, 'false');
        } else {
            newLikes = currentLikesCount + 1;
            localStorage.setItem(userLikedKey, 'true');
        }

        setLikes(newLikes);
        localStorage.setItem(likesKey, newLikes.toString());
    };

    const isLiked = () => {
        return localStorage.getItem(`user_liked_${noteId}`) === 'true';
    };

    const handleShare = async () => {
        const langCode = content.toLowerCase().includes('odia') ? 'odia' : (content.toLowerCase().includes('hindi') ? 'hindi' : 'eng');
        // Simple link format: domain.com/#eng-1
        const url = `${window.location.origin}/#${langCode}-${noteId}`;
        const desc = `Musing by Sonakhi Rumi: "${content.substring(0, 50)}..."\nRead more at: ${url}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'A musing by Sonakhi Rumi',
                    text: desc
                });
            } catch (err) {
                console.log('Share error:', err);
            }
        } else {
            navigator.clipboard.writeText(desc);
            alert('Preview copied to clipboard!');
        }
    };

    return (
        <>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-stone-100 text-stone-400 shrink-0 relative z-10">
                {/* Like */}
                <button
                    onClick={toggleLike}
                    className={`flex items-center gap-1.5 transition-colors ${isLiked() ? 'text-red-500' : 'hover:text-stone-900'}`}
                >
                    <Heart className={`w-4 h-4 ${isLiked() ? 'fill-red-500 text-red-500' : ''}`} />
                    <span className="text-xs font-medium">{likes > 0 ? likes : 'Like'}</span>
                </button>

                {/* Comment */}
                <button
                    onClick={() => setIsCommentsOpen(true)}
                    className="flex items-center gap-1.5 hover:text-stone-900 transition-colors"
                >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">{comments.length > 0 ? comments.length : 'Comment'}</span>
                </button>

                {/* Share */}
                <button
                    onClick={handleShare}
                    className="flex items-center gap-1.5 hover:text-stone-900 transition-colors ml-auto"
                >
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs font-medium hidden sm:inline">Share</span>
                </button>
            </div>

            {isCommentsOpen && (
                <CommentsModal
                    comments={comments}
                    onSave={saveComments}
                    onClose={() => setIsCommentsOpen(false)}
                    currentAuthorEmail={AUTHOR_EMAIL}
                />
            )}
        </>
    );
};

// Sub-component for Comments Modal to keep the layout clean
const CommentsModal = ({ comments, onSave, onClose, currentAuthorEmail }: { comments: CommentType[], onSave: (c: CommentType[], p?: any) => void, onClose: () => void, currentAuthorEmail: string }) => {
    const [userEmail, setUserEmail] = useState('');
    const [text, setText] = useState('');

    // Check if user is the official author from their email input
    const isUserAuthor = userEmail.toLowerCase() === currentAuthorEmail;

    // If replyTo is null, adding a top level comment. Otherwise, replying to parent ID.
    const [replyTo, setReplyTo] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userEmail || !text.trim()) return;

        let finalName = extractNameFromEmail(userEmail);

        const newComment: CommentType = {
            id: Date.now().toString(),
            email: userEmail.trim(),
            name: finalName,
            text: text.trim(),
            timestamp: new Date().toLocaleString(),
            replies: []
        };

        if (replyTo) {
            const newComments = updateReplies(comments, replyTo, newComment);
            onSave(newComments, { email: userEmail, text: text.trim(), parent: replyTo });
            setReplyTo(null);
        } else {
            onSave([...comments, newComment], { email: userEmail, text: text.trim() });
        }

        setText('');
        // Intentionally keeping email/name filled for ease of consecutive replies
    };

    // Recursive helper to add replies
    const updateReplies = (list: CommentType[], targetId: string, reply: CommentType): CommentType[] => {
        return list.map(c => {
            if (c.id === targetId) {
                return { ...c, replies: [...c.replies, reply] };
            }
            if (c.replies.length > 0) {
                return { ...c, replies: updateReplies(c.replies, targetId, reply) };
            }
            return c;
        });
    };

    // Recursive helper to delete comments
    const deleteComment = (list: CommentType[], targetId: string): CommentType[] => {
        return list
            .filter(c => c.id !== targetId)
            .map(c => ({
                ...c,
                replies: deleteComment(c.replies, targetId)
            }));
    };

    // Click outside to close helper
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-stone-900/60 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
                style={{ animation: 'slideIn 0.3s ease-out forwards' }}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50">
                    <h3 className="font-serif text-xl text-stone-900">Comments</h3>
                    <button onClick={onClose} className="text-stone-400 hover:text-stone-900 p-2 rounded-full hover:bg-stone-200 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-thin-scroll">
                    {comments.length === 0 ? (
                        <div className="text-center py-10 text-stone-400 font-serif italic">
                            Be the first to share your thoughts.
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {comments.map((comment) => (
                                <CommentThread
                                    key={comment.id}
                                    comment={comment}
                                    onReply={(id) => setReplyTo(id)}
                                    onDelete={(id) => onSave(deleteComment(comments, id))}
                                    canDelete={isUserAuthor}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-6 border-t border-stone-100 bg-stone-50">
                    {replyTo && (
                        <div className="flex items-center justify-between bg-stone-200/50 px-3 py-2 rounded-lg mb-4">
                            <span className="text-xs font-semibold text-stone-600 flex items-center gap-1"><Reply className="w-3 h-3" /> Replying to a thread</span>
                            <button onClick={() => setReplyTo(null)} className="text-stone-400 hover:text-stone-800"><X className="w-3 h-3" /></button>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Email *"
                                required
                                value={userEmail}
                                onChange={e => setUserEmail(e.target.value)}
                                className="w-full text-sm px-4 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-400"
                            />
                        </div>
                        <div className="flex gap-2 relative">
                            <textarea
                                required
                                placeholder={replyTo ? "Write a reply..." : "Leave a comment..."}
                                value={text}
                                onChange={e => setText(e.target.value)}
                                className="flex-1 resize-none text-sm px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-400 min-h-[80px]"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={!text.trim() || !userEmail.trim()}
                                className="bg-stone-900 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 disabled:opacity-50 transition-colors"
                            >
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
        </div>
    );
};

// Recursive Component for nested comments
const CommentThread: React.FC<{
    comment: CommentType;
    onReply: (id: string) => void;
    onDelete: (id: string) => void;
    canDelete: boolean;
    isReply?: boolean;
}> = ({ comment, onReply, onDelete, canDelete, isReply = false }) => {
    const isAuthor = comment.email.toLowerCase() === AUTHOR_EMAIL;

    return (
        <div className={`space-y-3 ${isReply ? 'ml-6 sm:ml-8 border-l-2 border-stone-100 pl-4 mt-4' : ''}`}>
            <div className="flex gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 uppercase font-black text-xs ${isAuthor ? 'bg-stone-900 text-white' : 'bg-stone-200 text-stone-600'}`}>
                    {comment.name.charAt(0)}
                </div>
                <div className="flex-1 space-y-1">
                    <div className="flex items-baseline justify-between">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`font-semibold text-sm ${isAuthor ? 'text-stone-900' : 'text-stone-800'}`}>
                                {comment.name}
                            </span>
                            {isAuthor && (
                                <span className="px-1.5 py-0.5 rounded text-[8px] uppercase tracking-widest bg-stone-900 text-white font-bold">Author</span>
                            )}
                        </div>
                        <span className="text-[10px] text-stone-400 hidden sm:inline">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm text-stone-600 whitespace-pre-wrap">{comment.text}</p>
                    <div className="flex items-center gap-3 pt-1">
                        <button
                            onClick={() => onReply(comment.id)}
                            className="text-[10px] uppercase font-bold tracking-widest text-stone-400 hover:text-stone-800 transition-colors"
                        >
                            Reply
                        </button>
                        {canDelete && (
                            <button
                                onClick={() => onDelete(comment.id)}
                                className="text-[10px] uppercase font-bold tracking-widest text-red-400 hover:text-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Render nested replies */}
            {comment.replies && comment.replies.length > 0 && (
                <div className="space-y-4">
                    {comment.replies.map(reply => (
                        <CommentThread
                            key={reply.id}
                            comment={reply}
                            onReply={onReply}
                            onDelete={onDelete}
                            canDelete={canDelete}
                            isReply={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default NoteInteractions;
