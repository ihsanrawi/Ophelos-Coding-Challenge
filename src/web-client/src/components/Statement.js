import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { insertUser, insertStatement } from "../utils/api";

const InitialUserState = {
  name: "",
  email: "",
  phoneNumber: "",
  dob: "",
  address: "",
};

const InitialStatementState = {
  salary: 0,
  other: 0,
  mortgage: 0,
  rent: 0,
  utilities: 0,
  travel: 0,
  food: 0,
  loans: 0,
  cards: 0,
  userId: 0,
};

const Statement =   ({ setShowResult, setUserId }) => {
  const [userState, setUserState] = useState(InitialUserState);
  const [statementState, setStatementState] = useState(InitialStatementState);

  const handleUserStateChange = (key, value) => {
    setUserState({ ...userState, [key]: value });
  };

  const handleStatementStateChange = (key, value) => {
    setStatementState({ ...statementState, [key]: parseFloat(value) });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    var user = await insertUser(userState);
    const data = {...statementState, userId: user.id};

    await insertStatement(data);

    setShowResult(true);
    setUserId(user.id)
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            required
            value={userState.name}
            onChange={(e) => handleUserStateChange(e.target.id, e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="johndoe@email.com"
            required
            value={userState.email}
            onChange={(e) => handleUserStateChange(e.target.id, e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            placeholder="(0)12 3456789"
            required
            value={userState.phoneNumber}
            onChange={(e) => handleUserStateChange(e.target.id, e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            required
            value={userState.dob}
            onChange={(e) => handleUserStateChange(e.target.id, e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          required
          value={userState.address}
          onChange={(e) => handleUserStateChange(e.target.id, e.target.value)}
        />
      </Form.Group>
      <Form.Row>
        <Col sm={6} className="text-left">
          <Row className="mb-4">
            <Col sm={6}>Income</Col>
            <Col sm={6}>Amount</Col>
          </Row>
          <Row className="px-3">
            <Form.Group as={Row} controlId="salary">
              <Form.Label column sm={6}>
                Salary
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  size="sm"
                  type="text"
                  value={statementState.salary}
                  onChange={(e) => handleStatementStateChange(e.target.id, e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="other">
              <Form.Label column sm={6}>
                Other
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  size="sm"
                  type="text"
                  value={statementState.other}
                  onChange={(e) => handleStatementStateChange(e.target.id, e.target.value)}
                />
              </Col>
            </Form.Group>
          </Row>
        </Col>
        <Col sm={6} className="text-left">
          <Row className="mb-4">
            <Col sm={6}>Expenditure</Col>
            <Col sm={6}>Amount</Col>
          </Row>
          <Row className="px-3">
            <Form.Group as={Row} controlId="mortgage" className="w-100">
              <Form.Label column sm={6}>
                Mortgage
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  size="sm"
                  type="text"
                  value={statementState.mortgage}
                  onChange={(e) => handleStatementStateChange(e.target.id, e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="rent" className="w-100">
              <Form.Label column sm={6}>
                Rent
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  size="sm"
                  type="text"
                  value={statementState.rent}
                  onChange={(e) => handleStatementStateChange(e.target.id, e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="utilities" className="w-100">
              <Form.Label column sm={6}>
                Utilities
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  size="sm"
                  type="text"
                  value={statementState.utilities}
                  onChange={(e) => handleStatementStateChange(e.target.id, e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="travel" className="w-100">
              <Form.Label column sm={6}>
                Travel
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  size="sm"
                  type="text"
                  value={statementState.travel}
                  onChange={(e) => handleStatementStateChange(e.target.id, e.target.value)}
                />
              </Col>
            </Form.Group>
          </Row>
          <br />
          <Row className="px-3">
            Debt payments
            <Form.Group as={Row} controlId="loans" className="w-100">
              <Form.Label column sm={6}>
                Loans
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  size="sm"
                  type="text"
                  value={statementState.loans}
                  onChange={(e) => handleStatementStateChange(e.target.id, e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="cards" className="w-100">
              <Form.Label column sm={6}>
                Credit cards
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  size="sm"
                  type="text"
                  value={statementState.cards}
                  onChange={(e) => handleStatementStateChange(e.target.id, e.target.value)}
                />
              </Col>
            </Form.Group>
          </Row>
        </Col>
      </Form.Row>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Calculate</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Statement;
