import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Dear friends, this is the website and blog of the YouTube Channel Make
      Programming Fun Again.
    </p>
    <p>
      The mission of my channel is to make programming fun again by promoting
      the use of modern, fun-to-use, production-ready technologies, such as
      Elixir, React, and GraphQL. Leave your Boring Stack&trade; at work and
      enjoy programming with fun stuff!
    </p>
    <p>
      In the following days, I will improve this website and post more
      information about functional programming and Web development. I am also
      planning to provide more content in Chinese. Until then, please enjoy the
      videos below.
    </p>
    <p>Yours, Karol Moroz</p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/MxGQrmqubsI"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/8MCmTiB3g6c"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Layout>
)

export default IndexPage
