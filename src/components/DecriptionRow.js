import React, {components} from 'react';

const DescriptionRow = ({name, value}) => {

    return(
        <tr className="stripe-dark">
            <td className="pa1">{name.replace('_',' ')+':'}</td>
            <td className="pa1">{value}</td>
        </tr>
    )
};

export default DescriptionRow;