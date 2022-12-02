import React from 'react'
import styled from 'styled-components'

function Services() {
  return (
    <Container>
        <Wrap>
        <Header>
                <h1>OUR SERVICES</h1>
        </Header>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f0efef;
    display: flex;
    justify-content: center;


`

const  Wrap = styled.div`
    width: 95%;
    

`

const Header = styled.div`
    text-align: center;
    padding: 30px ;
    border-bottom: 1px solid #59b4ed;
    margin-top: 40px; 

    h4{
        color: #6e6b6b;
    }
    h1{
        font-size: 50px;
        margin-bottom: 10px;
    }


`

export default Services