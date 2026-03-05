const slugs = [
    'needs-vs-wants', 'use-internet-safely', 'using-time-smart', 'friends-shape-us',
    'talk-confidently', 'messy-to-organised', 'bounce-from-failure', 'deal-with-challenges',
    'good-eating-habits', 'overcome-screen-addiction', 'art-make-friends', 'talk-about-mistake',
    'learn-about-money', 'junk-food-truth', 'memorisation-made-easy', 'learns-healthy-food',
    'good-habits', 'handle-cash-safely', 'how-to-read', 'how-build-willpower'
];

async function getBookCover(slug) {
    try {
        const res = await fetch(`https://trubuddy.me/c/${slug}`, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });
        const html = await res.text();

        // Get title
        const titleMatch = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/);
        const title = titleMatch ? titleMatch[1].replace('TruBuddy Comics | ', '').replace('TruBuddy | ', '') : slug;

        // Find all Compressed-cover images
        const coverMatches = [...html.matchAll(/https:\/\/trubuddy\.me\/assets\/Compressed-covers\/(\d+\.jpg)/g)];
        const covers = [...new Set(coverMatches.map(m => m[0]))];

        // First cover image is typically the book's own cover
        const mainCover = covers[0] || null;

        console.log(JSON.stringify({ slug, title, cover: mainCover }));
    } catch (e) {
        console.log(JSON.stringify({ slug, error: e.message }));
    }
}

(async () => {
    for (const slug of slugs) {
        await getBookCover(slug);
        await new Promise(r => setTimeout(r, 200));
    }
})();
