import React from 'react'
import './stylesheet.css'
import styled from 'styled-components'
const StyleSheet = () => {
    const parastyled = {
        fontSize:'20px',
        backgroundColor:'yellow',
       
    }
    const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
    return (
        <Wrapper>
            <h1 className="primary">CSS Stylesheet</h1>
            <p className="secondary">Lorem Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem </p>
        <p style={parastyled}>Thanks for being there</p>
        <p style={{color:'red', backgroundColor:'pink', fontWeight:'bold'}}>Welcome it looks great</p>
        <Button>Normal</Button>
    <Button primary>Primary</Button>
        </Wrapper>
        
    )
}

export default StyleSheet
