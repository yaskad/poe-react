import React, { useState, useEffect, Fragment, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function UserInput() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://api.pathofexile.com/leagues?")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const [isSending, setIsSending] = useState(false)
  const [charData, setCharData] = useState([]);
  const [input, setInput] = useState('');

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual reques
    await fetch("http://api.pathofexile.com/{characterName}")
    .then((res) => res.json())
    .then(
      (result) => {
        setIsSending(true);
        setCharData(result);
      },
      (error) => {
        setError(error);
      }
    );
    // once the request is sent, update state again
    setIsSending(false)
  }, [isSending]) // update the callback if the state changes

  console.log(charData);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
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
          <Form.Group as={Col} md="4" controlId="validationCustomLeagueName">
            <Form.Label>League Name</Form.Label>
            <select className="form-control">
              {items.map((id) => (
                <option key={id.id}>{id.id}</option>
              ))}
            </select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCutomAccountName" id="accountName">
            <Form.Label>Account Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Please enter account name"
              value={input}
              onInput={e => setInput(e.target.input)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomRelam">
            <Form.Label>Character Name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Name of your character"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide the character name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>Desired level</Form.Label>
            <Form.Control type="int" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid level.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>XPH</Form.Label>
            <Form.Control type="int" placeholder="Value in millions" required />
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
        <Button type="submit" onClick={sendRequest()}>Submit form</Button>
      </Form>
    </Fragment>
  );
}

export const TimeToNextLevel = () => <UserInput />;
