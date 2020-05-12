import Link from 'next/link'
import Head from 'next/head'
import { Layout, siteTitle } from '../../components/layout'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Hello!</h1>
      <Link href={'/'}><a>Back to home</a></Link>
    </Layout>
  )
}
