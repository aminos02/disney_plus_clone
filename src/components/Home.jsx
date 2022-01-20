import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { collection, getDocs } from "firebase/firestore/lite";
import { selectNew, selectOriginal, selectRecommend, selectTrending, setMovies } from "../features/movie/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const movies={
      "recommend":[],
      "new":[],
      "original":[],
      "trending":[],
  };
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    querySnapshot.forEach((doc) => {
        movies[doc.data().type]=[...movies[doc.data().type], { id: doc.id, ...doc.data() }]         
    });
    dispatch(
        setMovies({...movies})
    )
  }, [userName]);


  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies title={'Recommended for You'} movies={useSelector(selectRecommend)} />
      <Movies title={'New to Disney+'} movies={useSelector(selectNew)} />
      <Movies title={'Originals'} movies={useSelector(selectOriginal)} />
      <Movies title={'Trending'} movies={useSelector(selectTrending)} />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;