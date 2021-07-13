import React from "react";
import Button from "../../components/button/Button";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="typical-products">
        <div className="content">
          <h1>We Belive in Great Architecture</h1>
          <p>
            The first and most trusted marketplace of design & build house in
            The World
          </p>
          <Button content="View Project" />
        </div>
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="typical-products"
          />
        </div>
      </div>
      <div className="achievement">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=354&q=80"
            alt="achievement"
          />
        </div>
        <div className="content">
          <h1>We Are The Leader in The Architectural</h1>
          <p>
            For each project we establish relationships wiht partners who we
            know will help us create added value for your project. As well as
            bringing together the public and private sectors, we make
            sector-overarching links to gather knowledge and to learn from each
            other
          </p>
          <div className="items">
            <div className="item">
              <p className="big-num">850</p>
              <p>Property Build</p>
            </div>
            <div className="item">
              <p className="big-num">24</p>
              <p>Awards Gainded</p>
            </div>
            <div className="item">
              <p className="big-num">15</p>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
