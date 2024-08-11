import { Button, Flex } from "antd";
import Image from "next/image";
import final from '@/assets/me-gusta.png'

export default function FinalPage() {
    return (
        <div style={{ background: '#54582f', width: '100%', padding: '05px', display: 'flex', justifyContent: 'center', gap: '10px' }} className="final-text">
            <p>Hecho con</p>
            <Image style={{ width: '20px', height: '20px' }} src={final} alt="final" className="" />
            <p>por B&C</p>
        </div>
    );
}
