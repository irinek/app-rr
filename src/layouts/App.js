import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.scss";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>{<Header />}</header>
          <main>
            <aside>{<Navigation />}</aside>
            <section className="page">{<Page />}</section>
            <div className="container">
              <div className="row">
                <div className="col-6">asd</div>
                <div className="colr-6">bsa</div>
              </div>
            </div>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
