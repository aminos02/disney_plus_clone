import React from 'react'
import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
                <Background>

                 <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="playBlack" />
                </Background>
                <ImgTitle>
                 <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78" alt="" />
                </ImgTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="play" srcset="" />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                    <img src="/images/play-icon-black.png" alt="play" srcset="" />
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>
                            +
                        </span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png"/>
                    </GroupWatchButton>
                </Controls>
                <SubTitle>
                2015 • 1h 35m • Coming of Age, Family, Animation
                </SubTitle>
                <Description>
                When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.
                </Description>
                </Container>
   
   )
}

export default Detail

const Container=styled.div`
height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position: relative;

`
const Background=styled.div`
position: fixed;
inset:0;
z-index: -1;
opacity:0.8;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`
const ImgTitle=styled.div`
    height:30vh ;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls=styled.div`
display: flex;
align-items: center;
`

const PlayButton=styled.button`
border-radius: 4px;
font-size: 15px;
padding:0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background:rgb(249,249,249);
border:none;
letter-spacing: 1.8px;
cursor: pointer;

&:hover{
    background: rgb(198,198,198);
}
`
const TrailerButton=styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
`
const AddButton=styled.button`
margin-right: 16px;
width:44px;
height:44px;
display: flex;
align-items:center;
justify-content: center;
border-radius: 50%;
border:2px solid white;
background-color: rgba(0,0,0,0.6);
cursor:pointer;

span{
    font-size:30px;
    color:white;
}
`

const GroupWatchButton=styled(AddButton)`
margin-right: 0px;
background:#000
`

const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
`
const Description=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color: rgb(249,249,249);
`