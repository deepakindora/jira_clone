import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddBacklog from "./components/AddBacklog";
import { BacklogState } from "./context/BacklogState";
import ViewBacklog from "./components/ViewBacklog";
function App() {
  return (
    <BacklogState>
      <div> 
        <Container>
          <Row className="mt-5">
            <Col lg={12}><AddBacklog /><hr></hr></Col>
            <Col lg={12}><ViewBacklog /></Col>
          </Row>
        </Container>
      </div>
    </BacklogState>
  );
}

export default App;
