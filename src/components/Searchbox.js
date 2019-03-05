import React from 'react';

const Searchbox = ({searchChange})=> {
    return (
        <div className='dib pa2'>
        <input
            className='pa3 ba b--yellow bg-lightest-blue'
            type='search'
            placeholder='search your robots'
            onChange={searchChange}
        />
        </div>
    );
};

    export default Searchbox;