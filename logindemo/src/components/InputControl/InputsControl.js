import { SplitButton, MenuItem } from 'react-bootstrap';
import React, { Component } from 'react';

import { Form, Button, FormGroup, FormControl, ControlLabe, Col } from "react-bootstrap";
import './inputControl.css';

class InputsControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            country:"India",
            gender: "male",
            subscribe: false,
            description: ""
        }
         this.handleEventName = this.handleEventName.bind(this);
         this.handleEventCountry = this.handleEventCountry.bind(this);
         this.handleRadioChange = this.handleRadioChange.bind(this);
         this.handleSubscribe = this.handleSubscribe.bind(this);
         this.handleDescription = this.handleDescription.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEventName(event) {
        this.setState({ name: event.target.value });
    }
    handleEventCountry(event) {
        this.setState({ country: event.target.value });
    }
    handleRadioChange(event){
        this.setState({gender:event.target.value});
    }
    handleSubscribe(event){
        this.setState({subscribe:event.target.value});
    }
    handleDescription(event){
        this.setState({description:event.target.value});
    }
    handleSubmit(event) {
        alert('Name: ' + this.state.name + ' Country: ' + this.state.country + ' Gender: ' + this.state.gender + ' Subscribe: '+ this.state.subscribe + ' Description: '+ this.state.description);
        event.preventDefault();
    }


    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <h3> Registration Form </h3>
                        <Form.Group as={Col} controlId="formGridname">
                            <Form.Label column sm={2}>Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" value={this.state.name} onChange={this.handleEventName} placeholder="Enter email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridgender">
                            <Form.Label column sm={2} >Select Country</Form.Label>
                            <Col sm={10}>
                                <Form.Control as="select" value={this.state.country} onChange={this.handleEventCountry}>
                                    <option value='India'>India</option>
                                    <option value='Australia'>Australia</option>
                                    <option value='Newzeland'>Newzeland</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col} id="formGridsubscribe">
                        <Form.Label column sm={2} >Subscribe </Form.Label>
                            <Col sm={10}>
                                <Form.Check type="checkbox" value={this.state.subscribe} onChange={this.handleSubscribe} label="Is Subscribe" />
                            </Col>
                        </Form.Group>

                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        <Form.Label column sm={2} >Example textarea</Form.Label>
                        <Col sm={10}>
                        <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.handleDescription}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        <Form.Label column sm={2} >Gender</Form.Label>
                        <Col sm={10}>
                        <input type="radio" value="male" checked={this.state.gender === "male"} 
                         onChange={this.handleRadioChange} />
                         <span style={{ marginLeft: "5px" }} > Male </span>

                         <input type="radio" value="female" checked={this.state.gender === "female"} 
                         onChange={this.handleRadioChange} />
                         <span style={{ marginLeft: "5px" }} > Female </span>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Col} id="formGridsubscribe">
                        <Col sm={10}>
                            <Button variant="primary" type="submit"> Submit </Button>
                        </Col>
                    </Form.Group>
                    </Form.Row>
                </form>
        )
    }
}

export default InputsControl
