import React, { useState } from 'react'
import "../style/Problem.component.css"
import MapProblem from "../asset/mapProblem.jpg"
import {
  Card,
  Form,
  Row,
  Col,
  Button, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import { MdMailOutline } from 'react-icons/md';
import { GoGraph } from "react-icons/go";
import { TiLocationOutline } from "react-icons/ti";


const Problem = props => {
    const { id, item } = props;
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
    <div className="Problem">
            <div className="problemImg"></div>    
                <div class="bg-text">
                <h1 className="fontProblem">ฝนตกหนัก แต่เมื่อไหร่น้ำจะระบายหมด?</h1>
                <img id="Popover1" type="button" src={MapProblem} />
                <Popover placement="right" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                    <PopoverHeader className="fontProblemData">ข้อมูลจากสถานีวัดน้ำท่วมขัง 2 สถานี</PopoverHeader>
                    <PopoverBody className="fontProblemData">
                        <TiLocationOutline/>&nbsp;คลองบางบัว <br/>
                        <TiLocationOutline/>&nbsp;มหาวิทยาลัยเกษตรศาสตร์  <br/>
                    </PopoverBody>
                </Popover>
                </div>  
    </div>
    )
}
export default Problem;