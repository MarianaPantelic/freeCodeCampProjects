import React from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import video from './components/Star-26094.mp4'

const App = () => {
    return (
        <div>
            <video autoPlay loop muted className='video'>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))