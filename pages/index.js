import useSWR from 'swr'
import Person from '../components/Person'
import styles from '../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>


        <ul>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://docs.microsoft.com/en-us/azure/container-apps/deploy-visual-studio-code"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://docs.microsoft.com/en-us/azure/container-apps/deploy-visual-studio-code"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Azure Container Apps.
            </p>
          </a>
        </div>

    </div>
  )
}