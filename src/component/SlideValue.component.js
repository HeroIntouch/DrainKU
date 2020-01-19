import React, {useState,useEffect} from 'react';
import Scoller from './Scoller.component';
import '../style/SlideValue.component.css';

const SlideValue = (props) => {
  const [timeMax,setTimeMax] = useState(0);
  const [v1,setV1] = useState(0);

  useEffect(() => {
    props.formularV2(v1,timeMax);
  });

  const callBackV1 = (v1) => {
    setV1(v1);
  }
  const callBackTimeMax = (timeMax) => {
    setTimeMax(timeMax);
  }

  return(
    <div className='SlideValue'>
      <Scoller v1={callBackV1}/>
      <Scoller timeMax={callBackTimeMax}/>
    </div>
  );
}

export default SlideValue;