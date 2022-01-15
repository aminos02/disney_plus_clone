import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <CTA>
                <img src="/images/cta-logo-one.svg"/>
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
            </Description>  
            <img src="/images/cta-logo-two.png"/>

            </CTA>
           
       </Container>
    )
}

export default Login


const Container=styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
justify-content: center;
align-items: center;

&:before{
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image:url("/images/login-background.jpg") ;
    position: absolute;
    content: "";
   inset: 0;
    z-index: -1;
}
`

const CTA=styled.div`    
max-width:650px;
padding: 80px 40px;
width: 90%;
display: flex;
flex-direction: column;
`
const SignUp=styled.a`
width: 100%;
    background:#0063e5;
    font-weight: bold;
    color: #f9f9f9;
    font-size: 18px;
    text-align: center;
    padding:17px 0;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 1.5px;
    transition: all 250ms;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background:#0483ee;
    }
`

const Description=styled.p`
 font-size:11px;
 letter-spacing:1.5px;
 text-align: center;
 line-height: 1.5;
`