const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            if (content.includes('<img ') || content.includes('<img\n')) {
                let changed = false;

                if (fullPath.includes('Hero.tsx')) {
                    content = content.replace(/<img([\s\S]*?)(\/?)>/g, (match, attrs, selfClose) => {
                        if (attrs.includes('fetchPriority=')) return match;
                        changed = true;
                        return `<img fetchPriority="high" decoding="async"${attrs}${selfClose}>`;
                    });
                } else {
                    content = content.replace(/<img([\s\S]*?)(\/?)>/g, (match, attrs, selfClose) => {
                        if (attrs.includes('loading="lazy"')) return match;
                        changed = true;
                        return `<img loading="lazy" decoding="async"${attrs}${selfClose}>`;
                    });
                }

                if (changed) {
                    fs.writeFileSync(fullPath, content);
                    console.log(`Updated ${fullPath}`);
                }
            }
        }
    }
}

processDir(path.resolve('./components'));
console.log('Done');
