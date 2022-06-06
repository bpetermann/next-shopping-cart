import { connectToDatabase, hashPassword } from '../../../lib/db-util';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (!email || !email.includes('@')) {
    res.status(422).json({
      message: 'Please enter a valid email address',
    });
    return;
  }

  // eslint-disable-next-line
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!password || password.trim().length < 6 || !format.test(password)) {
    res.status(422).json({
      message: 'Please enter a valid password',
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User already exists!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Registration Successful!' });
  client.close();
}

export default handler;
