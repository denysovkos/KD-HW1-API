const mongoose = require('mongoose');
const Hotel = require('./models/hotel');

class Database {
    init() {
        mongoose.connect('mongodb://localhost/kdhw', { useMongoClient: true });
        mongoose.Promise = global.Promise;
        console.log('Database was initialized');
    }

    async isRecordsInBd() {
        return await Hotel.find((err, records) => {
            if (err) console.log('error was happened: ', err);

            return records;
        });
    }

    async saveHotel(hotel) {
        const newHotel = Hotel(hotel);

        return await newHotel.save((err, result) => {
            if (err) return console.log(err);
            return result;
        })
    }

    async getHotel() {
        console.log('get hotels was called');
        const random = Math.floor((Math.random() * Math.random() * 100) / 2);
        const loadedHotel = await Hotel.findOne().skip(random).exec((err, result) => {
            return result;
        });

        return loadedHotel;
    }
}

module.exports = Database;