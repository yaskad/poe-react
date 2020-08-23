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
              View details
            </Link>
          </div>
          <div className="col-md-4">
            <h2>XP Penalty</h2>
            <p>
              A tool for calculating the XP penalty given charchter level and
              Map Tier orarea level.
            </p>
            <Link to="./" className="btn btn-secondary">
              View details
            </Link>
          </div>
          <div className="col-md-4">
            <h2>Aura Bot</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <Link to="./" className="btn btn-secondary">
              View details
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <footer className="container">
        <p>&copy; Yasser Kadhim 2020</p>
      </footer>
    </main>
  );
}

export const Home = () => <HomePage />;
