import React from 'react';

const Scroll = (props) =>{

    return (
        <div style={{overflowY: 'scroll', border: '1px solid yellow', height: 'calc(100vh - 210px)'}}>
            {props.children}
        </div>
    );
};

export default Scroll;