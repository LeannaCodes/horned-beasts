import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "./Components/data.json";
import { Component } from "react";
import SelectedBeast from "./Components/SelectedBeast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: data,
      displayModal: false,
      selectedBeast: {},
    };
  }

  displayAsModal = (name) => {
    const selectedBeast = data.find((beast) => {
      return beast.title === name;
    });

    // const shortHand = data.find(beast => beast.title === name)

    this.setState({
      selectedBeast,
      displayModal: true,
    });
  };

  handleClose = () => {
    this.setState({ displayModal: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          allBeasts={this.state.allBeasts}
          displayAsModal={this.displayAsModal}
        />
        <SelectedBeast
          show={this.state.displayModal}
          handleClose={this.handleClose}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
