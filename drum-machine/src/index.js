import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {

    const sounds = [
        {
            key: 'Q',
            title: 'Heater-1',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            key: 'W',
            title: 'Heater-2',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            key: 'E',
            title: 'Heater-3',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            key: 'A',
            title: 'Heater-4',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            key: 'S',
            title: 'Heater-6',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            key: 'D',
            title: 'Dsc_Oh',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            key: 'Z',
            title: 'Kick_n_Hat',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            key: 'X',
            title: 'Kick1',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            key: 'C',
            title: 'Cev_H2',
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        },
    ]
    

    const [state, setState] = useState({clickedKey: ''})

    const playSound = (idx, key) => {
       console.log(key)
        const mp3 = document.getElementById(`${key}`);
       const playPromise = mp3.play();
        if (playPromise !== null){
            playPromise.catch(() => { mp3.play(); })
        }
        setState({clickedKey: key})
        document.getElementById('display').innerText= sounds[idx].title
        
    }
   
    
   window.document.onkeyup = function(e) {
       console.log(e.key)
       console.log(state.clickedKey);
        if(e.key === state.clickedKey){
            playSound(state.clickedKey)
        }
    }

    return (
        <Container>
            <Row>
                <Col lg={6} id="drum-machine">
                    <div className = "buttons">
                       {sounds.map((elem, idx) => (
                           <button className="drum-pad" key={idx} id={idx} onClick={()=>playSound(idx, elem.key)} >
                               {elem.key}
                               <audio src={elem.sound} className='clip' id={elem.key}/>
                           </button>
                       ))} 

                    </div>
                    <div id="display"></div>
                    
                </Col>
            </Row>
        </Container>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))