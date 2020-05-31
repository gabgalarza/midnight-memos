import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
      {/*TODO: Keep bg image or leave entirely*/}
        <div
          //className="full-width-image-container margin-top-0"
          className="margin-top-0"
          style={{
            //backgroundImage: `url('/img/blog-index.jpg')`,
            padding: '3rem 0'
          }}
        >
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
