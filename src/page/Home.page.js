import React from 'react';
import GraphVariant from "../component/GraphVariant.component"
import Problem from "../component/Problem.component"
import CarouselAny from "../component/CarouselAny.component"
import Objective from '../component/Objective.component';
import Result from '../component/Result.component';
import '../style/Home.page.css';

const Home = (props) => {
    return(
        <div className='Home'>
            <Result/>
            <CarouselAny/>
            {/* <Problem/> */}
            {/* <Objective/> */}
            {/* <GraphVariant/> */}
        </div>
    );
}

export default Home;