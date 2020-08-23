import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function UserInput() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustomLeagueName">
          <Form.Label>League Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Please enter league name"
            defaultValue="Hardcore Harvest"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCutomAccountName">
          <Form.Label>Account Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Please enter account name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomRelam">
          <Form.Label>Relam</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Default is PC"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Relam.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Desired level</Form.Label>
          <Form.Control type="int" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid level.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>XPH</Form.Label>
          <Form.Control type="int" placeholder="Base valune in 10^6" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid XPH value.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export const TimeToNextLevel = () => <UserInput />;
