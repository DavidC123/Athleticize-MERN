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


class Womens extends React.Component {

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


    womensAdd(s) {
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

            if (s === 'womensProduct1') {
                name = "Athletic Leggings";
                price = 30;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/Captivate_Leggings_-_Black_A-EditEdit_DW_1024x1024.jpg?v=1571709233'
                this.setState({ show1: !this.state.show1 });    //close modal1
            } else if (s === 'womensProduct2') {
                name = "High Flex Leggings";
                price = 32;
                imageURL = 'https://cdn.shopify.com/s/files/1/0156/6146/products/Flex_High_Wasisted_Leggings_-_Charcoal_Marl_A-EditEdit_DW_1024x1024.jpg?v=1571263113'
                this.setState({ show2: !this.state.show2 });    //close modal2
            } else if (s === 'womensProduct3') {
                name = "Athletic Cropped Leggings";
                price = 30;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/Turbo_Cropped_Leggings_-_Black_A-Edit_CM_1024x1024.jpg?v=1571709205'
                this.setState({ show3: !this.state.show3 });    //close modal3
            } else if (s === 'womensProduct4') {
                name = "Premium Crop Top";
                price = 20;
                imageURL = 'https://cdn.shopify.com/s/files/1/0156/6146/products/VITAL_SEAMLESS_CROP_TO_BLACK_MARL.A-Edit_ZH_1024x1024.jpg?v=1581505575'
                this.setState({ show4: !this.state.show4 });    //close modal4
            } else if (s === 'womensProduct5') {
                name = "Essential Pullover Hoodie";
                price = 35;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/AURA_HOODIE_BLACK_A-EditEdit_DW_1024x1024.jpg?v=1571709220'
                this.setState({ show5: !this.state.show5 });    //close modal5
            } else if (s === 'womensProduct6') {
                name = "Premium Cropped Hoodie";
                price = 30;
                imageURL = 'https://cdn.shopify.com/s/files/1/1367/5207/products/Legacy_Fitness_Cropped_Jacket_-_Moroccan_Brick_A-EditEdit_DW_1024x1024.jpg?v=1562328235'
                this.setState({ show6: !this.state.show6 });    //close modal6
            } else if (s === 'womensProduct7') {
                name = "Crest Tee";
                price = 25;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/Ark_Tee-_Lilac_Grey_A-EditEdit_DW_1eb0a887-2d07-4d13-8c06-703a54d6c06e_1024x1024.jpg?v=1571709219'
                this.setState({ show7: !this.state.show7 });    //close modal7
            } else if (s === 'womensProduct8') {
                name = "Premium Tee";
                price = 25;
                imageURL = 'https://cdn.shopify.com/s/files/1/1367/5207/products/VITAL_SEAMLESS_SHORT_SLEEVE_TOP_BLACK.A-Edit_1024x1024.jpg?v=1580466024'
                this.setState({ show8: !this.state.show8 });    //close modal8
            } else if (s === 'womensProduct9') {
                name = "Rose Long Sleeve";
                price = 30;
                imageURL = 'https://cdn.shopify.com/s/files/1/2446/8477/products/VITAL_SEAMLESS_LONG_SLEEVE_TOP_ROSE_SLATE_MARL_A-EditEdit_DW_1024x1024.jpg?v=1571709216'
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
        if (localStorage.getItem('womensProduct1') === null ||
            localStorage.getItem('womensProduct2') === null ||
            localStorage.getItem('womensProduct3') === null ||
            localStorage.getItem('womensProduct4') === null ||
            localStorage.getItem('womensProduct5') === null ||
            localStorage.getItem('womensProduct6') === null ||
            localStorage.getItem('womensProduct7') === null ||
            localStorage.getItem('womensProduct8') === null ||
            localStorage.getItem('womensProduct8') === null) {

            var testObject = { size: [], price: 0, name: "", imageURL: "" };
            localStorage.setItem('womensProduct1', JSON.stringify(testObject));
            localStorage.setItem('womensProduct2', JSON.stringify(testObject));
            localStorage.setItem('womensProduct3', JSON.stringify(testObject));
            localStorage.setItem('womensProduct4', JSON.stringify(testObject));
            localStorage.setItem('womensProduct5', JSON.stringify(testObject));
            localStorage.setItem('womensProduct6', JSON.stringify(testObject));
            localStorage.setItem('womensProduct7', JSON.stringify(testObject));
            localStorage.setItem('womensProduct8', JSON.stringify(testObject));
            localStorage.setItem('womensProduct9', JSON.stringify(testObject));
        }

        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <br />
                    <h1>WOMEN'S</h1>
                    <Style>
                        <Row>
                            <Col>
                                <Image className="img" onClick={() => { this.setState({ show1: !this.state.show1 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/Captivate_Leggings_-_Black_A-EditEdit_DW_1024x1024.jpg?v=1571709233' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show1: !this.state.show1 }) }}>Athletic Leggings <br /><strong>$ 30.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show2: !this.state.show2 }) }} src='https://cdn.shopify.com/s/files/1/0156/6146/products/Flex_High_Wasisted_Leggings_-_Charcoal_Marl_A-EditEdit_DW_1024x1024.jpg?v=1571263113' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show2: !this.state.show2 }) }}>High Flex Leggings <br /><strong>$ 32.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show3: !this.state.show3 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/Turbo_Cropped_Leggings_-_Black_A-Edit_CM_1024x1024.jpg?v=1571709205
                                ' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show3: !this.state.show3 }) }}>Athletic Cropped Leggings <br /><strong>$ 30.00</strong></p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show4: !this.state.show4 }) }} src='https://cdn.shopify.com/s/files/1/0156/6146/products/VITAL_SEAMLESS_CROP_TO_BLACK_MARL.A-Edit_ZH_1024x1024.jpg?v=1581505575' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show4: !this.state.show4 }) }}>Premium Crop Top <br /><strong>$ 20.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show5: !this.state.show5 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/AURA_HOODIE_BLACK_A-EditEdit_DW_1024x1024.jpg?v=1571709220' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show5: !this.state.show5 }) }}>Essential Pullover Hoodie <br /><strong>$ 35.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show6: !this.state.show6 }) }} src='https://cdn.shopify.com/s/files/1/1367/5207/products/Legacy_Fitness_Cropped_Jacket_-_Moroccan_Brick_A-EditEdit_DW_1024x1024.jpg?v=1562328235' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show6: !this.state.show6 }) }}>Premium Cropped Hoodie <br /><strong>$ 30.00</strong></p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show7: !this.state.show7 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/Ark_Tee-_Lilac_Grey_A-EditEdit_DW_1eb0a887-2d07-4d13-8c06-703a54d6c06e_1024x1024.jpg?v=1571709219' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show7: !this.state.show7 }) }}>Crest Tee <br /><strong>$ 25.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show8: !this.state.show8 }) }} src='https://cdn.shopify.com/s/files/1/1367/5207/products/VITAL_SEAMLESS_SHORT_SLEEVE_TOP_BLACK.A-Edit_1024x1024.jpg?v=1580466024' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show8: !this.state.show8 }) }}>Premium Tee <br /><strong>$ 25.00</strong></p>
                            </Col>
                            <Col >
                                <Image className="img" onClick={() => { this.setState({ show9: !this.state.show9 }) }} src='https://cdn.shopify.com/s/files/1/2446/8477/products/VITAL_SEAMLESS_LONG_SLEEVE_TOP_ROSE_SLATE_MARL_A-EditEdit_DW_1024x1024.jpg?v=1571709216' fluid rounded />
                                <p className="txt" onClick={() => { this.setState({ show9: !this.state.show9 }) }}>Rose Long Sleeve<br /><strong>$ 30.00</strong></p>
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
                                <strong>Athletic Leggings</strong> <br />$ 30.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/Captivate_Leggings_-_Black_A-EditEdit_DW_1024x1024.jpg?v=1571709233' fluid rounded />
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
                            <Button style={{ display: "block", margin: '0 auto' }} onClick={() => this.womensAdd("womensProduct1")} size="lg" block >ADD TO CART</Button>
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
                                <strong>High Flex Leggings </strong> <br />$ 32.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/0156/6146/products/Flex_High_Wasisted_Leggings_-_Charcoal_Marl_A-EditEdit_DW_1024x1024.jpg?v=1571263113' fluid rounded />
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
                            <Button onClick={() => this.womensAdd("womensProduct2")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
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
                                <strong>Athletic Cropped Leggings </strong> <br />$ 30.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/Turbo_Cropped_Leggings_-_Black_A-Edit_CM_1024x1024.jpg?v=1571709205' fluid rounded />
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
                            <Button onClick={() => this.womensAdd("womensProduct3")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
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
                                <strong>Premium Crop Top </strong> <br />$ 20.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/0156/6146/products/VITAL_SEAMLESS_CROP_TO_BLACK_MARL.A-Edit_ZH_1024x1024.jpg?v=1581505575' fluid rounded />
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
                            <Button onClick={() => this.womensAdd("womensProduct4")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
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
                                <strong>Essential Pullover Hoodie </strong> <br />$ 35.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/AURA_HOODIE_BLACK_A-EditEdit_DW_1024x1024.jpg?v=1571709220' fluid rounded />
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
                            <Button onClick={() => this.womensAdd("womensProduct5")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
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
                                <strong>Premium Cropped Hoodie </strong> <br />$ 30.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/1367/5207/products/Legacy_Fitness_Cropped_Jacket_-_Moroccan_Brick_A-EditEdit_DW_1024x1024.jpg?v=1562328235' fluid rounded />
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
                            <Button onClick={() => this.womensAdd("womensProduct6")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
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
                                <strong>Crest Tee </strong> <br />$ 25.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/Ark_Tee-_Lilac_Grey_A-EditEdit_DW_1eb0a887-2d07-4d13-8c06-703a54d6c06e_1024x1024.jpg?v=1571709219' fluid rounded />
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
                            <Button onClick={() => this.womensAdd("womensProduct7")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
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
                                <strong>Premium Tee </strong> <br />$ 25.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/1367/5207/products/VITAL_SEAMLESS_SHORT_SLEEVE_TOP_BLACK.A-Edit_1024x1024.jpg?v=1580466024' fluid rounded />
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
                            <Button onClick={() => this.womensAdd("womensProduct8")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
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
                                <strong>Rose Long Sleeve</strong> <br />$ 30.00
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src='https://cdn.shopify.com/s/files/1/2446/8477/products/VITAL_SEAMLESS_LONG_SLEEVE_TOP_ROSE_SLATE_MARL_A-EditEdit_DW_1024x1024.jpg?v=1571709216' fluid rounded />
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
                            <Button onClick={() => this.womensAdd("womensProduct9")} style={{ display: "block", margin: '0 auto' }} size="lg" block >ADD TO CART</Button>
                        </Modal.Footer>
                    </Modal>

                </Container>
            </div>
        )
    }
}

export default Womens
