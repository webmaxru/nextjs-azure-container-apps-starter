import Link from 'next/link';

export default function Person({ person }) {
  return (
    <Link href="/person/[id]" as={`/person/${person.id}`}>
      <a className="card">
        <h3>{person.name} &rarr;</h3>
      </a>
    </Link>
  );
}
