import { Component } from "react";

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: "",
    };
  }
  pickFavourite = () => {
    this.setState({
      numOfClicks: this.state.numOfClicks + "❤️",
    });

    this.props.displayAsModal(this.props.title);
  };

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          onClick={this.pickFavourite}
          alt={this.props.description}
          title={this.props.title}
          style={{ width: "100%" }}
        />
        <p>{this.props.description}</p>
        <span>{this.state.numOfClicks}</span>
      </>
    );
  }
}

export default HornedBeast;
