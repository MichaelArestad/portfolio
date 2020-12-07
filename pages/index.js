import Head from 'next/head'
// import Link from 'next/link'
import Layout from '../components/layout/layout'
import List from '../components/list/list'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <p className="description">I'm a designer who futzes with code.</p>
        {/* <ul>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/code">Code</Link></li>
        </ul> */}
        <List style="minimal">
          <li><a href="">Blog</a></li>
          <li><a href="">GitHub</a></li>
          <li><a href="">Twitter</a></li>
        </List>
      </main>
    </Layout>
  )
}
