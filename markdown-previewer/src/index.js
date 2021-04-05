import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MarkdownInput from './components/markdownInput';
import Preview from './components/preview';


const App = () => {
    return (
        <Container>
            <h1 className="text-center mt-5">Markdown Previewer</h1>
            <Row>
                <MarkdownInput/>
                <Preview/>
            </Row>
        </Container>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))