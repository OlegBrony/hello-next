import Head from 'next/head'
import Link from 'next/link'
import utilsClasses from '../styles/utils.module.css'
import classes from './layout.module.css'


const name = 'Oleg'
export const siteTitle = 'Sample'

export const Layout = ({ children, home }) => {
  return (
    <div className={classes.container}>
      <Head>
        <link rel={'icon'} href={'/favicon.ico'} />
        <meta name={'description'} content={'Learning!'} />
        <meta property={'og:image'} content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={classes.header}>
        {home
          ? (
            <>
              <img src='/images/profile.jpg' alt={name} className={`${classes.headerHomeImage} ${utilsClasses.borderCircle}`}/>
              <h1 className={utilsClasses.heading2Xl}>{name}</h1>
            </>
          )
          : (
            <>
              <Link href={'/'}>
                <a>
                  <img src='/images/profile.jpg' alt={name} className={`${classes.headerImage} ${utilsClasses.borderCircle}`} />
                </a>
              </Link>
              <h2 className={utilsClasses.headingLg}>
                <Link href={'/'}>
                  <a className={utilsClasses.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )
        }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={classes.backToHome}>
          <Link href={'/'}>
            <a>back</a>
          </Link>
        </div>
      )}
    </div>
  )
}
