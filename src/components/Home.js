import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <Container>

        <Wrap>
            <Left>
            <Fade left><h3>WELCOME TO</h3></Fade>
            <Fade left><h1>THIK SOLUTIONS</h1></Fade>
            <Fade left><p>Proffesional web solutions provider</p></Fade>
            {/* <button>Contact Us</button> */}
            </Left>

            <Right>
              <EffectBox>
                 <img src='/images/effect.png' /> 
              </EffectBox>

            </Right>
        </Wrap>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    z-index: -1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #219ae5;
    position: fixed;
    top: 0;



`

const Wrap = styled.div`
    width: 95%;
    display: flex;

    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }

`

const Left = styled.div`
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
    align-items: center;
    margin: 40px 0;
  }

  h3{
    font-size: 40px;

    @media only screen and (max-width: 1200px) {
      font-size: 25px;
    }
  }

  h1{
    font-size: 85px;

    @media only screen and (max-width: 1200px) {
      font-size: 50px;
    }

  }

  p{
    font-size: 30px;

    @media only screen and (max-width: 1200px) {
      font-size: 18px;
    }
  }

  button{
    margin-top: 30px;
    outline: none;
    border: none;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    font-size: 17px;
    letter-spacing: 1.1px;
  }
`

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

`

const EffectBox = styled.div`
  width: 80%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  animation: slideHome 10s linear 2s infinite alternate;

  &:hover{
    transform: translateX(-10px);
    cursor: pointer;
    background: #219ae5;
  }

  

  img{
    width: 90%;


  }

`
export default Home