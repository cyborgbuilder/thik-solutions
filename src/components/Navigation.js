import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation() {
  return (
    <Container>
        <Navbar  bg="myTra" variant='dark'  expand='lg' sticky='top'>

<Navbar.Toggle style={{marginLeft: '20px'}} />
<Navbar.Collapse>
<Nav >
    <Nav.Link  style={{marginRight: '12px', color: '#fff', fontSize: '18px'}} href="">HOME</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: '#fff', fontSize: '18px'}} href="">OUR SERVICE</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: '#fff', fontSize: '18px'}} href="">ABOUT US</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: '#fff', fontSize: '18px'}} href="">CONTACT US</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: '#fff', fontSize: '18px'}} href="">PROJECTS</Nav.Link>
</Nav>
</Navbar.Collapse >

    <Logo>
    <img src='/images/logo.png' />
    </Logo>

</Navbar>

    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;

  .navbar{
    background: #59b4ed;
  }
 
 `

 const Logo = styled.div`
  width: 100px;
  margin: 0 10px;

  img{
    width: 100%;
  }
 
 `

export default Navigation