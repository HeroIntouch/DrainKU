import React,{useState} from 'react';
import SlideValue from './SlideValue.component';
import '../style/ResultCard.component.css';
import ShowValue from './ShowValue.component';

const ResultCard = (props) => {
    const [v2,setv2] = useState(0);

    const formularV2 = (v1,sumTimeMax) => {
        v1 = parseFloat(v1);
        sumTimeMax = parseFloat(sumTimeMax);
        Number.prototype.round = function() {
            return Math.round(this*100)/100;
        }        
        let v2 = (0.06868 + (0.0009373 * sumTimeMax) + v1).round();
        setv2(v2);
        console.log({v2});
    }

    return(
        <div className = 'ResultCard'>
            <ShowValue v2={v2} 
                place={props.place}/>
            <SlideValue formularV2={formularV2}/>
        </div>
    );
}

export default ResultCard;