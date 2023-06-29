import { db } from './dbConnect.js';
import { ObjectId } from 'mongodb';

export async function getAllImages(req, res) {
  const coll = db.collection('images');
  
  const myImages = await coll.find({}).toArray();
  res.status(200).send(myImages);
}