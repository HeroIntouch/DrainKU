import React from 'react';
import '../style/Objective.component.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Arrow from '../asset/arrow.png';

const Objective = () => {
    return(
        <div className='Objective'>
            <div className='description'>
                <h1>Objective</h1>
                <p>expressing or dealing with facts or conditions 
                    as perceived without distortion by personal 
                    feelings, prejudices, or interpretations</p>
            </div>
            <ul>
                <li>
                    <div></div>
                    <p>When a text is hooked in a p element, <br />
                        you can style it with CSS, <br />or manipulate it with JavaScript.</p>
                </li>
                <ArrowForwardIcon className='icon'/>
                <li>
                    <div></div>
                    <p>When a text is hooked in a p element, <br />
                        you can style it with CSS, <br />or manipulate it with JavaScript.</p>
                </li>
                <ArrowForwardIcon className='icon'/>
                <li>
                    <div></div>
                    <p>When a text is hooked in a p element, <br />
                        you can style it with CSS, <br />or manipulate it with JavaScript.</p>
                </li>
                <ArrowForwardIcon className='icon'/>
                <li>
                    <div></div>
                    <p>When a text is hooked in a p element, <br />
                        you can style it with CSS, <br />or manipulate it with JavaScript.</p>
                </li>
            </ul>
        </div>
    );
}

export default Objective;