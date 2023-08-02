import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignInForm(providers) {
    console.log(providers)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Send a sign-in request with user credentials
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
  
      if (result.error) {
        // Sign-in failed, display error message
        console.error(result.error);
      } else {
        // Sign-in successful, redirect to protected page
        window.location.href = '/protected';
      }
    };
  
    return (
      <>
          <form onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
              <button type="submit">Sign In</button>
          </form>
          <div>
              {Object.values(providers).map((provider) => (
                  <div key={provider.id}>
                      <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                  </div>
              ))}
          </div>
      </>
    );
}
export function SignIn( providers ) {

    return (
      <div>
        {Object.values(providers.data).map((provider) => (
          <div key={provider.id}>
            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    );
}

