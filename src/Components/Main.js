import { Component } from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import { Container, Row, Col } from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider'

class Main extends Component {
  render() {
    return (

      <div className="main">
        <Container fluid>
          <Row  xxs={1} xs={2} sm={3} md={4} lg={5} xl={6} xxl={7} xxxl={8}>
            {data.map((beast) => {
              return (
                <Col key={beast.title}>
                  <HornedBeast
                    title={beast.title}
                    description={beast.description}
                    imageUrl={beast.image_url}
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
