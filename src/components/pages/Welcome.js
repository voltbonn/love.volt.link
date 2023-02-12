import '../../fonts/ubuntu-v20-latin/index.css'

import { Outlet } from 'react-router-dom' // Link, NavLink
import { Helmet } from 'react-helmet'

import { Localized, useLocalization } from '../../fluent/Localized.js'
import Greetings from '../Greetings.js'

export default function Welcome() {

  const { getString } = useLocalization()

  const website_title = getString('website_title')
  const website_description = website_title

  const join_link_href = getString('join_link_href')

  return <>
    <Helmet>
      <title>{website_title}</title>
      <meta name="title" content={website_title} />
      <meta name="og:title" content={website_title} />
      <meta name="twitter:title" content={website_title} />

      <meta name="description" content={website_description} />
      <meta name="og:description" content={website_description} />
      <meta name="twitter:description" content={website_description} />

      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://love.volt.link/" />
      <meta name="og:image" content="https://love.volt.link/meta_image.jpg" />
    </Helmet>

    <header>

      <div alt="logo" className="logo"></div>
      <h1 className="center_box" style={{ textAlign: 'center' }}>
        <Localized id="website_title" />
      </h1>

    </header>

    <br />
    <br />
    <br />

    <div className="intro_letter">
      <Localized
        id="into_text"
        elems={{
          strong: <strong />,
          p: <p />,
          p_one: <p style={{ marginBlockEnd: '0' }} />,
          p_strong: <p style={{ fontWeight: 'bold' }} />,
          // eslint-disable-next-line
          h2: <h2 style={{ marginBlockEnd: '20px' }} />,
        }}
        />
    </div>

    <nav style={{
      marginBlockEnd: 'var(--basis_x4)',
    }}>
      {/* <NavLink to="/"><button>Hi!</button></NavLink> */}
      <a href={join_link_href} target="_blank" rel="noreferrer"><button>
        <Localized id="join_link" />
      </button></a>
      {/* <NavLink to="follow"><button>Follow</button></NavLink> */}
    </nav>

    <br />

    <Greetings />

    <div alt="Future made in Europe" className="slogan"></div>

    <nav>
      <a href="https://www.volteuropa.org/" target="_blank" rel="noreferrer"><button>
        Volt Europa
      </button></a>
      <a href="https://www.volteuropa.org/legal" target="_blank" rel="noreferrer"><button>
        <Localized id="imprint" />
      </button></a>
      <a href="https://www.volteuropa.org/privacy" target="_blank" rel="noreferrer"><button>
        <Localized id="privacy_policy" />
      </button></a>
      <a href="https://github.com/voltbonn/love.volt.link" target="_blank" rel="noreferrer"><button>
        <Localized id="source_code" />
      </button></a>
      <a href={join_link_href} target="_blank" rel="noreferrer"><button>
        <Localized id="join_link" />
      </button></a>
    </nav>

    <Outlet />
  </>
}
