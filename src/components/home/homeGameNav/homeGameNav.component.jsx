import { useState, useEffect } from "react";

import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import Link from "next/link";

import {
  setVideoIsPlaying,
  setIntroDone,
  setInitIntro,
} from "../../../store/redux/video";
import { toggleGameActive } from "../../../store/redux/guessEleven";
import { useDispatch, useSelector } from "react-redux";

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

function HomeGameNav() {
  const dispatch = useDispatch();

  const { videoDoneLoading } = useSelector((state) => state.video);

  const [geReadMore, setGeReadMore] = useState(false);

  function readMoreGE() {
    setGeReadMore((geReadMore) => !geReadMore);
  }

  return (
    <div className='home-game-navigation'>
      <div className='home-game-container'>
        <div className='nav-column-item-container'>
          <h2>GUESS ELEVEN</h2>

          <Link className='video-play-button' href='/guess-eleven'>
            <span></span>
          </Link>
        </div>
        <div onClick={readMoreGE} className='text-container'>
          {geReadMore && (
            <p className='game-text guess-eleven-text'>
              Check out our new football game called Guess Eleven with all your
              favorite football teams and stars. Guess Eleven is a guessing game
              that involves guessing the correct line-up in a specific match and
              formation. Please let us know what you think about the game. Good
              luck!
            </p>
          )}
          <p className={`read-more-btn ${geReadMore ? "margin-up" : ""}`}>
            Read More
            {geReadMore ? (
              <FaCaretDown className='read-more-icon-btn hide-icon-title' />
            ) : (
              <FaCaretRight className='read-more-icon-btn hide-icon-title' />
            )}
          </p>
        </div>
      </div>
      <h3>More games coming soon!</h3>
    </div>
  );
}

export default HomeGameNav;
