import "@/styles/globals.css";
import "@/styles/Home.module.css";
import "../components/footballPitch/footballPitch.styles.css";
import "../components/ge_home/gameArea/gameArea.styles.css";
import "../components/home/confetti/confetti.styles.css";
import "../components/home/gameReviews/gameReviews.styles.css";
import "../components/home/homeGameNav/homeGameNav.styles.css";
import "../components/home/homeNavbar/homeNavbar.styles.css";
import "../components/howToPlay/htpCircle/htpCircle.styles.css";
import "../components/modal/foundLetters/foundLetters.styles.css";
import "../components/modal/gameInfoModal/gameInfoModal.styles.css";

import "../components/modal/modalGuess/modalGuess.styles.css";
import "../components/modal/modalSpace/modalSpace.styles.css";
import "../components/no_modal/formation/formation.styles.css";
import "../components/no_modal/hiddenLetter/hideenLetter.styles.css";
import "../components/no_modal/playerProfile/playerProfile.styles.css";
import "../components/no_modal/spaceChar/spaceChar.styles.css";
import "./guess-eleven/guess-eleven.styles.css";
import "./guess-eleven/how-to-play/howToPlay.styles.css";
import "../screens/loadingScreen/loadingScreen.styles.css";

import { Provider } from "react-redux";
import { store } from "@/store/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
