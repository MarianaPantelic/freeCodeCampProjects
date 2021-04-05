import React, { useState } from 'react';
import { Col, Container, Form, Row, Badge } from 'react-bootstrap';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
let marked = require("marked");


const App = () => {

    const [state, setState] = useState({text: "# Markdown\n## Markdown\n[Check my **code** at:](https://github.com/MarianaPantelic/freeCodeCampProjects/tree/main/markdown-previewer)\n\n`This is inline code block`\n\n![Markdown Image](/download.png)\n\n<pre><code>This is code block\n\nSecond line</code></pre>\n* This is a list item\n\n> Enjoy"})

    const getText = (text) => {
        console.log(text)
        setState({text: text});
    }
    
    marked(state.text)

    return (
        <Container>
            <h1 className="text-center mt-5">Markdown Previewer</h1>
            <Row className="mt-5">
                <Col xs={12} md={12} lg={5} style={{border: "solid 2px black", height: "500px", margin: "10px"}}>
                    <h2 className="text-center"><Badge variant="light">Markdown Input</Badge></h2>
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" rows={15} value={state.text} onChange={(e)=>getText(e.target.value)} id="editor">
                                
                            </Form.Control>
                        </Form.Group>
                    </Form>

                </Col>
                <Col xs={12} md={12} lg={5} style={{border: "solid 2px black", height: "500px", margin: "10px"}}>
                    <h2 className="text-center"><Badge variant="light">Preview</Badge></h2>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(state.text) }}></div>
                </Col>
            </Row>
        </Container>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))