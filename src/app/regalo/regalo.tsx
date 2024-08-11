"use client"

import { Button, Divider, Flex, Modal } from "antd";
import { useState } from "react";

import { CopyOutlined } from '@ant-design/icons';

export default function Regalos() {
  const [openModal, setOpenModal] = useState(false)

  const copyData = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }

  return (
    <div style={{ position: "relative", width: "100%", marginTop: "10em" }}>
      <div className="container-img">
        <div style={{ background: "white", width: "max-content", margin: "auto", padding: "10px", borderRadius: "15px" }}>
          <p className="title-dress">Regalo</p>
          <p className="titlesub-regalo">Si te interesa hacernos un regalo, </p>
          <p className="titlesub-regalo">ayudanos con la luna de miel! </p>
          <button className="btn-link" onClick={() => setOpenModal(true)}>MAS INFORMACION</button>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)} onCancel={() => setOpenModal(false)} footer={false}>
        <div>
          <p style={{ textAlign: "center", marginBottom: "15px", fontSize: "20px" }}>Mercado Pago</p>
          <p style={{ fontSize: "15px" }}>Julieta Karina Marti</p>
          <Divider style={{ margin: "10px" }} />
          <div>
            <Flex justify="space-between">
              <p><strong>CVU:</strong> 0000003100024531908594</p>
              <CopyOutlined onClick={() => copyData("0000003100024531908594")} style={{cursor:"pointer"}}/>
            </Flex>
            <Divider style={{ margin: "10px" }} />
          </div>
          <div>
            <Flex justify="space-between">
              <p><strong>Alias:</strong> juli.chris.mp</p>
              <CopyOutlined onClick={() => copyData("juli.chris.mp")} style={{cursor:"pointer"}}/>
            </Flex>
            <Divider style={{ margin: "10px" }} />
          </div>

          <p><strong>CUIT/CUIL:</strong> 27389126182</p>
        </div>
      </Modal>
    </div>
  );
}