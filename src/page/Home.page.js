import React from 'react';
import GraphVariant from "../component/GraphVariant.component"
import Problem from "../component/Problem.component"
import CarouselPG from "../component/CarouselProb.component"
import Objective from '../component/Objective.component';
import Result from '../component/Result.component';
import '../style/Home.page.css';

const Home = (props) => {
    return(
        // <div className='Home'>
        <div>
            <Result/>
            {/* <CarouselPG/> */}
            <Problem/>
            {/* <Objective/> */}
            {/* <GraphVariant/> */}
        </div>
    );
}

export default Home;