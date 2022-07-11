import React from 'react';
//3. import useHistory
import { useHistory } from 'react-router-dom';

function Home() {
    //4. history => this is an array
    const history = useHistory();

    //2. handleClick
    const handleClick = () => {
        console.log(`History is:`, history);
        //alert message
        alert(`We're going to Animals!`);
        //change view => useHistory => argument is where you want to go
        history.push('/animals');
    };

    //1. create button and onClick
    return (
        <div>
            <h1>HOME</h1>
            <button onClick={handleClick}>Animals</button>
            <img src="https://pixy.org/download/4718707/" width={500} />
        </div>
    );
}

export default Home;
