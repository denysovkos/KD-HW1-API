const data = require('./MOCK_DATA');
const Database = require('./db');
const db = new Database();

db.init();

db.isRecordsInBd()
    .then(dataFromDB => {
        if (!dataFromDB.length) {
            data.map(async hotel => {
                await db.saveHotel(hotel)
            })
            console.log('Database was filled');
        } else {
            console.log('Data in db already exists');
        }
    })
    .then(() => setTimeout(() => process.exit(0), 5000))
    .catch(err => console.log('error was happened: ', err));
