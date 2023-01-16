import mongoose from 'mongoose';

const db = async () => {
  mongoose.Promise = global.Promise;
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect('mongodb://db:27017/db');
    console.log('MongDB Conectado')
  } catch (_error) {
    console.log('erro ao se conectar');
  }
}

export default db;