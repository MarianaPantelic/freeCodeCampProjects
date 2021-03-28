import React, { useEffect, useState } from 'react';
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
    
    

    const generateNewQuote = () => {
        alert('hi')
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
                    <h2 className="text-center" id="text"><i class="fas fa-quote-left"></i> {state.quotes[0].text} <i class="fas fa-quote-right"></i></h2>
                    <p id="author">- {state.quotes[0].author}</p>
                    <a href="twitter.com/intent/tweet" id="tweet-quote"><i class="fab fa-twitter fa-2x"></i></a>
                    <button className="btn bg-dark text-light" id="new-quote" onClick={generateNewQuote}>New Quote</button>
                    
                </div> 
                : null
                }
            </div>
        </div>
        </>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))