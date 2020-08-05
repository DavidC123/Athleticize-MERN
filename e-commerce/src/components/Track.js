import React from 'react'
import { Container, Button, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            orderNumber: '',
            address: '',
            shipping: 0,
            date: '',

            items: [],
            exists: false,
            buttonClicked: false,
            orderNumberHolder: '',
            estimate: ''
        }
    }

    handleChange = (e, key) => {
        this.setState({ [key]: e.target.value });
    }

    trackOrder = () => {

        //http GET order
        axios.get("/api/v1/orders").then(response => {
            var trackable = false;
            var jsonData = JSON.parse(JSON.stringify(response.data.data));

            //console.log(jsonData)

            for (var i = 0; i < jsonData.length; i++) { //loop through data array
                var counter = jsonData[i];
                if (counter.orderNumber === this.state.orderNumber) {
                    trackable = true;
                    this.setState({
                        orderNumberHolder: counter.orderNumber,
                        customerName: counter.name,
                        address: counter.address,
                        shipping: counter.shipping,
                        date: counter.createdAt,
                        items: []
                    })

                    for (var j = 0; j < counter.items.length; j++) {  //loop through nested items array

                        const newItem = {
                            name: counter.items[j].name.slice(),    //product name
                            quantity: counter.items[j].quantity,
                            size: counter.items[j].size.slice(),
                            imageURL: counter.items[j].imageURL.slice()
                        }

                        let tempList = this.state.items;
                        tempList.push(newItem)

                        this.setState({
                            items: tempList
                        })
                    }
                }
            }
            this.setState({
                exists: trackable,
                buttonClicked: true
            })
        })
    }

    outputDetails() {
        if (this.state.exists === false && this.state.buttonClicked === true) {
            return (
                <div>
                    <h1>INVALID ORDER NUMBER</h1>
                </div>
            )
        } else if (this.state.exists === true && this.state.buttonClicked === true) {

            if (this.state.shipping === 5) {
                this.setState({
                    shipping: "Standard Shipping",
                    estimate: "4-5 Business days"
                })
            } else if (this.state.shipping === 8) {
                this.setState({
                    shipping: "Express Shipping",
                    estimate: "1-2 Business days"
                })
            }

            var d = new Date(this.state.date);

            return (
                <div>
                    <h2><strong>Order Number: </strong> {this.state.orderNumberHolder}</h2>
                    <h3><strong>Delivery Status: </strong> Processing</h3> <br />
                    <div style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
                        <br />
                        <Row style={{ fontSize: "1.5vw" }}>
                            <Col><strong>DELIVERY DETAILS</strong></Col>
                            <Col><strong>SHIPPING DETAILS</strong></Col>
                            <Col><strong>ITEMS PURCHASED</strong></Col>
                        </Row>
                        <br />
                    </div>
                    <br />
                    <Row style={{ textAlign: "center" }}>
                        <Col>
                            <p><strong>Customer Name: </strong> {this.state.customerName}</p>
                            <p><strong>Delivery Location : </strong> {this.state.address}</p>
                            <p><strong>Order Purchased On: </strong> {d.toDateString()}</p>
                        </Col>

                        <Col>
                            <p><strong>Shipping Method : </strong> {this.state.shipping}</p>
                            <p><strong>Estimated Delivery Date: </strong> {this.state.estimate} from order purchased date</p>
                        </Col>

                        <Col>
                            {this.state.items.map(item => {
                                return (
                                    <div>
                                        <Row>
                                            <Col>
                                                <Image src={item.imageURL} fluid rounded />
                                            </Col>
                                            <Col xs={8} style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignContent: "center",
                                                flexDirection: "column"
                                            }}>
                                                <strong>{item.name}</strong>
                                                <p>Quantity:<strong>{item.quantity}</strong></p>
                                                <p>Size: <strong>{item.size}</strong></p>
                                            </Col>
                                        </Row>
                                        <hr />
                                    </div>
                                )
                            })}
                        </Col>
                    </Row>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <br /><br /><br />
                    <h1>Track Your Athleticize Order</h1>
                    <br />
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Order Number</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Order Number" type='text' value={this.state.orderNumber} onChange={(e) => this.handleChange(e, 'orderNumber')} />
                    </InputGroup>
                    <Button onClick={this.trackOrder}>Track Order Number</Button>
                    <br /><br /><br />
                    {this.outputDetails()}
                </Container>
            </div>
        )
    }
}
export default Track


