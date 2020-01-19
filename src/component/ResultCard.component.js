import React,{useState} from 'react';
import SlideValue from './SlideValue.component';
import '../style/ResultCard.component.css';
import ShowValue from './ShowValue.component';

const ResultCard = (props) => {
    const [result,setResult] = useState(0);

    const formularV2 = (v1,timeMax) => {
        v1 = parseFloat(v1);
        timeMax = parseFloat(timeMax);
        let result = (v1*10+timeMax*100)/10;
        setResult(result);
    }

    return(
        <div className = 'ResultCard'>
            <ShowValue result={result}/>
            <SlideValue formularV2={formularV2}/>
        </div>
    );
}

export default ResultCard;