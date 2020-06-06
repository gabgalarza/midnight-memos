import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/midnight-memos.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content footer-logo has-text-centered">
          <img
            src={logo}
            alt="Midnight Memos"
            style={{ width: '25em', height: '5em', 'filter': 'invert(1)' }}
          />
          <div className="is-4 social">
            {/* <a title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a> */}
            <a title="twitter" href="https://twitter.com/g1rza">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            {/* <a title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a> */}
          </div>
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="grid-columns">
              <div className="is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    {/*TODO: uncomment once About page is ready*/}
                    {/* <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li> */}
                    {/* TODO: Enable products footer link once page is done */}
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li> */}
                    {/*TODO: Enable Form Examples once ready to build comments section*/}
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>*/}
                  </ul>
                </section>
              </div>
              <div className="is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Stories
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
