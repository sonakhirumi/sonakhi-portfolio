async function findLogo() {
    const res = await fetch('https://trubuddy.me/', {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    // Look for any image with 'logo' or 'brand' in the src
    const allImgs = [...html.matchAll(/src="(https?:\/\/trubuddy\.me[^"]+)"/g)].map(m => m[1]);
    const logos = allImgs.filter(u => u.toLowerCase().includes('logo') || u.toLowerCase().includes('brand') || u.toLowerCase().includes('trubuddy'));
    console.log("All trubuddy imgs:", allImgs.slice(0, 15));
    console.log("Logo candidates:", logos);
}
findLogo();
