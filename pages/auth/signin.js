import {SignIn } from '@/components/forms/SignIn';
import { getProviders, signIn } from 'next-auth/react';

export default function Login({providers}) {
    return (
      <>
      <SignIn data={providers}></SignIn>
      </>
    )
}
export async function getServerSideProps() {
  const authProviders = await getProviders();
  return {
    props: { providers: authProviders },
  };
}
