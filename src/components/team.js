import React, { Component } from "react";
import Member from "../assets/img/team.png"

class Team extends Component {
  render() {
    return (
      <div className="team-wrapper">
        <h1>TEAM</h1>
<div className="showcase-scroll">
<div className="showcase-container">
<div className="team-card">
<div  className="team-img">
<img src={Member} />
</div>
<div className="team-info">
  <h3>Mr. Justus Jamieson</h3>
  <p>Founder & CEO</p>
</div>
</div>
<div className="team-card">
<div  className="team-img">
<img src={Member} />
</div>
<div className="team-info">
  <h3>Mr. Justus Jamieson</h3>
  <p>Founder & CEO</p>
</div>
</div>
<div className="team-card">
<div  className="team-img">
<img src={Member} />
</div>
<div className="team-info">
  <h3>Mr. Justus Jamieson</h3>
  <p>Founder & CEO</p>
</div>
</div>
<div className="team-card">
<div  className="team-img">
<img src={Member} />
</div>
<div className="team-info">
  <h3>Mr. Justus Jamieson</h3>
  <p>Founder & CEO</p>
</div>
</div>
</div>
</div>
      </div>
    )
  }
}

export default Team;