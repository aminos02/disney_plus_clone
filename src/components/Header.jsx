import React from 'react'
import styled from 'styled-components'
const Header = () => {
    return (
        <Nav>
            <Logo src='/images/logo.svg'/>
            
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCH LIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImg src='https://lh3.googleusercontent.com/ogw/ADea4I42y7pdxKmc6UkdlG3WeT-Ruj5gEpkqOll4-Wuemw=s83-c-mo'/>
        </Nav>
    )
}

export default Header;
const Nav=styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x:hidden;
    `

const Logo=styled.img`
    width:80px;
    cursor:pointer;
`
const NavMenu=styled.div`
    display:flex;
    flex:1;
    padding:0 2rem;
    align-items:center;

    a{
        cursor:pointer;
        display:flex;
        align-items:center;
        padding:0 12px;

        img{
            height:20px;
        }

        span {
            font-size: 17px;
            letter-spacing: 1.42px;
            position:relative;

            &:before{
                content:"";
                height:2px;
                background-color:white;
                position:absolute;
                left:0;
                opacity:0;
                bottom:-6px;
                width:0;
                transition:all 0.5s;
            }
            
            
        }
        &:hover{
            span:before{
                width:100%;
                opacity:1;
            }
        }
    }
`

const UserImg=styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
`