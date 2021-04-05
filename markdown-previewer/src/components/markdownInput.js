import React from 'react';
import { Col, Badge } from 'react-bootstrap';

const MarkdownInput = () => {
    return (
        <Col xs={12} md={12} lg={5} style={{border: "solid 2px black", height: "500px", margin: "10px"}}>
            <h2 className="text-center"><Badge variant="light">Markdown Input</Badge></h2>

        </Col>
    );
};

export default MarkdownInput;