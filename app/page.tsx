import { UserCard } from './components/UserCard';
import { fetchData } from './utils/data';

export default async function Home() {
  const { user, info } = await fetchData();
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 gap-8">
      <UserCard user={user} info={info} />
    </main>
  );
}
