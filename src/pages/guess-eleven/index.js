import GameArea from "../../components/ge_home/gameArea/gameArea.component";

import { Fragment, useEffect, useState } from "react";
import { createStartingXI } from "../../store/redux/guessEleven";
import { useDispatch, useSelector } from "react-redux";

import ModalGuess from "../../components/modal/modalGuess/modalGuess.component";
import HomeNavbar from "../../components/home/homeNavbar/homeNavbar.component";

import {
  setGameDate,
  setHome,
  setLeague,
  setOpponent,
  setOpponentLogo,
  setStadium,
  setTeamLogo,
  setTeamName,
} from "../../store/redux/teamInfo";
import LoadingScreen from "../../screens/loadingScreen/loadingScreen.component";
import { setIntroDone, setVideoDoneLoading } from "../../store/redux/video";
import { setVideoIsPlaying, setInitIntro } from "../../store/redux/video";
import { toggleGameActive } from "../../store/redux/guessEleven";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import { initNewRound } from "../../store/redux/teamInfo";
import createNewRound from "../../store/functions/model";
import Image from "next/image";

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });
};

/* import $ from "jquery"; */

/* const data = {
  restock_database: true,
}; */

/* const data = {
  formation: "4-3-3",
  team: [
    {
      side: "away",
      name: "Liverpool",
      winner: true,
    },
  ],
  opponent: [
    {
      side: "home",
      name: "Bayern Munich",
      winner: false,
    },
  ],
  score: [
    {
      home: 1,
      away: 3,
    },
  ],
  logo: "https://media.api-sports.io/football/teams/40.png",
  stadium: "Allianz Arena",
  date: "2019-03-13",
  league: "UEFA Champions League",
  season: "2018",
  round: "8th Finals",
  startxi: {
    G: [
      {
        name: "Alisson",
        number: "13",
        photo: "https://media.api-sports.io/football/players/280.png",
      },
    ],
    D: [
      {
        name: "Matip",
        number: "32",
        photo: "https://media.api-sports.io/football/players/286.png",
      },
      {
        name: "Dijk",
        number: "4",
        photo: "None",
      },
      {
        name: "Robertson",
        number: "26",
        photo: "https://media.api-sports.io/football/players/289.png",
      },
      {
        name: "Alexander-Arnold",
        number: "66",
        photo: "https://media.api-sports.io/football/players/283.png",
      },
    ],
    M: [
      {
        name: "Milner",
        number: "7",
        photo: "https://media.api-sports.io/football/players/296.png",
      },
      {
        name: "Wijnaldum",
        number: "5",
        photo: "https://media.api-sports.io/football/players/300.png",
      },
      {
        name: "Henderson",
        number: "14",
        photo: "https://media.api-sports.io/football/players/292.png",
      },
    ],
    F: [
      {
        name: "Firmino",
        number: "9",
        photo: "https://media.api-sports.io/football/players/302.png",
      },
      {
        name: "Salah",
        number: "11",
        photo: "https://media.api-sports.io/football/players/306.png",
      },
      {
        name: "Mane",
        number: "10",
        photo: "https://media.api-sports.io/football/players/304.png",
      },
    ],
  },
}; */

function GuessEleven() {
  const dispatch = useDispatch();

  useEffect(() => {
    createNewRound(dispatch).then(() => {
      setInitialedIntro(true);
      dispatch(toggleGameActive(true));
    });
  }, []);

  const [initialedIntro, setInitialedIntro] = useState(false);
  const [gameBegun, setGameBegun] = useState(false);

  const [videoRef, setVideoRef] = useState(null);

  const [isCancelled, setIsCancelled] = useState(false);
  const timeoutIds = useRef([]);

  useEffect(() => {
    if (videoRef) {
      videoRef.onloadedmetadata = () => {
        startGameHandler();
      };
    }
    return () => {
      timeoutIds.current.forEach((id) => clearTimeout(id));
    };
  }, [videoRef, dispatch]);

  const { videoIsPlaying, initIntro } = useSelector((state) => state.video);

  const startGameHandler = async () => {
    try {
      dispatch(toggleGameActive(true));
      setGameBegun(true);
      dispatch(setVideoIsPlaying(true));
      await wait(2);
      if (!isCancelled) {
        dispatch(setVideoIsPlaying(false));
        setInitialedIntro(false);
        dispatch(setInitIntro(false));
        await wait(0.2);
        if (!isCancelled) {
          dispatch(setIntroDone(true));
        }
      }
    } catch (error) {}
  };

  const { isModalOpen } = useSelector((state) => state.guessEleven);

  function TeamLogo({ teamLogo }) {
    return (
      <div className='primary-team-logo img'>
        <Image alt='primary team' src={teamLogo} />
      </div>
    );
  }

  return (
    <Fragment>
      {/*  <Helmet>
        <title>Guess Eleven</title>
        <meta
          name='description'
          content='Prove Your Immense Ball Knowledge And Play Guess Eleven!'
        />
        <link rel='canonical' href='/guess-eleven' />
      </Helmet> */}
      <div className={`guess-eleven-container `}>
        <HomeNavbar />
        {!gameBegun && <LoadingScreen />}
        {initialedIntro && (
          <div className='start-transform'>
            <video
              ref={setVideoRef}
              autoPlay
              muted
              className='video'
              src='/geIntro.mp4'
            />
          </div>
        )}
        {/*  <GameInfo/> */}

        {!initialedIntro && <GameArea />}
        {isModalOpen && <ModalGuess />}
      </div>
    </Fragment>
  );
}

export default GuessEleven;
