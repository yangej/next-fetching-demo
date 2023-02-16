import Link from "next/link";

export default async function Home() {
  return (
    <nav>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <li>
          <Link href="/server">Server Component Fetching</Link>
        </li>
        <li>
          <Link href="/client">Client Component Fetching</Link>
        </li>
      </ul>
    </nav>
  );
}
