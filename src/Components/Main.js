import { Component } from "react";
import HornedBeast from "./HornedBeast";
import { Container, Row, Col } from "react-bootstrap";

class Main extends Component {

  // if option 1 is selected = show all hornedbeasts with 1 horn. 
  render() {
    return (
      <div className="main">
        <Container fluid>
          <Row xxs={1} xs={2} sm={3} md={4} lg={5} xl={6} xxl={7} xxxl={8}>
            {this.props.allBeasts.map((beast) => {
              return (
                <Col key={beast.title}>
                  <HornedBeast
                    title={beast.title}
                    description={beast.description}
                    imageUrl={beast.image_url}
                    displayAsModal={this.props.displayAsModal}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
