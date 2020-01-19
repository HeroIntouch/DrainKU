import React from 'react';
import '../style/Scroller.component.css';
import $ from 'jquery';

const Scoller = (props) => {

    const handleOnChange = (e) =>{
        $(e.target).closest('div').find('span[id=value]').text(e.target.value);
        if(props.v1){
            props.v1(e.target.value)
        }else if(props.timeMax){
            props.timeMax(e.target.value)
        }
    }
 
    return(

        <div className='Scoller'>
            <span className='title'>{props.v1 ? 'v1' : 'timeMax'}</span>
            <input type='range' onChange={handleOnChange} min ='0' max ='1' step='0.1' defaultValue='0'></input>
            <span id='value'>0</span>
        </div>
    );
}

export default Scoller;