import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
    return (
        <Container>
            <Row>
                <Col lg={6} id="drum-machine">
                    <div id="display">
                        <div className="drum-pad" id="">Q</div>
                        <div className="drum-pad" id="">W</div>
                        <div className="drum-pad" id="">E</div>
                        <div className="drum-pad" id="">A</div>
                        <div className="drum-pad" id="">S</div>
                        <div className="drum-pad" id="">D</div>
                        <div className="drum-pad" id="">Z</div>
                        <div className="drum-pad" id="">X</div>
                        <div className="drum-pad" id="">C</div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))