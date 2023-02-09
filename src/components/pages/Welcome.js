import '../../fonts/ubuntu-v20-latin/index.css'

import { Link, Outlet } from 'react-router-dom' // NavLink
import { Helmet } from 'react-helmet'

import { Localized, useLocalization } from '../../fluent/Localized.js'
import Wishes from '../Wishes.js'

export default function Welcome() {

  const { getString } = useLocalization()

  const website_title = getString('website_title')
  const website_description = website_title

  const join_link = getString('join_link')

  return <>
    <Helmet>
      <title>{website_title}</title>
      <meta name="title" content={website_title} />
      <meta name="og:title" content={website_title} />
      <meta name="twitter:title" content={website_title} />

      <meta name="description" content={website_description} />
      <meta name="og:description" content={website_description} />
      <meta name="twitter:description" content={website_description} />
    </Helmet>

    <div alt="logo" className="logo"></div>
    <h1 className="center_box" style={{ textAlign: 'center' }}>
      <Localized id="website_title" />
    </h1>

    <br />

    <nav>
      {/* <NavLink to="/"><button>Hi!</button></NavLink> */}
      <Link href={join_link}><button>Join Volt</button></Link>
      {/* <NavLink to="follow"><button>Follow</button></NavLink> */}
    </nav>

    <div className="center_box" style={{
      textAlign: 'center',
    }}>
      <Localized
        id="into_text"
        elems={{
          strong: <strong />,
          p: <p />,
          p_one: <p style={{ marginBlockEnd: '0' }} />,
          // eslint-disable-next-line
          h2: <h2 style={{ marginBlockEnd: '20px' }} />,
        }}
        />
    </div>

    <br />
    <br />

    <Wishes />

    <Outlet />
  </>
}
