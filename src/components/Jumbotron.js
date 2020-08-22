import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import elShaperImage from '../assets/ElShaper.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${elShaperImage}) no-repeat fixed bottom;
        background-size: cover;
        background-position: center top;
        color: #efefef;
        height: 200px;
        position: releative;
        z-index: -2
    }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <Container>
                <h1>Welcome</h1>
                <p>WIP poe calculator</p>
            </Container>
        </Jumbo>
    </Styles>
)
