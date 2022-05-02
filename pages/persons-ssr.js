import useSWR from 'swr';
import Person from '../components/Person';

export default function Persons({ data }) {
  return (
    <>
      <p>Calling API as Server-Side Rendering</p>

      <div className="grid">
        {data.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/people');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
