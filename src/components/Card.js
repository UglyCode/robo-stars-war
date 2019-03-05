import React, {components} from 'react';
import Description from './DecriptionRow';

const Card = ({name, description, id, cardClick, helperText}) => {

    return (

        <div
            className='bg-light-blue dib br3 pa3 ma2 grow bw-2 shadow-5-l tc'
            onClick={cardClick}
            id={id}
        >
            <a href="#"
               style={{backgroundImage: `url(https://robohash.org/${id}?size=200x200)`}}
               className=" link mw4 dt hide-child br2 cover bg-center" >
                <span className="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
                    {helperText}
                </span>
            </a>
            {/*<img src = {`https://robohash.org/${id}?size=200x200`} alt = 'robots'/>*/}
            <div>
                <h3>{name}</h3>
                <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                {
                    Object.keys(description).map(keyName => {
                        return <Description key={id+'/'+keyName} name={keyName} value={description[keyName]}/>
                    })
                }
                    </thead>
                </table>
            </div>
        </div>

    );

};
    export default Card;