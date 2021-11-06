import React from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <Image src={user.picture} alt={user.name} width={40} height={40} />
        <h3>Here is your Profile Information.</h3>
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
      </div>
    )
  );
}
