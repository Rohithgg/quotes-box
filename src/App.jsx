import { useState } from 'react'
import './App.css'


function Quotes() {
    const quotes = [
        "\"The only way to do great work is to love what you do.\" — Steve Jobs",
        "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" — Winston Churchill",
        "\"Believe you can, and you're halfway there.\" — Theodore Roosevelt",
        "\"Your time is limited, so don’t waste it living someone else’s life.\" — Steve Jobs",
        "\"Doubt kills more dreams than failure ever will.\" — Suzy Kassem"
    ];
    const [ranwords, setRandomNum] = useState(Math.floor(Math.random() * quotes.length));

    const generateRandom = () => {
        setRandomNum(Math.floor(Math.random() * quotes.length));
    };

    return (
        <div>
            <h1>{quotes[ranwords]}</h1>
            <button onClick={generateRandom}>New Quote</button>
        </div>
    );
}

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <p>
                        this is a quote generator for you to enjoy and get inspired
                    </p>
                    <Quotes />
                </header>
            </div>
        </>
    );
}

export default App;