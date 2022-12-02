import React from 'react'
import styled from 'styled-components'

function ProjectNav() {
  return (
    <Container>
      <ul>
        <li>GIS/GPS</li>
        <li>Web Applications</li>
        <li>GIS/GPS</li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    padding: 20px;

    ul{
        list-style: none;
        display: flex;

        li{
            padding: 0 10px;

            &:hover{
                cursor: pointer;
            }
        }

    }

`

export default ProjectNav
