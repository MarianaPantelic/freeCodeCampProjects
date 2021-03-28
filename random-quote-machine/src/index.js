import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import video from './components/Star-26094.mp4'


const App = () => {

    const [state, setState] = useState({quotes: []})

    const getQuotes = () => {
        return new Promise((resolve, reject) => {
            fetch("https://type.fit/api/quotes")
            .then((response) => {
                if (response.status === 200) {
                response
                    .json()
                    .then((data) => {
                    resolve(data);
                    })
                    .catch((error) => {
                    reject(error);
                    });
                } else {
                reject(response.status);
                }
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    useEffect(() => {
        getQuotes().then(data => {
            setState({quotes: data});
        })
    },[])
    
    
    let textRef = useRef();
    let authorRef = useRef();
    

    

    const generateNewQuote = () => {
        let randomNumber = Math.floor(Math.random() * state.quotes.length)
        textRef.current.textContent = state.quotes[randomNumber].text 
        authorRef.current.textContent = state.quotes[randomNumber].author
    }

    

    return (
        <>
        <video autoPlay loop muted className='video'>
            <source src={video} type="video/mp4"></source>
        </video>
        <div className="container">

            <div className="row">
                {state.quotes.length > 0 ?
                <div className="col-sm-8 mx-auto" id="quote-box">
                    <h2 className="text-center" id="text"><i class="fas fa-quote-left"></i> <span ref = {textRef}>{state.quotes[0].text}</span><i class="fas fa-quote-right"></i></h2>
                    <h3 id="author">- <span ref = {authorRef}>{state.quotes[0].author}</span></h3>
                    <div>
                        <button className="btn bg-dark text-light" id="new-quote" onClick = {generateNewQuote}>New Quote</button>
                        <a href="twitter.com/intent/tweet" id="tweet-quote"><i class="fab fa-twitter fa-2x text-dark"></i></a>
                    </div>
                </div> 
                : null
                }
            </div>
        </div>
        </>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))