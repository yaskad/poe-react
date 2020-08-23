import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import elShaperImage from "../assets/ElShaper.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${elShaperImage}) no-repeat fixed bottom;
    background-size: cover;
    background-position: center top;
    color: #efefef;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
    height: 400px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <Container>
        <h1 className="display-3">Path Of Exile Tools</h1>
        <p className="lead">This site is still under construction.</p>
      </Container>
    </Jumbo>
  </Styles>
);
