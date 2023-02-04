import { useState, useEffect, Fragment } from "react";

import Confetti from "@/components/home/confetti/confetti.component";
import HomeNavbar from "../components/home/homeNavbar/homeNavbar.component";
import HomeGameNav from "@/components/home/homeGameNav/homeGameNav.component";
import GameReviews from "@/components/home/gameReviews/gameReviews.component";
import LoadingScreen from "@/screens/loadingScreen/loadingScreen.component";

import * as url from "./homePageMain.jpg";
import { useDispatch } from "react-redux";
import { RESET_VIDEO } from "@/store/redux/video";
import {
  RESET_GUESS_ELEVEN,
  toggleGameActive,
} from "@/store/redux/guessEleven";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const dispatch = useDispatch();

  dispatch(RESET_VIDEO());
  dispatch(toggleGameActive(true));
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = url.default.src;

        loadImg.onload = () => resolve(image.url);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all([url].map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return imgsLoaded ? (
    <Fragment>
      {/*  <Helmet>
          <title>Twire Arcade</title>
          <meta name='description' content='Test Your Ball Knowledge Here' />
          <link rel='canonical' href='/' />
        </Helmet> */}
      <div className='root-container'>
        <Confetti />
        <HomeNavbar active='home' />
        <HomeGameNav />
        <h1 className='home-title'>TWIRE ARCADE</h1>
        <GameReviews />
      </div>
    </Fragment>
  ) : (
    <LoadingScreen />
  );
}
