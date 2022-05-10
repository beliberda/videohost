import React from "react";
import Videolist from "../Videolist";
import Header from "../Header";
import RecomendList from "../RecomendList";
import "./style.css";

function Main() {
  return (
    <main>
      <Header/>
      <Videolist/>
      <RecomendList/>
    </main>
  );
}

export default Main;
