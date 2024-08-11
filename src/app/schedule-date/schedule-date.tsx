"use client"

import { Divider  } from "antd";
import Countdown from "./countdown-date";


export default function ScheduleDate() {
    return (
        <div style={{ textAlign: "center", margin: "100px 0px" }}>
            <p className='title-date'>Agendá la fecha</p>
            <p className='subtitle-date'>13 de Octubre</p>
            <Countdown/>
            <Divider style={{ marginTop: "0em" }}/>
        </div>
    );
}
