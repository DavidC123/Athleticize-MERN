import React from 'react'
import { Container, Button, Image } from 'react-bootstrap';


export const About = () => (
    <div>
        <Container>
            <br /><br /><br />
            <h1 style={{ textAlign: "center" }}>Athleticize Full-Stack E-Commerce Store</h1> <br />
            <p>
                This full stack E-Commerce store was brought into creation with my avid passion for
                UX design, full stack development, and my interest in health and fitness. As a young kid
                I've always wondered what it would be like to program a website. This Summer (Summer 2020)
                in the midst of quarantining, I decided to finally try to develop my own full stack website
                from scratch. I learned the MERN Stack (MongoDB, Express, React, and NodeJS) all within this
                summer and implemented it into the website you are browsing right now.
            </p><br />
            <Image style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "25%",
                maxHeight: "25%"
            }} src='https://i.kym-cdn.com/photos/images/original/001/624/070/2ac.jpg' fluid rounded /><br />

            <Button href='/' style={{ float: 'right' }
            } size="lg" >Return Home</Button>
        </Container>
    </div>
)
