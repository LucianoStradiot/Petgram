const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({ 
cloud_name: process.env.CLOUD_NAME, 
api_key: process.env.API_KEY, 
api_secret: process.env.API_SECRET 
});

async function uploadImageAndGetUrl(req) {
    try {
        // Extraer la ruta del archivo de req.file.path
        const filePath = req.file.path;
        // Subir la imagen a Cloudinary
        const result = await cloudinary.uploader.upload(filePath);
        // Obtener la URL de la imagen cargada desde Cloudinary
        const imageUrl = result.secure_url;
        return imageUrl;
    } catch (error) {
        throw error;
    }
}

module.exports = uploadImageAndGetUrl;