import React, {useEffect} from 'react';
import '../style/ShowValue.component.css';
import $ from 'jquery';

const ShowValue = (props) => {
    useEffect(() => {
        let v2 = props.v2;
        let place = props.place;
        if(v2 > 1.3){
            $('div[place='+place+']').addClass('ShowValue-high');
        }else if(v2 > 0.7){
            $('div[place='+place+']').addClass('ShowValue-middle');
            $('div[place='+place+']').removeClass('ShowValue-high');
        }else{
            $('div[place='+place+']').removeClass('ShowValue-middle');
            $('div[place='+place+']').removeClass('ShowValue-high');
        }
    });
    
    return(
        <div className='ShowValue' place={props.place}>
            {props.v2}
        </div>
    );
}

export default ShowValue;