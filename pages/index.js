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
        <p>I'm a designer who futzes with code.</p>
        <ul>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/code">Code</Link></li>
        </ul>
      </main>
    </Layout>
  )
}
