import HomeNavbar from "../../../components/home/homeNavbar/homeNavbar.component";
import HtpCircle from "../../../components/howToPlay/htpCircle/htpCircle.component";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

function GeHowToPlay() {
  return (
    <Fragment>
      {/* <Helmet>
        <title>Guess Eleven How To Play</title>
        <meta name='description' content='Learn How To Play Guess Eleven!' />
        <link rel='canonical' href='/guess-eleven/how-to-play' />
      </Helmet> */}
      <div className='ge-how-to-play-root'>
        <HomeNavbar active='htp' />
        <div></div>
        <h2 className='htp-intro'>
          Welcome to Twires' GuessEleven game! Before you begin, it's important
          to familiarize yourself with the rules. Here you can find a detailed
          explanation of the GuessEleven game rules!
        </h2>
        <div className='htp-section'>
          <HtpCircle>1</HtpCircle>
          <p className='htp-text'>
            This game provides you with a random fixture from a random team,
            including information about the fixture, stadium, date, and
            tournament.
          </p>
        </div>
        <div className='htp-section inverted-section'>
          <p className='htp-text'>
            Your goal is to correctly guess the starting eleven players for the
            given fixture, using a set number of guesses per player.
          </p>

          <HtpCircle>2</HtpCircle>
        </div>
        <div className='htp-section'>
          <HtpCircle>3</HtpCircle>
          <p className='htp-text'>
            If you run out of guesses on a player, you can choose to add more
            guesses or reveal the player's identity.
          </p>
        </div>
        <div className='htp-section inverted-section'>
          <p className='htp-text'>
            If you're ready for a new fixture or have finished guessing, simply
            click the top left button to receive a new one.
          </p>

          <HtpCircle>4</HtpCircle>
        </div>
      </div>
    </Fragment>
  );
}

export default GeHowToPlay;
