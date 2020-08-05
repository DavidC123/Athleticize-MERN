import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


class Confirmation extends React.Component {

    shippingDuration() {
        if (this.props.location.state.shipping === 5) {
            return "Standard delivery within 4-5";

        } else if (this.props.location.state.shipping === 8) {
            return "Express delivery within 1-2";
        }
    }

    render() {

        return (
            <div>
                <Container>
                    <br /><br /><br /><br />
                    <h1 style={{ textAlign: "center" }}> <FontAwesomeIcon icon={faCheckCircle} size="lg" /> Thank you for your order {this.props.location.state.name}!</h1>
                    <br />
                    <hr />
                    <h2 style={{ fontWeight: "bold" }}>Order Number: {this.props.location.state.confirmationID}</h2> <br />
                    <h3>A confirmation email has been sent to: {this.props.location.state.email}</h3> <hr /><br />

                    <Row>
                        <Col>
                            <h2 style={{ fontWeight: "bold" }}>Delivery Details</h2><hr />
                            <p>{this.props.location.state.name}</p>
                            <p>{this.props.location.state.address}</p>
                            <p>{this.props.location.state.city}, {this.props.location.state.province}, {this.props.location.state.country}</p>
                            <p>{this.props.location.state.postal}</p>
                            <p>{this.props.location.state.phone}</p>
                            <p>Order Date: {this.props.location.state.date}</p>
                        </Col>

                        <Col>
                            <h2 style={{ fontWeight: "bold" }}>Delivery Method </h2><hr />
                            <p>{this.shippingDuration()} business days from order date.</p>
                            <strong>Delivery Fee: ${this.props.location.state.shipping}.00</strong>
                        </Col>

                        <Col>
                            <h2 style={{ fontWeight: "bold" }}>Order Summary</h2><hr />

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
                                    <strong>${this.props.location.state.shipping}.00</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col><p>Taxes</p></Col>
                                <Col style={{ textAlign: "right" }}>
                                    <strong>${(Math.round(((this.props.location.state.subtotal + this.props.location.state.shipping) * 0.13) * 100) / 100).toFixed(2)}</strong>
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
                                    <strong>${(Math.round(((this.props.location.state.subtotal + this.props.location.state.shipping) * 1.13) * 100) / 100).toFixed(2)}</strong>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    <Button href='/' style={{ float: 'right' }} size="lg" >Continue Shopping</Button>
                    <br /><br /><br />
                </Container>
            </div>
        )
    }
}
export default Confirmation
