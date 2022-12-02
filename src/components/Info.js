import React from 'react'
import styled from 'styled-components'

function Info() {
  return (
    <Container>
        <Wrap>
            <Header>
                <h1>DELIVERING CUSTOMIZED DIGITAL SOLUTIONS</h1>
                <h4>We deliver Strategically, functionally, creatively and commercially.</h4>
            </Header>
            <Content>
                <Box style={{backgroundImage: 'linear-gradient(180deg, #0000004A 0%, #000000 100%), url("/Images/box1.webp")'}}>
                    <BoxText>
                    <h1>LATEST TECHNOLOGY</h1>
                    <p>We uses latest technology for our solutions to make sure our customers are not outdated and secured.</p>
                    </BoxText>
                </Box>

                <Box style={{backgroundImage: 'linear-gradient(180deg, #0000004A 0%, #000000 100%), url("/Images/box2.jpg")'}}>
                    <BoxText>
                    <h1>INDUSTRY STANDARDS</h1>
                    <p>Follows industry standards and best practices while developing solutions for our customers requirements.</p>
                    </BoxText>
                </Box>

                <Box style={{backgroundImage: 'linear-gradient(180deg, #0000004A 0%, #000000 100%), url("/Images/box3.jpg")'}}>
                    <BoxText>
                    <h1>HIRE PROFFESSIONALS</h1>
                    <p>Our strength is our qualified proffessionals who doing their job at best of their litmits to satisfy customers.</p>
                    </BoxText>
                </Box>

                <Box style={{backgroundImage: 'linear-gradient(180deg, #0000004A 0%, #000000 100%), url("/Images/box4.png")'}}>
                    <BoxText>
                    <h1>PREMIUM SUPPORT</h1>
                    <p>We proud about our customer support team and hundrads of feedbacks making support team more active and helpful.</p>
                    </BoxText>
                </Box>

                
            </Content>
        </Wrap>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: white;
    display: flex;
    justify-content: center;

`

const  Wrap = styled.div`
    width: 98%;
    

`
const Header = styled.div`
    text-align: center;
    padding: 30px ;
    border-bottom: 1px solid #59b4ed;

    h4{
        color: #6e6b6b;
    }
    h1{
        font-size: 50px;
        margin-bottom: 10px;
    }


`

const Content = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    flex-wrap: wrap;

`
const Box = styled.div`
    width: 25%;
    height: 250px;
    background-size: Cover;
    color: white;
    border-radius: 15px; 
    position: relative;
    margin: 20px;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
`

const BoxText = styled.div`
    position: absolute;
    bottom: 0;
    padding: 10px;

    h1{
        font-size: 20px;
    }
    p{
        font-size: 15px;
        color: #6e6b6b;
    }
`
export default Info