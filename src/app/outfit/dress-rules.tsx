import { Button, Col, Flex, Row } from "antd";
import Image from "next/image";
import suit from "@/assets/traje.png"
import dress from "@/assets/vestido.png"

export default function DressRules() {
    return (
        <div style={{ textAlign: "center", margin: "0px" }}>
            <p className="title-dress"> Codigo de Vestimenta</p>
            <p className="subtitle-dress">ELEGANTE</p>
            <p className="titlesub-dress">NO ASISTIR CON VESTIDO BLANCO</p>

            <Row style={{marginTop:"100px"}}>
                <Col xl={11} sm={24} xs={24}>
                    <div className="container-dress">
                        <Image src={suit} alt="suit" className="icon-places" />
                        <a className="btn-link" type="button" href="https://www.google.com/search?sca_esv=0cdfe3afbecedfa4&sca_upv=1&rlz=1C1AWFC_enAR938AR938&q=vestuario+elegante+para+una+boda+hombre&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhd7Qv31WAq-g3XdD7m281OKyew6CGJrEYYQ4lESOC_x5KKqqIgdEuCtaFgpfZ0um4e1EDzKQMrUd0MluHFYZ5KIqh9XUuGxb-OAdDlN045K3bc6qp2u9U_ua-amXqx02pkK8Bbvbt2uG6jx33vyxDB1GBnmvyMJ1i--iHtSe_p3sFCYKqGw&sa=X&ved=2ahUKEwio-srS6M-HAxXDpZUCHW6TJsMQtKgLegQIEBAB&biw=1536&bih=738&dpr=1.25">EJEMPLOS DE VESTUARIO</a>
                    </div></Col>
                <Col xl={11} sm={24} xs={24}>
                    <div className="container-dress">
                        <Image src={dress} alt="dress" className="icon-places" />
                        <a className="btn-link" type="button" href="https://www.google.com/search?q=vestuario+elegante+para+una+boda+mujer&sca_esv=0cdfe3afbecedfa4&sca_upv=1&rlz=1C1AWFC_enAR938AR938&udm=2&biw=1536&bih=738&ei=XGmpZsi9H5nZ1sQP2ouXsQk&ved=0ahUKEwjI27-f6M-HAxWZrJUCHdrFJZYQ4dUDCBE&uact=5&oq=vestuario+elegante+para+una+boda+mujer&gs_lp=Egxnd3Mtd2l6LXNlcnAiJnZlc3R1YXJpbyBlbGVnYW50ZSBwYXJhIHVuYSBib2RhIG11amVySJIlUIwGWP4bcAF4AJABAJgBRaAB0AaqAQIxNLgBA8gBAPgBAZgCAKACAJgDAIgGAZIHAKAH9gQ&sclient=gws-wiz-serp">EJEMPLOS DE VESTUARIO</a>
                    </div>
                </Col>
            </Row>
        </div>
    );
}