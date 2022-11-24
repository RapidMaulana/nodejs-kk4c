const mongoose = require('mongoose');

const mongoDB = async function maing() {
    await mongoose.connect('mongodb://localhost:27017/praktikumKK4C');
    console.log('We Are Connected!')
}

module.exports = mongoDB;