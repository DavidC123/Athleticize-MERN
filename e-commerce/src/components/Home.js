import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import shopMens from '../images/theRock.jpg';
import shopWomens from '../images/womenHome.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"


const Style = styled.div`
    .jumbo{
    background: url(${shopMens}) no-repeat fixed bottom;
    background-size: cover;
    color: black;
    height: 75vh;
    }

    .jumbo2{
        background: url(${shopWomens}) no-repeat fixed;
        background-size: cover;
        color: black;
        height: 75vh;
        }

        .jumbo3{
            background-color: #212121;
            background-size: cover;
            color: white;
            }

            .linkedin{
                float: right;
                margin-left: 10px;
            }
`;


export const Home = () => (
    <div>
        <br />
        <br />
        <Style>
            <Jumbotron fluid className="jumbo">
                <Container>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>“Blood, Sweat and Respect.<br /> First Two You Give, <br />Last One You Earn”</h2>
                    <br />
                    <Button variant="dark" href="/Mens">SHOP MENS NOW</Button>
                </Container>
            </Jumbotron>
        </Style>

        <Style>
            <Jumbotron fluid className="jumbo2">
                <Container>
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Do It For The After Selfie</h2>
                    <br />
                    <Button variant="dark" href="/Womens">SHOP WOMENS NOW</Button>
                </Container>
            </Jumbotron>
        </Style>

        <Container>
            <p style={{ textAlign: "center", fontWeight: "bold" }}> <a href="/Mens"> SUMMER LAUNCH IS NOW LIVE! <br /> Be Athleticized  <FontAwesomeIcon icon={faFistRaised} size="lg" /></a> </p>
        </Container>
        <br />
        <footer>
            <Style>
                <Jumbotron fluid className="jumbo3">
                    <Container>
                        <a style={{ color: "inherit" }} href="/"><strong>Athleticize </strong><FontAwesomeIcon icon={faDumbbell} size="lg" /></a>
                        <strong className='linkedin'><a href="https://www.linkedin.com/in/david-chung1/">Follow Me On LinkedIn<FontAwesomeIcon className='linkedin' icon={faLinkedin} size="lg" /></a></strong>
                    </Container>
                </Jumbotron>
            </Style>
        </footer>
    </div >
)
