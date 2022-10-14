import React from "react";
import logo from "./assets/images/logo.png";
import "./assets/stylesheets/Teams.css";
import leaders from "./assets/TeamsData/data";
import consultants from "./assets/TeamsData/consultants";
import electrical from "./assets/TeamsData/electrical";
import civil from "./assets/TeamsData/civil";
const Teams = () => {
  return (
    <section className="teams">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div>...</div>
        </div>
      </div>
      <div className="ourteams">
        <h1 className="text">Our Teams</h1>
        <h1 className="aims">
          {" "}
          &nbsp;&nbsp; INNOVATE &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; DEVELOP
          &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp; EMPOWER
          &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp; SUSTAIN{" "}
        </h1>
      </div>
      <div className="executives">
        <h1 className="text">Executive Team</h1>
        <div className="leaders">
          {leaders.map((leader, index) => {
            return (
              <div className="leader" key={index}>
                <img src={leader.image} alt="leader" />
                <h1>{leader.name}</h1>
                <h2>{leader.position}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="consultants">
        <h1 className="text">Consultants</h1>
        <div className="consultant">
          {consultants.map((consultant, index) => {
            return (
              <div className="consultant" key={index}>
                <img src={consultant.image} alt="consultant" />
                <h1>{consultant.name}</h1>
                <h2>{consultant.position}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="electrical">
        <h1 className="text">Electrical & Control Team</h1>
        <div className="electricals">
          {electrical.map((electrical, index) => {
            return (
              <div className="electrical" key={index}>
                <img src={electrical.image} alt="electrical" />
                <h1>{electrical.name}</h1>
                <h2>{electrical.position}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="civil">
        <h1>Civil & Environment Team </h1>
        <div className="civils">
          {civil.map((civil, index) => {
            return (
              <div className="civil" key={index}>
                <img src={civil.image} alt="civil" />
                <h1>{civil.name}</h1>
                <h2>{civil.position}</h2>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default Teams;
