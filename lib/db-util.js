import { MongoClient } from 'mongodb';
import { hash, compare } from 'bcryptjs';

async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.gi0qz.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  );

  return client;
}

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

export { connectToDatabase, hashPassword, verifyPassword, getAllDocuments };
