import React, { useState } from 'react';
import catImage from './cat.jpg';

function StateHandling() {
    const [count, setCount] = useState(100);
    const [height, setHeight] = useState(140);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function increment() {
        setCount((currentCount) => currentCount + 20);
    }
    
    function decrement() {
        setCount((currentCount) => currentCount - 10);
    }

    function changeBgColor() {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }

    function enhanceHeight() {
        setHeight((currentHeight) => currentHeight + 20);
    }

    function reduceHeight() {
        setHeight((currentHeight) => Math.max(currentHeight - 20, 40));
    }

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h2>Change Background Color & Resize</h2>
            <div
                style={{
                    backgroundColor: `rgb(${red},${green},${blue})`,
                    border: "2px solid red",
                    height: `${height + 24}px`,
                    margin: "20px auto",
                    width: "250px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease',
                    borderRadius: '8px'
                }}
            >
                <img
                    src={catImage}
                    alt="Cat"
                    style={{ 
                        width: '180px', 
                        height: `${height}px`, 
                        objectFit: 'cover', 
                        borderRadius: '12px', 
                        border: '2px solid #333',
                        transition: 'height 0.2s ease'
                    }}
                />
            </div>
            <p>Image height: <strong>{height}px</strong></p>
            <p>Background color: <strong>rgb({red}, {green}, {blue})</strong></p>
            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '8px', width: '220px' }}>
                <button 
                    onClick={changeBgColor} 
                    style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #777' }}
                >
                    Change Background Color
                </button>
                <button 
                    onClick={enhanceHeight} 
                    style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #777' }}
                >
                    Enhance Image Height
                </button>
                <button 
                    onClick={reduceHeight} 
                    style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #777' }}
                >
                    Reduce Image Height
                </button>
            </div>
        </div>
    );
}

export default StateHandling;
