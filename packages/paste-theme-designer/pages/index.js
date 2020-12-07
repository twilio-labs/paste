import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/edit">
        <a>Edit</a>
      </Link>
    </div>
  );
}
