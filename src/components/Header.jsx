import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged,signOut } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLoginDetails ,setSignOutState, selectUserName , selectUserPhoto } from "../features/user/userSlice";

const Header = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);

useEffect(()=>{
  onAuthStateChanged(auth,async(user)=>{
    if(user){
      setUser(user);
      navigate('/home')
    }

  });
},[userName]);

    const handleAuth = () => {
      if(!userName){
        signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          })
          .catch((error) => {
            alert(error.message);
          });
      }else if(userName){
        signOut(auth).then(()=>{
          dispatch(setSignOutState());
          navigate('/');
        }).catch((err)=>alert(err.message));
      }
      };

      const setUser=(user)=>{
        dispatch(
          setUserLoginDetails({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL,
          })
        )
      }

  return (
    <Nav>
    <Logo>
      <img src="/images/logo.svg" alt="Disney+" />
    </Logo>

    
      
    {
      userName && 
        <NavMenu>
          <a>
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg" alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
        </NavMenu>}
        {!userName ? 
      <Login onClick={handleAuth}>Login</Login>
  
        :<SignOut>
          <UserImg src={userPhoto} alt={userName} />
          <DropDown>
            <span onClick={handleAuth}>Sign out</span>
          </DropDown>
        </SignOut>
      }
  </Nav>
);
};


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu=styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    flex: 1;
    max-width: 880px;
    a{
        cursor:pointer;
        display:flex;
        align-items:center;
        /* padding:0 12px; */
        img{
            height:25px;
        }
        span {
            font-size: 17px;
            line-height: 100%;
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
    @media (max-width: 810px) {
    display: none;
  }
`


const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;