import { MongoClient } from 'mongodb';
import Constants from './constants.js';

class Database {
  _instance = null;

  // config has all DB settings
  // TODO: Add connection pool
  init = async (config) => {
    const client = new MongoClient(config.url, {
      minPoolSize: config.minPoolSize,
      maxPoolSize: config.maxPoolSize,
    });
    try {
      await client.connect();
      console.log('You are now connected to MongoDB')
    } catch (err) {
      console.log(`There was an error connecting to MongoDB: ${err}`);
    }
    // eslint-disable-next-line no-underscore-dangle
    this._instance = client.db(config.database);
  };

  getDb = () => {
    return this._instance;
  };

  dbWidgets = () => {
    return this._instance.collection(Constants.BOT_COLLECTION);
  };
}

export const db = new Database();
