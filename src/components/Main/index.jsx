import React from "react";
import Videolist from "../Videolist";
import Header from "../Header";
import RecomendList from "../RecomendList";
import MyButton from "../UI/Button";
import Play from "../../assets/playBtn.svg";
import "./style.css";

function Main() {
  return (
    <main>
      <Header/>
      <Videolist/>
      <RecomendList/>
    <MyButton className="AuthorizeBtn"><img src={Play} alt="" /> Authorize</MyButton>
    </main>
  );
}

export default Main;
