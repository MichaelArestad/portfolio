import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <ul>
          <li><Link href="/projects/gutenberg">Gutenberg</Link></li>
          <li><Link href="/projects/gutenberg">Gutenpack</Link></li>
          <li><Link href="/projects/gutenberg">Jetpack</Link></li>
          <li><Link href="/projects/gutenberg">Activity Log</Link></li>
          <li><Link href="/projects/gutenberg">WordPress.com</Link></li>
        </ul>
      </main>
    </Layout>
  )
}
