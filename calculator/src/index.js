import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './main.css';
import wecal from 'wecal'

const App = () => {

    const [state, setState] = useState({output: "0"})

    const updateOutput = (e) => {
        let stateOutput = state.output
        if(stateOutput[0] === "0"){
            stateOutput = stateOutput.slice(1, 0)
        }
        let newOutput = stateOutput + e.currentTarget.value
        console.log(newOutput);
        document.getElementById('display').innerHTML = newOutput
        setState({output: newOutput})
    }
    console.log(state.output);

    const clear = () => {
        setState({output: "0"})
    }

    const calculate = () => {
        let stateOutput = state.output;
        
        
        let value = wecal.dealBracket(stateOutput)
        setState({output: value})
    }

    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <div id="calculator">
                        <div id="display">{state.output}</div>
                        <Button id="clear" className="double" onClick={clear}>AC</Button>
                        <Button id="divide" className="simple" onClick={(e)=> updateOutput(e)} value={'/'}>/</Button>
                        <Button id="multiply" className="simple" onClick={(e)=> updateOutput(e)} value={'*'}>X</Button>
                        <Button id="seven" className="simple" onClick={(e)=> updateOutput(e)} value={'7'}>7</Button>
                        <Button id="eight" className="simple" onClick={(e)=> updateOutput(e)} value={'8'}>8</Button>
                        <Button id="nine" className="simple" onClick={(e)=> updateOutput(e)} value={'9'}>9</Button>
                        <Button id="subtract" className="simple" onClick={(e)=> updateOutput(e)} value={'-'}>-</Button>
                        <Button id="four" className="simple" onClick={(e)=> updateOutput(e)} value={'4'}>4</Button>
                        <Button id="five" className="simple" onClick={(e)=> updateOutput(e)} value={'5'}>5</Button>
                        <Button id="six" className="simple" onClick={(e)=> updateOutput(e)} value={'6'}>6</Button>
                        <Button id="add" className="simple" onClick={(e)=> updateOutput(e)} value={'+'}>+</Button>
                        <Button id="one" className="simple" onClick={(e)=> updateOutput(e)} value={'1'}>1</Button>
                        <Button id="two" className="simple" onClick={(e)=> updateOutput(e)} value={'2'}>2</Button>
                        <Button id="three" className="simple" onClick={(e)=> updateOutput(e)} value={'3'}>3</Button>
                        <Button id="equals" onClick={calculate}>=</Button>
                        <Button id="zero" className="double" onClick={(e)=> updateOutput(e)} value={'0'}>0</Button>
                        <Button id="decimal" className="simple" onClick={(e)=> updateOutput(e)} value={'.'}>.</Button>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))