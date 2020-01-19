import React from 'react';
import '../style/Scroller.component.css';
import $ from 'jquery';

const Scoller = (props) => {

    const handleOnChange = (e) =>{
        $(e.target).closest('div').find('span[id=value]').text(e.target.value);
        if(props.v1){
            props.v1(e.target.value)
        }else if(props.sumTimeMax){
            props.sumTimeMax(e.target.value)
        }
    }
 
    return(

        <div className='Scoller'>
            <span className='title'>{props.v1 ? 'v1' : 'sumTimeMax'}</span>
            <input type='range' 
                onChange={handleOnChange} 
                min ={props.v1 ? '0' : '0'} 
                max ={props.v1 ? '1' : '500'} 
                step= {props.v1 ? '0.1' : '50'} 
                defaultValue='0' />
            <span id='value'>0</span>
        </div>
    );
}

export default Scoller;