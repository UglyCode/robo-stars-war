import React from 'react';

const AmountBox = ({amountChange, amount}) => {
    return(
        <div className='dib pa2'>
        <input
            className='pa3 ba b--yellow bg-lightest-blue'
            type='number'
            value = {amount}
            onChange={amountChange}
            min = '5'
            max = '25'
        />
        </div>
    );
};

export default AmountBox;