import React, {useState,useEffect} from 'react';
import Scoller from './Scoller.component';
import '../style/SlideValue.component.css';

const SlideValue = (props) => {
  const [sumTimeMax,setSumTimeMax] = useState(0);
  const [v1,setV1] = useState(0);

  useEffect(() => {
    props.formularV2(v1,sumTimeMax);
  });

  const callBackV1 = (v1) => {
    setV1(v1);
  }
  const callBackSumTimeMax = (sumTimeMax) => {
    setSumTimeMax(sumTimeMax);
  }

  return(
    <div className='SlideValue'>
      <Scoller v1={callBackV1}/>
      <Scoller sumTimeMax={callBackSumTimeMax}/>
    </div>
  );
}

export default SlideValue;