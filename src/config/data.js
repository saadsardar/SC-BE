const fs = require('fs');
const csvParser = require('csv-parser');
const mongoose = require('mongoose');
require('dotenv').config();

async function uploadData() {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const db = mongoose.connection;
    const collection = db.collection('products');

    const csvFilePath = './data.csv';
    let rows = [];

    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on('data', (row) => {
        rows.push(row);
      })
      .on('end', async () => {
        try {
          await collection.insertMany(rows);
          console.log('Upload Done');
        } catch (err) {
          console.error('Error:', err);
        } finally {
          mongoose.disconnect();
        }
      });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

uploadData();
