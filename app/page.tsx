'use client';

import { UserForm } from './components/UserForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 gap-8">
      <UserForm />
    </main>
  );
}
