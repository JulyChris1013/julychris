import { Button, Flex } from "antd";
import Image from "next/image";
import IconCheck from '@/assets/lista-de-la-compra.png'

export default function ConfirmAssistance() {
    return (
        <Flex justify="center" gap={250} style={{ textAlign: "center" }}>
            <div style={{ background: '#bec092', width: '100%', padding: '100px 0px' }} className="assistance-text">
                <Image style={{ width: '80px', height: '80px' }} src={IconCheck} alt="IconCheck" className="icon-places" />
                <h1>Confirmación de asistencia</h1>
                <p>Será un placer contar con tu presencia</p>
                <a className="btn-link" type="button" href="https://forms.gle/fs4mCdcs5hez1ahh9">CONFIRMAR</a>
            </div>
        </Flex>
    );
}
