import dotenv from 'dotenv';
import { Storage } from '@google-cloud/storage';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import mkdirp from 'mkdirp';
import config from '../config/config';

dotenv.config();

mkdirp.sync('data')

const Db = lowdb(new FileSync('data/db.json'));
Db.defaults({ videos: [] }).write();

export const db = Db;

const storage = new Storage({
  projectId: config.google.projectId,
  keyFilename: './google.json',
});

export const bucket = storage.bucket(config.google.bucket);