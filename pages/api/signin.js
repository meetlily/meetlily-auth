// Server-side endpoint for sign-in
import jwt from 'jsonwebtoken';

export default function signIn(req, res) {
  // Get the user's credentials from the request body
  const { email, password } = req.body;

  // Authenticate the user (e.g., check credentials against a database)
  const user = authenticateUser(email, password);

  if (!user) {
    // Return an error response if authentication fails
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate a JWT token with a secret key
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  // Set the JWT token as an HTTP-only cookie
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`);

  // Return a success response
  return res.status(200).json({ message: 'Sign-in successful' });
}