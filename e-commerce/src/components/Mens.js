import React from 'react'
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';




const Style = styled.div`
    .img{
        cursor: pointer;
        text-align: center;
        &:hover{
        border: 0.2rem solid lightblue;
        box-shadow: 2px 2px 5px 0px lightblue;
        opacity: 0.5;
        }
    }

    .txt{
        cursor: pointer;
        text-align: center;
        &:hover{
            font-weight: bold;
        }
    }
`;


class Mens extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            show9: false,

            size: ''
        }
    }

    handleSize = (event) => {
        this.setState({ size: event.target.value });
    };


    mensAdd(s) {
        if (this.state.size === '') {
            alert("Please Enter A Size");
        } else {
            var obj = localStorage.getItem(s);
            var arr = JSON.parse(obj).size;
            arr.push(this.state.size);

            //make arr have distinct elements
            var uniqueArray = arr.filter(function (item, pos) {
                return arr.indexOf(item) === pos;
            })

            var price;
            var name;
            var imageURL;

            if (s === 'mensProduct1') {
                name = "Crest Pullover Hoodie";
                price = 35;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/CREST_PULLOVER_-_BLACK.A-Edit_ZH_1024x1024.jpg?v=1581332693'
                this.setState({ show1: !this.state.show1 });    //close modal1
            } else if (s === 'mensProduct2') {
                name = "Adapt Zip Hoodie";
                price = 40;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/Adapt_Zip_Hoodie_Black_Marl_A-Edit_ZH_1024x1024.jpg?v=1546617538'
                this.setState({ show2: !this.state.show2 });    //close modal2
            } else if (s === 'mensProduct3') {
                name = "Premium Long Sleeve";
                price = 30;
                imageURL = 'https://cdn.shopify.com/s/files/1/0156/6146/products/GEO_LIGHTWEIGHT_LS_T-SHIRT_-_BLACK_A-EditEdit_DW_2306e23a-91ec-4962-8792-41fcd1eead36.jpg?v=1570108106'
                this.setState({ show3: !this.state.show3 });    //close modal3
            } else if (s === 'mensProduct4') {
                name = "Premium Muscle Tee";
                price = 25;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/Veer_SS_T-Shirt_-_Eclipse_Blue_A-Edit_ZH_1024x1024.jpg?v=1571709213'
                this.setState({ show4: !this.state.show4 });    //close modal4
            } else if (s === 'mensProduct5') {
                name = "Premium Block Tee";
                price = 25;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/BLOCK_SS_T-SHIRT_-_Black_A-EditEdit_DW_1024x1024.jpg?v=1571709226'
                this.setState({ show5: !this.state.show5 });    //close modal5
            } else if (s === 'mensProduct6') {
                name = "Premium Joggers";
                price = 32.50;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/Critical_Joggers_-_Athletic_Marl_A-EditEdit_DW_1024x1024.jpg?v=1571709217'
                this.setState({ show6: !this.state.show6 });    //close modal6
            } else if (s === 'mensProduct7') {
                name = "Premium Shorts";
                price = 25;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/TECH_SHORT_-_BLACK_A-Edit_ZH_c34f940f-b225-4200-9f74-37007d02b25e_1024x1024.jpg?v=1571709208'
                this.setState({ show7: !this.state.show7 });    //close modal7
            } else if (s === 'mensProduct8') {
                name = "The Essential Tank";
                price = 20;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/Ion_Tank_Smokey_Grey_Marl_A_1024x1024.jpg?v=1571709147'
                this.setState({ show8: !this.state.show8 });    //close modal8
            } else if (s === 'mensProduct9') {
                name = "Premium Tank";
                price = 20;
                imageURL = 'https://cdn.shopify.com/s/files/1/0156/6146/products/Critical_Stringer_-_Black_A-Edit_ZH_800x.jpg?v=1571262854'
                this.setState({ show9: !this.state.show9 });    //close modal9
            }

            var testObject = { size: uniqueArray, price: price, name: name, quantity: 1, imageURL: imageURL };
            localStorage.setItem(s, JSON.stringify(testObject));

            this.setState({ size: '' });   //clear size1 from state

            window.location.href = "/Cart"; //navigate to /Cart page
        }
    }



    render() {
        //check if local storage is empty
        if (localStorage.getItem('mensProduct1') === null ||
            localStorage.getItem('mensProduct2') === null ||
            localStorage.getItem('mensProduct3') === null ||
            localStorage.getItem('mensProduct4') === null ||
            localStorage.getItem('mensProduct5') === null ||
            localStorage.getItem('mensProduct6') === null ||
            localStorage.getItem('mensProduct7') === null ||
            localStorage.getItem('mensProduct8') === null ||
            localStorage.getItem('mensProduct8') === null) {

            var testObject = { size: [], price: 0, name: "", imageURL: "" };
            localStorage.setItem('mensProduct1', JSON.stringify(testObject));
            localStorage.setItem('mensProduct2', JSON.stringify(testObject));
            localStorage.setItem('mensProduct3', JSON.stringify(testObject));
            localStorage.setItem('mensProduct4', JSON.stringify(testObject));
            localStorage.setItem('mensProduct5', JSON.stringify(testObject));
            localStorage.setItem('mensProduct6', JSON.stringify(testObject));
            localStorage.setItem('mensProduct7', JSON.stringify(testObject));
            localStorage.setItem('mensProduct8', JSON.stringify(testObject));
            localStorage.setItem('mensProduct9', JSON.stringify(testObject));
        }

        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <br />
                    <h1>MEN'S</h1>
                    <Style>
                        <Row>
                            <Col>
                                <Image className="img" onClick={() => { this.setState({ show1: !this.state.show1 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/CREST_PULLOVER_-_BLACK.A-Edit_ZH_1024x1024.jpg?v=1581332693' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show1: !this.state.show1 }) }}>Crest Pullover Hoodie <br /><strong>$ 35.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show2: !this.state.show2 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/Adapt_Zip_Hoodie_Black_Marl_A-Edit_ZH_1024x1024.jpg?v=1546617538' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show2: !this.state.show2 }) }}>Adapt Zip Hoodie <br /><strong>$ 40.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show3: !this.state.show3 }) }} src='https://cdn.shopify.com/s/files/1/0156/6146/products/GEO_LIGHTWEIGHT_LS_T-SHIRT_-_BLACK_A-EditEdit_DW_2306e23a-91ec-4962-8792-41fcd1eead36.jpg?v=1570108106' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show3: !this.state.show3 }) }}>Premium Long Sleeve <br /><strong>$ 30.00</strong></p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show4: !this.state.show4 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/Veer_SS_T-Shirt_-_Eclipse_Blue_A-Edit_ZH_1024x1024.jpg?v=1571709213' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show4: !this.state.show4 }) }}>Premium Muscle Tee <br /><strong>$ 25.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show5: !this.state.show5 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/BLOCK_SS_T-SHIRT_-_Black_A-EditEdit_DW_1024x1024.jpg?v=1571709226' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show5: !this.state.show5 }) }}>Premium Block Tee <br /><strong>$ 25.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show6: !this.state.show6 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/Critical_Joggers_-_Athletic_Marl_A-EditEdit_DW_1024x1024.jpg?v=1571709217' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show6: !this.state.show6 }) }}>Premium Joggers <br /><strong>$ 32.50</strong></p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show7: !this.state.show7 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/TECH_SHORT_-_BLACK_A-Edit_ZH_c34f940f-b225-4200-9f74-37007d02b25e_1024x1024.jpg?v=1571709208' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show7: !this.state.show7 }) }}>Premium Shorts <br /><strong>$ 25.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show8: !this.state.show8 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/Ion_Tank_Smokey_Grey_Marl_A_1024x1024.jpg?v=1571709147' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show8: !this.state.show8 }) }}>The Essential Tank <br /><strong>$ 20.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show9: !this.state.show9 }) }} src='https://cdn.shopify.com/s/files/1/0156/6146/products/Critical_Stringer_-_Black_A-Edit_ZH_800x.jpg?v=1571262854' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show9: !this.state.show9 }) }}>Premium Tank <br /><strong>$ 20.00</strong></p>
                            </Col>
                        </Row>
                    </Style>

                    <Modal
                        show={this.state.show1}
                        onHide={() => { this.setState({ show1: !this.state.show1, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>Crest Pullover Hoodie </strong> <br />$ 35.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/CREST_PULLOVER_-_BLACK.A-Edit_ZH_1024x1024.jpg?v=1581332693' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct1")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={this.state.show2}
                        onHide={() => { this.setState({ show2: !this.state.show2, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>Adapt Zip Hoodie </strong> <br />$ 40.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/Adapt_Zip_Hoodie_Black_Marl_A-Edit_ZH_1024x1024.jpg?v=1546617538' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct2")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={this.state.show3}
                        onHide={() => { this.setState({ show3: !this.state.show3, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>Premium Long Sleeve </strong> <br />$ 30.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/0156/6146/products/GEO_LIGHTWEIGHT_LS_T-SHIRT_-_BLACK_A-EditEdit_DW_2306e23a-91ec-4962-8792-41fcd1eead36.jpg?v=1570108106' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct3")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={this.state.show4}
                        onHide={() => { this.setState({ show4: !this.state.show4, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>Premium Muscle Tee </strong> <br />$ 25.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/Veer_SS_T-Shirt_-_Eclipse_Blue_A-Edit_ZH_1024x1024.jpg?v=1571709213' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct4")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={this.state.show5}
                        onHide={() => { this.setState({ show5: !this.state.show5, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>Premium Block Tee </strong> <br />$ 25.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/BLOCK_SS_T-SHIRT_-_Black_A-EditEdit_DW_1024x1024.jpg?v=1571709226' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct5")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={this.state.show6}
                        onHide={() => { this.setState({ show6: !this.state.show6, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>Premium Joggers </strong> <br />$ 32.50
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/Critical_Joggers_-_Athletic_Marl_A-EditEdit_DW_1024x1024.jpg?v=1571709217' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct6")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={this.state.show7}
                        onHide={() => { this.setState({ show7: !this.state.show7, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>Premium Shorts </strong> <br />$ 25.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/TECH_SHORT_-_BLACK_A-Edit_ZH_c34f940f-b225-4200-9f74-37007d02b25e_1024x1024.jpg?v=1571709208' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct7")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={this.state.show8}
                        onHide={() => { this.setState({ show8: !this.state.show8, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>The Essential Tank </strong> <br />$ 20.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/Ion_Tank_Smokey_Grey_Marl_A_1024x1024.jpg?v=1571709147' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct8")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={this.state.show9}
                        onHide={() => { this.setState({ show9: !this.state.show9, size: '' }) }}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <strong>Premium Tank </strong> <br />$ 20.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/0156/6146/products/Critical_Stringer_-_Black_A-Edit_ZH_800x.jpg?v=1571262854' fluid rounded />
                            <br /><br />
                            <select onChange={this.handleSize} style={{ display: "block", margin: '0 auto' }}>
                                <option value="" selected disabled hidden>SELECT SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.mensAdd("mensProduct9")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                </Container>
            </div>
        )
    }
}

export default Mens
