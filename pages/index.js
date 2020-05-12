import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import { Layout, siteTitle } from '../components/layout'
import { Date } from '../components/date'
import classes from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function Home({ allPostsData = [] }) {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section className={classes.headingMd}>
        <p>[AAAAAAAAAAA]</p>
        <p>
          SAMPELEEEEETETETTETSXTXXTXT
          <a href='https://nextjs.org/learn'>QQWQWE</a>
        </p>
      </section>
      <section className={`${classes.headingMd} ${classes.padding1px}`}>
        <h2 className={classes.headingLg}>Blog</h2>
        <ul className={classes.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={classes.listItem} key={id}>
              <Link href={'/posts/[id]'} as={`posts/${id}`}>
                <a>
                  {title}
                </a>
              </Link>
              <br />
              <small className={classes.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}
// export async function getServerSideProps() {
//   const some = await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data => data.json())
//   console.log('data -', some[1])
//   return {
//     props: {}
//   }
// }
