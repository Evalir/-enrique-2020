import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import "../css/reset.css"

const Main = styled.main`
  background: black;
  color: white;
  width: 100vw;
  height: 100vh;
`

const FourOFour = styled.h1`
  position: absolute;
  top: 40vh;
  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  user-select: none;
  font-weight: bold;
  font-size: 128px;
`

const NotFoundPage = () => (
  <Main>
    <SEO title="404: Not found" />
    <FourOFour>NOT FOUND</FourOFour>
  </Main>
)

export default NotFoundPage
