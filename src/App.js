import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "./Components/data.json";
import { Component } from "react";
import SelectedBeast from "./Components/SelectedBeast";
import Form from 'react-bootstrap/Form';

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
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How Many Horns?</Form.Label>
            <Form.Control as="select" onChange={this.filter}>
              <option value="">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
        </Form>

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
