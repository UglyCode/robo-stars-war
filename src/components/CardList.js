import React from 'react';
import Card from "./Card";

const CardList = ({robots, cardClick})=>{

    return(
    <div>
        {
            robots.map((elem, i) => {
                return (
                    <Card
                        key={i}
                        id={i}
                        name={elem.name}
                        description={{height: elem.height}}
                        cardClick={cardClick}
                        helperText="Click me!!! I'm famous!"
                    /> //
                );
            })
        }
    </div>
    );
};

export default CardList;