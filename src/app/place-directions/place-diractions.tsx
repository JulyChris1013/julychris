import { Col, Row } from "antd";
import Image from "next/image";
import RingWedding from "@/assets/anillo-de-bodas.png"
import weddingVenue from "@/assets/ubicacion.png"

export default function PlaceDiractions() {
    return (
        <Row>
            <Col xl={11} sm={24} xs={24}>
                <div className="places-text">
                    <Image src={RingWedding} alt="RingWedding" className="icon-places" />
                    <h1>Civil</h1>
                    <p>Registro civil Ituzaingo</p>
                    <p> Mansilla 714, Ituzaingo</p>
                    <p>10 de Octubre, 12:30 hs</p>
                    <a className="btn-link" type="button" href="https://maps.app.goo.gl/d76sfdepAxafitwY6">COMO LLEGAR</a>
                </div>
            </Col>
            <Col xl={11} sm={24} xs={24}>
                <div className="places-text">
                    <Image src={weddingVenue} alt="weddingVenue" className="icon-places" />
                    <h1>Festejo</h1>
                    <p>Quinta del rey</p>
                    <p>Intendente Dastugue 2973 - Paso del Rey</p>
                    <p>13 de Octubre, 18:00 hs</p>
                    <a className="btn-link" type="button" href="https://maps.app.goo.gl/mH3dTwwBPFciHqCe6">COMO LLEGAR</a>
                </div>
            </Col>
        </Row>
    );
}
