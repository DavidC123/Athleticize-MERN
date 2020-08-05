import React from 'react';
import { Row, Col, InputGroup, FormControl, Button, Container, Form } from 'react-bootstrap';


class Information extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            country: '',
            province: '',
            postal: '',
            phone: ''
        }
    }

    handleChange = (e, key) => {
        this.setState({ [key]: e.target.value });

        console.log(this.state.phone)
    }

    addInfo() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) && this.state.firstName !== '' && this.state.lastName !== '' &&
            this.state.address !== '' && this.state.city !== '' && this.state.country !== '' &&
            this.state.province !== '' && this.state.postal !== '' && this.state.phone !== '') {

            this.props.sendBoolean(true);

            this.props.sendEmail(this.state.email);
            this.props.sendName(this.state.firstName + " " + this.state.lastName);
            this.props.sendAddress(this.state.address);
            this.props.sendCity(this.state.city);
            this.props.sendProvince(this.state.province);
            this.props.sendCountry(this.state.country);
            this.props.sendPostal(this.state.postal);
            this.props.sendPhone(this.state.phone);

            console.log(true)
        } else {
            this.props.sendBoolean(false);
            alert("Please fill in all fields");
        }

    }


    render() {

        return (
            <div>
                <Container>
                    <h3>Contact Information</h3>
                    <Form>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Email" type='email' value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} />
                        </InputGroup>

                        <br />
                        <h3>Shipping Address</h3>

                        <Row>
                            <Col>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">First Name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter First Name" type='text' value={this.state.firstName} onChange={(e) => this.handleChange(e, 'firstName')} />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">Last Name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Last Name" type='text' value={this.state.lastName} onChange={(e) => this.handleChange(e, 'lastName')} />
                                </InputGroup>
                            </Col>
                        </Row>

                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Address</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Address" type='text' value={this.state.address} onChange={(e) => this.handleChange(e, 'address')} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">City</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter City" type='text' value={this.state.city} onChange={(e) => this.handleChange(e, 'city')} />
                        </InputGroup>

                        <Row>
                            <Col>
                                <p style={{ fontSize: '10px', margin: '0' }}>Country</p>
                                <select onChange={(e) => this.handleChange(e, 'country')} style={{ margin: '0', width: '100%' }}>
                                    <option value="" selected disabled hidden>Select A Country</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </Col>
                            <Col>
                                <p style={{ fontSize: '10px', margin: '0' }}>Province/State</p>
                                <select onChange={(e) => this.handleChange(e, 'province')} style={{ margin: '0', width: '100%' }}>
                                    <option value="" selected disabled hidden>Select A Province</option>
                                    <option value="Alberta">Alberta</option>
                                    <option value="British Columbia">British Columbia</option>
                                    <option value="Manitoba">Manitoba</option>
                                    <option value="New Brunswick">New Brunswick</option>
                                    <option value="Newfoundland And Labrador">Newfoundland And Labrador</option>
                                    <option value="Northwest Territories">Northwest Territories</option>
                                    <option value="Nova Scotia">Nova Scotia</option>
                                    <option value="Nunavut">Nunavut</option>
                                    <option value="Ontario">Ontario</option>
                                    <option value="Prince Edward Island">Prince Edward Island</option>
                                    <option value="Quebec">Quebec</option>
                                    <option value="Saskatchewan">Saskatchewan</option>
                                    <option value="Yukon Territory">Yukon Territory</option>
                                </select>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}>
                            <Col>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">Postal Code</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Postal Code" type='text' value={this.state.postal} onChange={(e) => this.handleChange(e, 'postal')} />
                                </InputGroup>
                            </Col>

                            <Col >
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">Phone Number</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Phone Number" type='text' value={this.state.phone} onChange={(e) => this.handleChange(e, 'phone')} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button style={{ float: 'right' }} onClick={() => this.addInfo()} size="lg" >Continue</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}
export default Information
