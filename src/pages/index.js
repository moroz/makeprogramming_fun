import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The manifesto</h1>
    <p>
      Have you ever noticed that the first syllable in “functional programming”
      is “fun”?
    </p>
    <p>
      I don’t think this is a coincidence. Let’s face the truth: there are some
      programming languages and technologies that are fun to use. They have a
      few things in common: consistent APIs, good documentation, and a clear
      syntax and structure. They are easy to write and maintain. They were
      written by passionate individuals and friendly communities.
    </p>
    <p>
      However, if you have ever worked in the field of IT, you most likely know
      that there are also technologies that were designed to just make money for
      big companies, and nobody ever gave a thought to programmer happiness.
      Oracle doesn't care if you are happy with MySQL and Java, nor does
      Microsoft mind that you find C# and MSSQL ugly.
    </p>
    <p>
      When you work with a Boring Stack™, programming is just a job. The only
      thing that keeps you coding is the thought of next month’s paycheck. On
      the other hand, when you work with the stack you love, you don’t even feel
      like you’re working.
    </p>
    <p>
      Now, what’s fun and what’s boring is completely subjective and personal.
      If you learned programming in the 90s and you still enjoy writing Delphi
      or ASP in 2020, then well, I am truly happy for you.
    </p>
    <p>However, if you:</p>
    <ol type="a">
      <li>
        <p>
          feel like your life is as devoid of meaning as that legacy Java
          project you’re maintaining,
        </p>
      </li>
      <li>
        <p>
          feel suicidal trying to untangle the mess of a schemaless MongoDB data
          store designed by an intern in the remotest parts of the world,
        </p>
      </li>
      <li>
        <p>
          were taught Java and C++ in college, but it was all just inheritance
          and factories, and you never really understood how anyone can actually
          enjoy programming,
        </p>
      </li>
    </ol>
    <p>
      If any of the above evaluates true, it seems like it’s time to Make
      Programming Fun Again.
    </p>
    <p>
      My name is Karol Moroz. I’m a programming aficionado born and raised in
      Poland. I started making YouTube videos to share the joy of programming
      with the world.
    </p>
    <p>
      My favorite language is Elixir, which is a functional programming language
      for the Erlang virtual machine, with a syntax influenced by Ruby,
      compile-time macros and great scalability. It goes very well with React,
      GraphQL, and PostgreSQL. So if you’re with me, leave your Boring Stack™ at
      work and treat yourself to some functional programming! Let’s Make
      Programming Fun Again!
    </p>
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
