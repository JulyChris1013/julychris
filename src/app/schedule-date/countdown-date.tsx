"use client"

import moment from "moment";
import Countdown from "react-countdown";

export default function CountdownDate() {
    const dateMarried = moment("2024-10-13").toDate()
    return (
        <div style={{ textAlign: "center", width: "min-content", margin: "2.2em auto" }}>
            <Countdown
                date={dateMarried}
                renderer={props =>
                    <div style={{ color: "black", display: "flex", justifyContent: "space-between", gap: "1.5em" }}>
                        <div>
                            <p className="dates-items" suppressHydrationWarning>{props.days}</p>
                            <p className="date-text">DIA(S)</p>
                        </div>

                        <p className="dates-dots">:</p>

                        <div>
                            <p className="dates-items" suppressHydrationWarning>{props.hours}</p>
                            <p className="date-text">HORA(S)</p>
                        </div>
                        
                        <p className="dates-dots">:</p>

                        <div>
                            <p className="dates-items" suppressHydrationWarning>{props.minutes}</p>
                            <p className="date-text">MINUTO(S)</p>
                        </div>

                        <p className="dates-dots">:</p>

                        <div>
                            <p className="dates-items" suppressHydrationWarning>{props.seconds}</p>
                            <p className="date-text">SEGUNDO(S)</p>
                        </div>
                    </div>
                }

            />
            <a className="btn-link" type="button" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3RpaG9jNGpyYWxydGNnYmI0bnZwNm1xbmogYm9kYWp1bGl5Y2hyaXNAbQ&tmsrc=bodajuliychris%40gmail.com">AGENDAR FECHA</a>
        </div>
    );
}
