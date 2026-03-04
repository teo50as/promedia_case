/**
 * Image compression script just for the two new images.
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMG_DIR = path.join(__dirname, "public", "images");
const TEMP_DIR = path.join(__dirname, "public", "images", "_temp");
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function compressImages() {
    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(TEMP_DIR, { recursive: true });
    }

    const files = ["us.jpg", "mixer.jpg"];

    console.log(`Compressing ${files.length} images...\n`);

    for (const file of files) {
        const srcPath = path.join(IMG_DIR, file);
        const tmpPath = path.join(TEMP_DIR, file);

        if (!fs.existsSync(srcPath)) continue;

        const stats = fs.statSync(srcPath);
        const sizeBefore = (stats.size / 1024 / 1024).toFixed(2);

        try {
            const inputBuffer = fs.readFileSync(srcPath);

            const outputBuffer = await sharp(inputBuffer)
                .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                .jpeg({ quality: QUALITY, mozjpeg: true })
                .toBuffer();

            fs.writeFileSync(tmpPath, outputBuffer);
            fs.copyFileSync(tmpPath, srcPath);
            fs.unlinkSync(tmpPath);

            const sizeAfter = (outputBuffer.length / 1024 / 1024).toFixed(2);
            console.log(`  OK  ${file}: ${sizeBefore}MB -> ${sizeAfter}MB`);
        } catch (err) {
            console.error(`  FAIL  ${file}: ${err.message}`);
        }
    }

    try { fs.rmdirSync(TEMP_DIR); } catch (_) { /* ignore */ }
    console.log("\nDone.");
}

compressImages();
