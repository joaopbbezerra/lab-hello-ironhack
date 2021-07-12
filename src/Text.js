import logo from './logo.svg';
import './App.css';
import logoReact from "./react-logo.svg"
import Navbar from "./Navbar"

function Text() {
  return (
    <div className="background-image margins flex-text">
      <h1 class="text-margins">
        Say hello to ReactJS
      </h1>
      <p class="width-text text-margins">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
      <button type="submit" class="awesome-button text-margins">
        Awesome!
      </button>
    </div>
  );
}

export default Text;