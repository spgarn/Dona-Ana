import React from "react";
import "./App.css";
import VadViGor from "./VadViGor";
import Galleri from "./Galleri";
import Kontakt from "./Kontakt";
import Studenter from "./Studenter";
import Hem from "./Hem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="Paddingen">
      <div className="OverHead">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div className="HeaderText">Fondation</div>
          <div>
            <a href="/Hem">
              <img
                style={{ borderRadius: "30px", height: "150px" }}
                src="https://i.imgur.com/Bwu7TPH.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="HeaderText">Dona Ana</div>
        </div>
        <div
          className="Div-Boxar"
          style={{
            marginTop: "0px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 10%",
            height: "250px",
            backgroundImage: "url('https://i.imgur.com/Y4H0bQf.jpg')"
          }}
        ></div>
        <Router>
          <div className="NavBar">
            <Link className="App-Link" to="/Hem">
              Hem
            </Link>
            <Link className="App-Link" to="/VadViGor">
              Vad vi gör
            </Link>
            <Link className="App-Link" to="/Studenter">
              Studenter
            </Link>
            <Link className="App-Link" to="/Galleri">
              Galleri
            </Link>
            <Link className="App-Link" to="/Kontakt">
              Kontakt
            </Link>
          </div>

          <Switch>
            <Route path="/" exact component={Hem}></Route>
            <Route path="/Hem" component={Hem}></Route>
            <Route path="/VadViGor" component={VadViGor}></Route>
            <Route path="/Studenter" component={Studenter}></Route>
            <Route path="/Galleri" component={Galleri}></Route>
            <Route path="/Kontakt" component={Kontakt}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
