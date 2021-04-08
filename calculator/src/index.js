import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './main.css';

const App = () => {

    const [state, setState] = useState({output: ""})

    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <div id="calculator">
                        <div id="display">0</div>
                        <Button id="clear" className="double">AC</Button>
                        <Button id="divide" className="simple">/</Button>
                        <Button id="multiply" className="simple">X</Button>
                        <Button id="seven" className="simple">7</Button>
                        <Button id="eight" className="simple">8</Button>
                        <Button id="nine" className="simple">9</Button>
                        <Button id="subtract" className="simple">-</Button>
                        <Button id="four" className="simple">4</Button>
                        <Button id="five" className="simple">5</Button>
                        <Button id="six" className="simple">6</Button>
                        <Button id="add" className="simple">+</Button>
                        <Button id="one" className="simple">1</Button>
                        <Button id="two" className="simple">2</Button>
                        <Button id="three" className="simple">3</Button>
                        <Button id="equals" className="simple">=</Button>
                        <Button id="zero" className="double">0</Button>
                        <Button id="decimal" className="simple">.</Button>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))