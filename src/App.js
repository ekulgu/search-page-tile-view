import React from "react";
import Button from "./components/Button";
import CardContainer from "./components/Card";
import SearchBar from "./components/SearchBar";
import { MdNotifications } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div>
          <img
            alt="Vectara"
            width="90"
            src="https://vectara.com/wp-content/uploads/2022/08/vectara-color-logo.svg"
          />
        </div>
        <div className="profile-container">
          <div>
            <MdNotifications />
          </div>
          <div>
            <BsQuestionCircleFill />
          </div>
          <div>
            <RxAvatar style={{ fontSize: "26px" }} />
          </div>
        </div>
      </div>
      <div className="body-container">
        <div className="title-container">
          <div className="title-text">Corpa</div>
          <Button />
        </div>

        <SearchBar placeholder={"Filter by name or description ..."} />

        <div className="card-container">
          <CardContainer status={"Enabled"} velocity={"High"} />
          <CardContainer status={"Disabled"} />
          <CardContainer status={"Enabled"} />
          <CardContainer status={"Enabled"} />
          <CardContainer status={"Disabled"} />
          <CardContainer status={"Enabled"} velocity={"High"} />
        </div>
      </div>
    </div>
  );
}
