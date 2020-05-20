import { SplitButton, MenuItem } from 'react-bootstrap';
import React, { Component, useState } from 'react';

import { Form, Button, FormGroup, FormControl, ControlLabe, Col } from "react-bootstrap";
import './inputControl.css';

export function InputsControlFunctional(props) {

    const [name, setName] = useState("");
    const [country, setcountry] = useState("India");
    const [gender, setgender] = useState();
    const [subscribe, setsubscribe] = useState();
    const [description, setdescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name:  ${name}` + ` Country:  ${country}` + ` Gender:  ${gender}` + ` Subscribe: ${subscribe}` + ` Description: ${description}`);

    }

    return (
        <form onSubmit={handleSubmit}>
            <Form.Row>
                <h3> Registration Form </h3>
                <Form.Group as={Col} controlId="formGridname">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridgender">
                    <Form.Label column sm={2} >Select Country</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="select" value={country} onChange={e => setcountry(e.target.value)}>
                            <option value='India'>India</option>
                            <option value='Australia'>Australia</option>
                            <option value='Newzeland'>Newzeland</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Col} id="formGridsubscribe">
                    <Form.Label column sm={2} >Subscribe </Form.Label>
                    <Col sm={10}>
                        <Form.Check type="checkbox" value={subscribe} onChange={e => setsubscribe(e.target.value)} label="Is Subscribe" />
                    </Col>
                </Form.Group>

                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm={2} >Example textarea</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" rows="3" value={description} onChange={e => setdescription(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm={2} >Gender</Form.Label>
                    <Col sm={10}>
                        <input type="radio" value="male" checked={gender === "male"}
                            onChange={e => setgender(e.target.value)} />
                        <span style={{ marginLeft: "5px" }} > Male </span>

                        <input type="radio" value="female" checked={gender === "female"}
                            onChange={e => setgender(e.target.value)} />
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

export default InputsControlFunctional
