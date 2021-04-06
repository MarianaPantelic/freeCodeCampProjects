import React, { useState } from 'react';
import { Col, Container, Form, Row, Badge } from 'react-bootstrap';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
let marked = require("marked");

const initState = {
    text: `# Heading 1\n## Heading 2\n- list item 1\n- list item 2\n\n[Check my **code**](https://github.com/MarianaPantelic/freeCodeCampProjects/tree/main/markdown-previewer)\n\nThis is inline code: \`<div></div>\`\n\nThis is block code:\n\n\`\`\`\n\nx=1;\n\ny=2;\n\nz=x+y;\n\n\`\`\`\n\n> This is Backquote\n\n![This is an image](/download.png)
    `
}

const App = () => {

    const [state, setState] = useState(initState)
   

    const getText = (text) => {
        console.log(text)
        setState({text: text});
    }
    
    const markdown = marked(state.text, {breaks: true});

    return (
        <Container>
            <h1 className="text-center mt-5">Markdown Previewer</h1>
            <Row className="mt-5">
                <Col size={6} style={{border: "solid 2px black", height: "700px", margin: "10px"}}>
                    <h2 className="text-center"><Badge variant="dark">Markdown Input</Badge></h2>
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" rows={25} value={state.text} onChange={(e)=>getText(e.target.value)} id="editor">
                                
                            </Form.Control>
                        </Form.Group>
                    </Form>

                </Col>
                <Col size={6} style={{border: "solid 2px black", height: "700px", margin: "10px", backgroundColor: "lightgrey"}}>
                    <h2 className="text-center"><Badge variant="dark">Preview</Badge></h2>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
                </Col>
            </Row>
        </Container>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))