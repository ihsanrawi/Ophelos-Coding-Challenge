import React, { useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

import Statement from "./components/Statement";
import IncomeExpenditureRatings from "./components/IncomeExpenditureRatings";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [userId, setUserId] = useState(0);

  return (
    <Container className="h-100 py-3">
      <Row>
        <Col sm={12} className="text-center">
          <p>Ophelos Coding Challenge</p>
          <p>
            Get your <strong>I&E Ratings</strong> and <strong>Disposable Income</strong> now
          </p>
        </Col>
      </Row>
      <Row className="Content">
        <Col sm={12}>
          <Row className="justify-content-center">
            <Col sm={12} md={8}>
              <Statement {...{ setShowResult, setUserId }} />
            </Col>
            <Col sm={12} md={8} className="mt-3">
              {showResult && <IncomeExpenditureRatings {...{ userId }} />}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
