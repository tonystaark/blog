import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- Blog Sidebar -->
          <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-7235408523384570"
              data-ad-slot="9210081627"
              data-ad-format="auto"
              data-full-width-responsive="true">
          </ins>
          <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        <script dangerouslySetInnerHTML={{__html: '(window.adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-7235408523384570",enable_page_level_ads: true});'}}></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
