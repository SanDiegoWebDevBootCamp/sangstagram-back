const cloudinary = require('cloudinary');

const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;

const upload = (stream) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(UPLOAD_PRESET, (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
        stream.pipe(uploadStream);
    });
};

module.exports = {
    upload,
};