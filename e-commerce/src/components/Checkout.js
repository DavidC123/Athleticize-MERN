import React from 'react';
import { Container, Button, Row, Col, Card, Accordion, Image, Modal } from 'react-bootstrap';
import Information from "./Information"
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Checkout extends React.Component {

    constructor(props) {
        super(props);

        this.getBoolean = this.getBoolean.bind(this);

        this.getEmail = this.getEmail.bind(this);
        this.getName = this.getName.bind(this);
        this.getAddress = this.getAddress.bind(this);

        this.getCity = this.getCity.bind(this);
        this.getProvince = this.getProvince.bind(this);
        this.getCountry = this.getCountry.bind(this);
        this.getPostal = this.getPostal.bind(this);

        this.getPhone = this.getPhone.bind(this);

        this.state = {
            validInformation: false,

            email: "",
            name: "",
            address: "",
            city: "",
            province: "",
            country: "",
            postal: "",
            phone: "",
            shippingMethod: "TBD",
            shippingCost: 0,
            shippingSelected: false,
            orderID: "",
            showModal: false
        }
    }

    getBoolean(val) {
        this.setState({
            validInformation: val
        })
    }

    getEmail(val) {
        this.setState({
            email: val
        })
    }

    getName(val) {
        this.setState({
            name: val
        })
    }

    getAddress(val) {
        this.setState({
            address: val
        })

    }

    getCity(val) {
        this.setState({
            city: val
        })

    }

    getProvince(val) {
        this.setState({
            province: val
        })

    }

    getCountry(val) {
        this.setState({
            country: val
        })

    }

    getPostal(val) {
        this.setState({
            postal: val
        })

    }

    getPhone(val) {
        this.setState({
            phone: val
        })
    }

    updateInfoHeader() {

        if (this.state.validInformation === true) {
            return (
                <h1> &#10004; Information</h1>
            )
        } else {
            return (
                <h1> &#9312; Information</h1>
            )
        }
    }

    updateShippingHeader() {
        if (this.state.shippingSelected === true) {
            return (
                <h1> &#10004; Shipping</h1>
            )
        } else {
            return (
                <h1> &#9313; Shipping</h1>
            )
        }
    }

    setShipping(event) {
        this.setState({
            shippingMethod: event.target.value,
            shippingCost: Number(event.target.value.replace(/[^0-9.-]+/g, ""))
        })
        console.log(this.state.shippingMethod)
    }

    collapseShipping() {
        if (this.state.validInformation === true) {
            return (
                <Accordion.Collapse in={true} eventKey="1" >
                    <Card.Body>
                        <Container>
                            <p><strong>Contact: &emsp;</strong>{this.state.email}</p>
                            <hr />
                            <p><strong>Ship to: &emsp;</strong> {this.state.address}</p>
                            <hr />
                            <strong>Shipping Method</strong>
                            <br /><br />

                            <div onChange={this.setShipping.bind(this)}>
                                <input type="radio" value="$5.00" name="shipping" /> &ensp;Standard Shipping (4-5 Business Days) &emsp;&emsp;&emsp;&emsp; $5.00
                            <br />
                                <input type="radio" value="$8.00" name="shipping" /> &ensp;Express Shipping (1-2 Business Days) &emsp;&emsp;&emsp;&emsp;&ensp;&thinsp; $8.00
                            </div>

                            <Button style={{ float: 'right' }} onClick={() => this.state.shippingMethod !== "TBD" ? this.setState({ shippingSelected: true }) : this.setState({ shippingSelected: false })} size="lg" >Continue</Button>
                            <br />
                        </Container>
                    </Card.Body>
                </Accordion.Collapse>
            )
        }
    }

    collapsePayment() {
        if (this.state.shippingSelected === true) {
            return (
                <Accordion.Collapse in={true} eventKey="2">
                    <Card.Body>
                        <PayPalButton
                            amount={(Math.round(((this.props.location.state.subtotal + this.state.shippingCost) * 1.13) * 100) / 100).toFixed(2)}
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {

                                this.setState({
                                    orderID: data.orderID,
                                    showModal: !this.state.showModal
                                })

                                let tempArray = [];
                                var row = this.props.location.state.order;

                                for (var i = 0; i < row.length; i++) {
                                    const newItem = {
                                        name: row[i].name.slice(),
                                        quantity: row[i].quantity,
                                        size: row[i].sizes[0].slice(),
                                        imageURL: row[i].imageURL.slice()
                                    }
                                    tempArray.push(newItem);
                                }

                                //POST data to backend on successful payment
                                axios.post("/api/v1/orders", {
                                    name: this.state.name.slice(),
                                    orderNumber: data.orderID.slice(),
                                    address: (this.state.address + ", " + this.state.city + ", " + this.state.province + ", " + this.state.country).slice(),
                                    items: tempArray,
                                    shipping: this.state.shippingCost
                                });
                            }}
                            options={{
                                clientId: "AUO1bs3x7yVCUOHMzmzN6Mj61nbjj_5TK2N0nKoTmHoCic0fryj97PkU9sNhLXoQ2BCdEvr1UqqGuxz0"
                            }}
                        />

                    </Card.Body>
                </Accordion.Collapse>
            )
        }
    }



    render() {
        return (
            <div>
                <Modal
                    show={this.state.showModal}
                    //onHide={() => { this.setState({ showModal: !this.state.showModal }) }}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <h1 style={{ textAlign: "center" }}>PAYMENT SUCCESSFUL</h1>
                        <p style={{ fontSize: "4vw", textAlign: "center" }}>&#10004;</p>
                        <Link to={{
                            pathname: "/Confirmation/" + this.state.orderID,
                            state: {
                                name: this.state.name,
                                confirmationID: this.state.orderID,
                                address: this.state.address,
                                city: this.state.city,
                                province: this.state.province,
                                country: this.state.country,
                                postal: this.state.postal,
                                email: this.state.email,
                                shipping: this.state.shippingCost,
                                phone: this.state.phone,
                                date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
                                order: this.props.location.state.order,
                                subtotal: this.props.location.state.subtotal
                            }
                        }}> <Button style={{ margin: "0 auto", display: "block" }} size="lg" onClick={() => { this.setState({ showModal: false }); localStorage.clear() }}>Continue</Button>
                        </Link>
                    </Modal.Body>
                </Modal>

                <Container>
                    <br /><br /><br />

                    <Row>
                        <Col xs={8}>
                            <Accordion defaultActiveKey="0">
                                <Card>

                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">

                                            {this.updateInfoHeader()}
                                        </Accordion.Toggle>
                                    </Card.Header>

                                    <Accordion.Collapse in={true} eventKey="0">
                                        <Card.Body>
                                            <Information sendBoolean={this.getBoolean} sendEmail={this.getEmail}
                                                sendName={this.getName} sendAddress={this.getAddress} sendPhone={this.getPhone}
                                                sendCity={this.getCity} sendProvince={this.getProvince} sendCountry={this.getCountry} sendPostal={this.getPostal} />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            {this.updateShippingHeader()}
                                        </Accordion.Toggle>
                                    </Card.Header>

                                    {this.collapseShipping()}

                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            <h1> &#9314; Payment</h1>
                                        </Accordion.Toggle>
                                    </Card.Header>

                                    {this.collapsePayment()}
                                </Card>
                            </Accordion>
                        </Col>

                        <Col>
                            <p style={{ color: "grey" }} href='/Cart'><strong>YOUR ORDER &emsp;</strong>
                                <a href="/Cart" style={{ color: "silver" }}> EDIT SHOPPING CART </a></p>
                            <hr style={{
                                color: 'black',
                                backgroundColor: 'black',
                                borderColor: 'black'
                            }}></hr>
                            {this.props.location.state.order.map(item => {
                                return (
                                    <div>

                                        {item.sizes.map(size => {
                                            return (
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Image src={item.imageURL} fluid rounded />
                                                        </Col>
                                                        <Col style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignContent: "center",
                                                            flexDirection: "column"
                                                        }}>
                                                            <strong>{item.name}</strong>
                                                            <p>Quantity:<strong>{item.quantity}</strong></p>
                                                            <p>Size: <strong>{size}</strong></p>
                                                        </Col>
                                                        <Col style={{ textAlign: "right" }}>
                                                            <strong>${(Math.round(item.quantity * item.price * 100) / 100).toFixed(2)}</strong>
                                                        </Col>
                                                    </Row>
                                                    <hr />
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                            <Row>
                                <Col><p>Subtotal</p></Col>
                                <Col style={{ textAlign: "right" }}>
                                    <strong>${(Math.round(this.props.location.state.subtotal * 100) / 100).toFixed(2)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col><p>Shipping</p></Col>
                                <Col style={{ textAlign: "right" }}>
                                    <strong>{this.state.shippingMethod}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col><p>Taxes</p></Col>
                                <Col style={{ textAlign: "right" }}>
                                    <strong>${(Math.round(((this.props.location.state.subtotal + this.state.shippingCost) * 0.13) * 100) / 100).toFixed(2)}</strong>
                                </Col>
                            </Row>
                            <hr style={{
                                color: 'black',
                                backgroundColor: 'black',
                                borderColor: 'black'
                            }}></hr>

                            <Row>
                                <Col><p>Total</p></Col>
                                <Col style={{ textAlign: "right" }}>
                                    <strong>${(Math.round(((this.props.location.state.subtotal + this.state.shippingCost) * 1.13) * 100) / 100).toFixed(2)}</strong>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <br />

                </Container>
            </div>
        )
    }
}
export default Checkout
