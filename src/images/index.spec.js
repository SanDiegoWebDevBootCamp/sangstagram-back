const fs = require('fs');
const { upload } = require('./index');

describe.skip('Image Uploader', () => {
    it('should upload to cloudinary', () => {
        const path = './public/images/download.jpeg';
        const readStream = fs.createReadStream(path);

        upload(readStream)
            .then((result) => {
                expect(result.secureUrl).toBeDefined();
            });
    });
});
