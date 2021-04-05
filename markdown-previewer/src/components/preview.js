import React from 'react';
import { Col, Badge } from 'react-bootstrap';

const Preview = () => {
    return (
        <Col xs={12} md={12} lg={5} style={{border: "solid 2px black", height: "500px", margin: "10px"}}>
            <h2 className="text-center"><Badge variant="light">Preview</Badge></h2>

        </Col>
    );
};

export default Preview;