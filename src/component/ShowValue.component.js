import React from 'react';
import '../style/ShowValue.component.css';

const ShowValue = (props) => {
    return(
        <div className='ShowValue'>
            {props.result}
        </div>
    );
}

export default ShowValue;