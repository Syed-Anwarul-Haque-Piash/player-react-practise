import React from 'react';

const Calculate = (props) => {
    const pl=props.pl;
    
    return (
        <div>
            <h2>Name: {pl.name}</h2>
            <p>total :{pl.total}</p>
        </div>
    );
};

export default Calculate;