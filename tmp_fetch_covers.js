// Check what other image folders exist on trubuddy for book covers
async function checkQuality() {
    const res = await fetch('https://trubuddy.me/c/art-make-friends', {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const html = await res.text();

    // Find all unique trubuddy image paths
    const allImgs = [...html.matchAll(/https:\/\/trubuddy\.me\/assets\/([^"'\s]+\.(?:jpg|png|webp))/gi)];
    const unique = [...new Set(allImgs.map(m => m[0]))];

    console.log("All TruBuddy image URLs found:");
    unique.forEach(u => console.log(u));
}
checkQuality();
