import { initNewRound } from "../redux/teamInfo";
import { setInitIntro } from "../redux/video";
import { RESET_GUESS_ELEVEN } from "../../store/redux/guessEleven";

const createNewRound = function async(dispatch) {
  return fetch("https://twire-backend.onrender.com/sendtofrontend")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(RESET_GUESS_ELEVEN());
      return data;
    })
    .then((data) => {
      dispatch(initNewRound(data));
      dispatch(setInitIntro());
    });
};

export default createNewRound;
