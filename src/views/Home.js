import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main role="main">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Grinding Time</h2>
            <p>
              This tool helps you figure out the time needed to reach a desired
              level, given an XPH value.
            </p>
            <Link to="./GrindingTime" className="btn btn-secondary">
              Click here to get started
            </Link>
          </div>
          <div className="col-md-4">
            <h2>XP Penalty</h2>
            <p>
              A tool for calculating the XP penalty given character level and
              Map Tier or area level.
            </p>
            <Link to="./" className="btn btn-secondary" disabled>
              WIP
            </Link>
          </div>
          <div className="col-md-4">
            <h2>Aura Bot</h2>
            <p>
              THIS IS WIP!
            </p>
            <Link to="./" className="btn btn-secondary" disabled>
              WIP
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <footer className="container">
        <p>&copy; Yasser Kadhim 2022</p>
        <p>This product isn't affiliated with or endorsed by Grinding Gear Games in any way.</p>
      </footer>
    </main>
  );
}

export const Home = () => <HomePage />;
