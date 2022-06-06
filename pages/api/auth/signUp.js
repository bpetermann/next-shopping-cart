import { connectToDatabase, hashPassword } from '../../../lib/db-util';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (!email || !email.includes('@')) {
    res.status(422).json({
      message: 'Please enter a valid email address.',
    });
    return;
  }

  if (!password || password.trim().length < 7) {
    res.status(422).json({
      message: 'Please enter a valid password.',
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;
