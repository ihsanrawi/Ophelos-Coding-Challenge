import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

import { getIeRating } from "../utils/api";

const initialState = {
  disposableIncome: 0,
  ieRating: 'D',
  ieRatio: 0,
};

const IncomeExpenditureRatings = ({ userId }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (userId !== 0) {
      getIeRating(userId).then(data => {
        setState(data);
      });
    }
  }, [userId]);

  return (
    <>
      <Row className="text-center">
        <Col sm={12} className="badge badge-primary">
          <p className="lead">Your disposable income and I&E Rating result</p>
          <p className="lead">Disposable income = income - expenditure</p>
          <p className="lead">Expenditure-to-Income ratio formula = expenditure / income</p>
        </Col>
      </Row>
      <Row className="text-center justify-content-center my-5">
        <Col sm={6}>
          <p>
            Your disposable income is <strong>{state.disposableIncome}</strong> and ratio is <strong>{state.ieRatio}%</strong>
          </p>
          
        </Col>
        <Col sm={6}>
          <p>
            Your I&E Rating is <strong>{state.ieRating.toString()}</strong>
          </p>
        </Col>
        <Col sm={10} className="my-5">
          <Image src={process.env.PUBLIC_URL + "/images/IE-Rating.jpg"} thumbnail />
        </Col>
      </Row>
    </>
  );
};

export default IncomeExpenditureRatings;
