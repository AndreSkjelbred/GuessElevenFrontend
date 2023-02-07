import { useState, useEffect, Fragment } from "react";

import Confetti from "@/components/home/confetti/confetti.component";
import HomeNavbar from "../components/home/homeNavbar/homeNavbar.component";
import HomeGameNav from "@/components/home/homeGameNav/homeGameNav.component";
import GameReviews from "@/components/home/gameReviews/gameReviews.component";
import LoadingScreen from "@/screens/loadingScreen/loadingScreen.component";
import Head from "next/head";

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
      <Head>
        <title>Twire Arcade - Guess-Eleven and more!</title>
        <meta charset='UTF-8' />
        <meta
          name='description'
          content='The Brand New Football Arcade With Popular New Games Like Guess-Eleven'
        ></meta>
        <meta
          name='keywords'
          content='twire, twire arcade, guess eleven, football, missing eleven, guess, eleven, missing'
        ></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <meta
          name='google-site-verification'
          content='8En94HVVv_-Reu3yzqhPfUPpNOxyDf03rjFzb7uZM74'
        />
      </Head>
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
