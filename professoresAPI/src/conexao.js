const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://kauarodriguesfn:aqWqUmnGPwpYvzFQ@cluster0.eqk19n3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Conectado ao MongoDB");
    } catch (err) {
        console.error("Erro ao conectar ao MongoDB", err);
        process.exit(1);
    }
};

module.exports = connection;