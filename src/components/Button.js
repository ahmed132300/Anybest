import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function MyButton() {
    let navigate = useNavigate(); // Get the navigate function

    let handleClick = () => {
        navigate('/osman'); // Replace '/your-destination-page' with the actual path
    };

    return (
        <button onClick={handleClick}>Click Me!</button>
    );
}

export default MyButton;