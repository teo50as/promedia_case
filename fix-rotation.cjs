const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, 'public', 'images', 'us.jpg');
const tempPath = path.join(__dirname, 'public', 'images', '_temp_us.jpg');

async function fixRotation() {
    console.log('Fixing rotation for us.jpg...');
    try {
        const inputBuffer = fs.readFileSync(imagePath);

        // .rotate() without arguments tells sharp to use the EXIF Orientation tag
        const outputBuffer = await sharp(inputBuffer)
            .rotate()
            .jpeg({ quality: 90 })
            .toBuffer();

        fs.writeFileSync(tempPath, outputBuffer);

        // Overwrite original
        fs.copyFileSync(tempPath, imagePath);
        fs.unlinkSync(tempPath);

        console.log('Rotation fixed successfully!');
    } catch (err) {
        console.error('Error fixing rotation:', err);
    }
}

fixRotation();
