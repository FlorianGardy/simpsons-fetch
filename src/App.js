import React, { Component } from "react";
import "./App.css";
import Quote from "./Quote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: "",
      image: "",
      characterDirection: "",
      isLoading: false
    };
    this.getQuote = this.getQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
          characterDirection: data[0].characterDirection,
          isLoading: false
        });
      });
    this.setState({ isLoading: true });
  }

  handleClick() {
    this.getQuote();
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div>
        <h1>Simpson quotes</h1>
        <input type="button" onClick={this.handleClick} value="Click me" />
        <div className="App">
          <Quote {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
