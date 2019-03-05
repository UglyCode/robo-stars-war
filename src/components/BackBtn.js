import React from 'react';

const BackBtn = ({onClick}) => {

    return(
        <div>
            <a className="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib yellow"
                href="#0"
                onClick={onClick}
            >Back to card list</a>
        </div>
    );

};

export default BackBtn;