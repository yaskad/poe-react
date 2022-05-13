import React, { useState, useEffect, Fragment, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useFetch } from "../components/FetchData";

function UserInput() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [league, setSelectedLeague] = useState();

  //For acc name
  // const [query, setQuery] = useState("");
  // const url =
  //   query &&
  //   `https://www.pathofexile.com/character-window/get-characters?accountName=${query}`;
  // const { status, data } = useFetch(url);

  // useEffect(() => {
  //   fetch("https://api.pathofexile.com/leagues?")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Fragment>
      <p className="lead">Grind Time Calculator</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomAccountName"
            id="accountName"
          >
            <Form.Label>Account Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Please enter account name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomLeagueName">
            <Form.Label>League Name</Form.Label>
            <select
              className="form-control"
              onChange={(e) => setSelectedLeague(e.currentTarget.value)}
            >
              {items.map((id) => (
                <option key={id.id}>{id.id}</option>
              ))}
            </select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomCharacterName">
            <Form.Label>Character Name</Form.Label>
            <select className="form-control">
            </select>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>Desired level</Form.Label>
            <Form.Control type="int" placeholder="Int UserInput" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid level.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>XPH</Form.Label>
            <Form.Control type="int" placeholder="Fetch from API" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid XPH value.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Current Level</Form.Label>
            <Form.Control
              type="int"
              placeholder="Fetch from API"
              readOnly={true}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid XPH value.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Current XP</Form.Label>
            <Form.Control type="int" placeholder="Fetch from API" required />
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
        <Button type="submit" onClick={useFetch} disabled>
          Submit form
        </Button>
      </Form>
    </Fragment>
  );
}

export const TimeToNextLevel = () => <UserInput />;
