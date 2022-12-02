import React from 'react'
import styled from 'styled-components'
import BlankPage from './BlankPage'
import Info from './Info'
import Navigation from './Navigation'
import Projects from './Projects'
import Services from './Services'
import Test from './Test'

function Content() {
  return (
    <Container>
        <Navigation />
        <BlankPage />
        <Info />
        <Services />
        <Test />
        <Projects />
    </Container>
  )
}

const Container = styled.div`
    z-index: 1000;
    overflow: hidden;

`
export default Content