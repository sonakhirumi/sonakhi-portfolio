const slugs = [
    'needs-vs-wants',
    'use-internet-safely',
    'using-time-smart',
    'friends-shape-us',
    'talk-confidently',
    'messy-to-organised',
    'bounce-from-failure',
    'deal-with-challenges',
    'good-eating-habits',
    'overcome-screen-addiction',
    'art-make-friends',
    'talk-about-mistake',
    'learn-about-money',
    'junk-food-truth',
    'memorisation-made-easy',
    'learns-healthy-food',
    'good-habits',
    'handle-cash-safely',
    'how-to-read',
    'how-build-willpower'
];

async function getOgImage(slug) {
    try {
        const res = await fetch(`https://trubuddy.me/c/${slug}`, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });
        const html = await res.text();
        // Extract og:image
        const ogMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/);
        // Extract og:title
        const titleMatch = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/);
        const image = ogMatch ? ogMatch[1] : null;
        const title = titleMatch ? titleMatch[1].replace('TruBuddy | ', '') : slug;
        console.log(JSON.stringify({ slug, title, image }));
    } catch (e) {
        console.log(JSON.stringify({ slug, error: e.message }));
    }
}

(async () => {
    for (const slug of slugs) {
        await getOgImage(slug);
        await new Promise(r => setTimeout(r, 200));
    }
})();
