import { people } from './api/data';
import Person from '../components/Person';

export default function Persons({ people }) {
  return (
    <>
      <p>Calling API as Server-Side Rendering</p>

      <div className="grid">
        {people.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return { props: { people } };
}
