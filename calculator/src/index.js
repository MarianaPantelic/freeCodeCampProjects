import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./main.css";
import wecal from "wecal";

const App = () => {
  /* const [state, setState] = useState({ output: "0" });

  const updateOutput = (e) => {
    let stateOutput = state.output;
    if (stateOutput[0] === "0") {
      stateOutput = stateOutput.slice(1, 0);
    }

    let newOutput = stateOutput + e.currentTarget.value;
    console.log(newOutput);
    if (newOutput.includes("..")) {
      newOutput = newOutput.replace("..", ".");
    }
    /* let arr = newOutput.split('+' || '-' || '/' || '*')
        console.log(arr);
        for(let j = 0; j < arr.length; j++){
            let indices = [];
            for(let i = 0; i < arr[j].length; i++) {
                if (arr[j][i] === '.') indices.push(i);
            }
            if(indices.length > 1){
                for(let i = 1; i < indices.length; i++) {
                    arr[j] = arr[j].substring(0,indices[i]) + arr[j].substring(indices[i]+1, arr[j].length);
                }
            } 
            console.log([indices])
        }
        newOutput = arr.join("") */

  /* document.getElementById("display").innerHTML = newOutput;
    setState({ output: newOutput });
  };
  console.log(state.output);

  const clear = () => {
    setState({ output: "0" });
  };

  const calculate = () => {
    let stateOutput = state.output;

    let value = wecal.dealBracket(stateOutput);
    setState({ output: value });
  }; */

  const [expression, setExpression] = useState({ output: "" });

  const updateOutput = (symbol) => {
    if (expression.output[0] === "0") {
      expression.output = expression.output.slice(1, 0);
    }
    if (expression.output.includes("..")) {
      expression.output = expression.output.replace("..", ".");
    }
    setExpression({ output: expression.output + symbol });
  };

  const clear = () => {
    setExpression({ output: "0" });
  };

  const calculate = () => {
    setExpression({ output: wecal.dealBracket(expression.output) });
  };

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <div id="calculator">
            <div id="display">{expression.output}</div>
            <Button id="clear" className="double" onClick={clear}>
              AC
            </Button>
            <Button
              id="divide"
              className="simple"
              onClick={() => updateOutput("/")}
            >
              /
            </Button>
            <Button
              id="multiply"
              className="simple"
              onClick={() => updateOutput("*")}
            >
              X
            </Button>
            <Button
              id="seven"
              className="simple"
              onClick={() => updateOutput("7")}
            >
              7
            </Button>
            <Button
              id="eight"
              className="simple"
              onClick={() => updateOutput("8")}
            >
              8
            </Button>
            <Button
              id="nine"
              className="simple"
              onClick={() => updateOutput("9")}
            >
              9
            </Button>
            <Button
              id="subtract"
              className="simple"
              onClick={() => updateOutput("-")}
            >
              -
            </Button>
            <Button
              id="four"
              className="simple"
              onClick={() => updateOutput("4")}
            >
              4
            </Button>
            <Button
              id="five"
              className="simple"
              onClick={() => updateOutput("5")}
            >
              5
            </Button>
            <Button
              id="six"
              className="simple"
              onClick={() => updateOutput("6")}
            >
              6
            </Button>
            <Button
              id="add"
              className="simple"
              onClick={() => updateOutput("+")}
            >
              +
            </Button>
            <Button
              id="one"
              className="simple"
              onClick={() => updateOutput("1")}
            >
              1
            </Button>
            <Button
              id="two"
              className="simple"
              onClick={() => updateOutput("2")}
            >
              2
            </Button>
            <Button
              id="three"
              className="simple"
              onClick={() => updateOutput("3")}
            >
              3
            </Button>
            <Button id="equals" onClick={calculate}>
              =
            </Button>
            <Button
              id="zero"
              className="double"
              onClick={() => updateOutput("0")}
            >
              0
            </Button>
            <Button
              id="decimal"
              className="simple"
              onClick={() => updateOutput(".")}
            >
              .
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
