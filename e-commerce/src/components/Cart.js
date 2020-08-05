import React from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Style = styled.div`
    .contain{
        text-align: center;
    }

    .b1{
        margin: 20px;
    }
    .b2{
        margin: 15px;
    }
    .img{
        height: auto; 
        width: auto; 
        max-width: 60%; 
        max-height: 60%;
    }
`;


class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            row: [
                // { name: "", sizes: [], quantity: 1 }
            ]
        }
    }

    changeQuant(id, s) {
        let tempList = this.state.row

        let tempList2 = tempList.filter((item) => item.id === id)

        var index = tempList.indexOf(tempList2);

        if (s === "increase" && tempList2[0].quantity < 20) {
            tempList2[0].quantity++;
        } else if (s === "decrease" && tempList2[0].quantity > 1) {
            tempList2[0].quantity--;
        }

        tempList[index] = tempList2;

        this.setState({
            row: tempList
        })

        var testObject = { size: tempList2[0].arrOfSizes, price: tempList2[0].price, name: tempList2[0].name, quantity: tempList2[0].quantity, imageURL: tempList2[0].imageURL };
        localStorage.setItem(tempList2[0].key, JSON.stringify(testObject));

    }

    deleteItem(id) {
        let tempList = this.state.row;

        let tempList2 = tempList.filter((item) => item.id !== id);

        this.setState({
            row: tempList2
        })

        let tempList3 = tempList.filter((item) => item.id === id);
        localStorage.removeItem(tempList3[0].key);

    }

    getTotal() {
        var total = 0;

        for (var i = 0; i < this.state.row.length; i++) {
            total += this.state.row[i].quantity * this.state.row[i].price;
        }
        return total
    }

    // checkOut() {
    //     localStorage.clear();
    // }

    componentDidMount() {

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);

            if (key !== "__paypal_storage__") {
                var obj = localStorage.getItem(key);
                var arr = JSON.parse(obj).size;
                var name = JSON.parse(obj).name;
                var price = JSON.parse(obj).price;
                var quantity = JSON.parse(obj).quantity;
                var imageURL = JSON.parse(obj).imageURL;

                for (var j = 0; j < arr.length; j++) {

                    var tempArray = [];
                    tempArray.push(arr[j]);

                    const newRow = {
                        id: Math.random() * Number.MIN_SAFE_INTEGER,
                        arrOfSizes: arr,
                        key: key,
                        name: name.slice(),
                        sizes: tempArray.slice(),
                        price: price,
                        quantity: quantity,
                        imageURL: imageURL
                    }

                    let tempList = this.state.row

                    tempList.push(newRow)


                    this.setState({
                        row: tempList
                    })
                }
                console.log(arr[0])
            }
        }

    }

    render() {

        if (!this.state.row.length < 1 || !this.state.row === undefined) {
            return (
                <div>
                    <Style>
                        <Container className="contain">
                            <br /><br /><br />
                            <h1 style={{ fontWeight: "bold" }}>CART</h1>
                            <br />
                            <div style={{ backgroundColor: "#eeeeee" }}>
                                <br />
                                <Row>
                                    <Col><strong>ITEM</strong></Col>
                                    <Col><strong>QUANTITY</strong></Col>
                                    <Col><strong>SUBTOTAL</strong></Col>
                                </Row>
                                <br />
                            </div>
                            <br />
                            {this.state.row.map(item => {
                                return (
                                    <div>

                                        {item.sizes.map(size => {
                                            return (
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <div>
                                                                <Image className="img" src={item.imageURL} fluid rounded />
                                                                <br />
                                                                <strong>{item.name}</strong>
                                                                <p>Size: <strong>{size}</strong></p>
                                                                <p>${(Math.round(item.price * 100) / 100).toFixed(2)}</p>
                                                            </div>
                                                        </Col>

                                                        <Col style={{ padding: "70px 0", textAlign: "center" }}>
                                                            <Button size="sm" onClick={() => this.changeQuant(item.id, "decrease")} className='b1'>-</Button>
                                                            <strong>{item.quantity}</strong>
                                                            <Button size="sm" onClick={() => this.changeQuant(item.id, "increase")} className='b2'>+</Button>
                                                        </Col>

                                                        <Col style={{ padding: "70px 0", textAlign: "center" }}>
                                                            <strong>${(Math.round(item.quantity * item.price * 100) / 100).toFixed(2)}</strong>
                                                            <br /><br />
                                                            <Button variant="danger" onClick={() => this.deleteItem(item.id)}>Delete Item</Button>
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
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                    <strong>TOTAL: &emsp;&emsp; ${(Math.round(this.getTotal() * 100) / 100).toFixed(2)}</strong>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                    <Link to={{
                                        pathname: "/Checkout",
                                        state: {
                                            order: this.state.row,
                                            subtotal: this.getTotal()
                                        }
                                    }}><Button size="lg">CHECK OUT</Button>
                                    </Link>
                                </Col>
                            </Row>
                            <br />

                        </Container>
                    </Style>
                </div>
            )
        } else {
            return (
                <div style={{ padding: "70px 0", textAlign: "center" }}>
                    <br /><br /><br /><br />
                    <h1>Your Cart Is Empty</h1>
                </div>
            )
        }
    }
}
export default Cart