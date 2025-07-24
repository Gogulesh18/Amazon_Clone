const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const connectDB = require('./db/connect');
const Product = require('./models/Product'); // adjust path if needed

const seedData = async () => {
  try {
    await connectDB(process.env.CONNECTION_STRING);
    console.log('DB connected');

    const dataPath = path.join(__dirname, 'MOCK_DATA.json');
    const mockData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Optional: Clear old products
    await Product.deleteMany();

    // Insert new mock data
    await Product.insertMany(mockData);
    console.log('Mock data inserted successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

seedData();
