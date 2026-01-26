
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  imageCaption?: string;
  link?: string;
}

export interface WritingPrompt {
  genre: string;
  prompt: string;
  context: string;
}