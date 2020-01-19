import React from 'react';
import ResultCard from './ResultCard.component';
import '../style/Result.component.css';

const Result = () => {
    return(
        <div className='Result'>
            <h1>Show Result</h1>
            <div className='card'>
                <ResultCard />
                <ResultCard />                
            </div>
        </div>
    );
}

export default Result;