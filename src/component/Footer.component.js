import React, { useState } from 'react'
import KUlogo from "../asset/KUlogo.png"
import "../style/Footer.component.css"
import {
  Card,
  Form,
  Row,
  Col,
} from 'reactstrap';
import { FaDev } from 'react-icons/fa';

function Footer() {
    return (
        <div className="Footer">
                <div class="rows">
                    <div class="columns"> 
                        <h5 className="fontSciCr">สถาบันสารสนเทศทรัพยากรน้ำ</h5>
                        <h5 className="fontSciCr">(องค์การมหาชน)</h5>
                        <h6 className="fontSciAddress">ที่อยู่ : เลขที่ 901 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900</h6>
                        <h6 className="fontSciAddress">โทรศัพท์ : 02-158-0901</h6>
                        <h6 className="fontSciAddress">โทรสาร : 02-158-0910</h6>
                    </div>
                    <div class="columns">
                        <h5 className="fontSciCr">มหาวิทยาลัยเกษตรศาสตร์</h5>
                        <h6 className="fontSciAddress">เลขที่ 50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900</h6>
                        <h6 className="fontSciAddress">โทรศัพท์ : 02-942-8200-45</h6>
                        <h6 className="fontSciAddress">Fax : 02-942-8998</h6>
                    </div>
                    <div class="columns"></div>
                    <div class="columns">
                            <h6 className="">Developer :</h6>
                            <p className="">
                                <FaDev/>  
                                Intouch Prakaisak <br/>(Intouch.Pr@ku.th)</p>
                            <p className="">
                                <FaDev/>  
                                Setthawut Saengcharoen (saengsetth@outlook.com)</p>
                    </div>
                </div>
      </div>
      )
    }
export default Footer;