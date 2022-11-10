import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Sidebar from "../../Sidebar";
// import MessageForm from "../../MessageForm";
import MessagesSlide from "../../MessagesSlide";
function Messages() {
  return (
    <Container>
      <Row>
        {/* <Col md={4}>
          <Sidebar />
        </Col> */}
        <Col md={8}>
          <MessagesSlide />
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
