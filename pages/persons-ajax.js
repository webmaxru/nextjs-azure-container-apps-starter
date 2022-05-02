import useSWR from 'swr';
import Person from '../components/Person';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Persons() {
  const { data, error } = useSWR('/api/people', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <p>Calling API as Ajax</p>

      <div className="grid">
        {data.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </div>
    </>
  );
}
