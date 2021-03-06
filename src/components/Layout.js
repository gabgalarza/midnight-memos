import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-168116531-1');`}
        </script>
        <script>
          {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          
          ga('create', 'UA-168116531-1', 'auto');
          `}
        </script>
        <script>
          {`
            var disqus_config = function() {
              this.page.url = window.location.href;
              this.page.identifier = window.location.pathname;
            };

            if (window) {
              window.initDisqusScript = function() {
                console.log('initDisqusScript called');
                // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://midnightmemos.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());

                //only append on blog post pages
                if (window.location.pathname.includes("blog/")) {
                  (d.head || d.body).appendChild(s);
                }
              }
            }
          `}
        </script>
        <noscript>{`Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>`}</noscript>
        <script id="dsq-count-scr" src="//midnightmemos.disqus.com/count.js" async></script>
        {/* AdSense */}
        <script data-ad-client="ca-pub-3289575466853812" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}favicons/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}favicons/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      <Navbar />
      <div id="childWrapper">
        {children}
        {/*TODO: Workaround add delay tracking dynamic urls*/}
        <div style={{ display: 'none' }}>
          {
            process.browser && setTimeout(() => {
              global.ga('send', 'pageview', {
                'page': window.location.pathname,
                'title': document.title
              })

            }, 1000)
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
