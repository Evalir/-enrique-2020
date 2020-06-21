import React from "react"
import styled, { keyframes } from "styled-components"

import SEO from "../components/seo"
import "../css/reset.css"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Container = styled.main`
  background: black;
  color: white;
  width: 100vw;
  min-height: 100vh;
  padding: 32px;
  .content {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    justify-items: center;
    animation: ${fadeIn} 0.5s linear;

    p {
      color: #bcbcbc;
      line-height: 165%;
    }

    .jumbotext {
      color: #8d8d8d;
      font-weight: 900;
      font-size: 325%;
      writing-mode: vertical-rl;
      a {
        color: #8d8d8d;
        transition: all 0.3s;
      }
      a:hover {
        color: white;
      }
    }
    .intro {
      align-self: end;
      line-height: 165%;
    }
    .contact {
    }
    .end {
      align-self: center;
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      max-width: 300px;
      grid-template-columns: 1fr;
    }
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Container>
      <div className="content">
        <span />
        <div className="jumbotext">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SafeLink location="mailto:hi@enriqueortiz.dev">
              hi@enriqueortiz.dev
            </SafeLink>
          </span>
          <br />
          <span className="">&nbsp;&nbsp;&nbsp;&nbsp;Software Developer</span>
          <br />
          <span className="">Enrique Ortiz</span>
        </div>
        <p className="intro">
          Hey, let's get to know ourselves.{" "}
          <span role="img" aria-label="Metal horns up">
            🤘
          </span>
          <br /> <br /> My name is Enrique Ortiz, and I'm a 21 years old
          Software Engineer from the Dominican Republic. I currently work at
          Aragon One, where I build free and open source software for digital
          organizations on top of Ethereum Technology. My role includes
          everything from doing frontend work to interacting with the web3
          stack.
        </p>
        <p className="contact">
          You can find me on Twitter and Instagram, or send me an email. I’m
          interested in the future, decentralization, product design and
          whatever else catches my interest at the current time. I also make
          music under the moniker of Evalir.
        </p>
        <div className="jumbotext">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SafeLink
              location="https://github.com/evalir"
              target="blank"
              rel="noopener noreferrer"
            >
              @evalir on Github
            </SafeLink>
          </span>
          <br />
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SafeLink location="https://twitter.com/cryptoyizus">
              @cryptoyizus on Github
            </SafeLink>
          </span>
          <br />
          <span>
            <SafeLink location="https://instagram.com/hievalir">
              @hievalir on Instagram
            </SafeLink>
          </span>
        </div>
        <p className="end">
          Feel free to reach out. I'm happy to talk about anything interesting.
        </p>
      </div>
    </Container>
  </>
)

function SafeLink({ children, location }) {
  return (
    <a href={location} target="blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default IndexPage
