"use client"


import Image3 from "@/assets/image-3.jpeg"
import Image6 from "@/assets/image-6.jpeg"
import Image7 from "@/assets/image-7.jpeg"
import Image8 from "@/assets/image-8.jpeg"
import Image9 from "@/assets/image-9.jpeg"
import Image10 from "@/assets/image-10.jpeg"
import Image11 from "@/assets/image-1.jpeg"
import Image12 from "@/assets/image-12.jpeg"
import Image13 from "@/assets/image-13.jpeg"
import Image14 from "@/assets/image-14.jpeg"
import Image15 from "@/assets/image-15.jpeg"
import Image16 from "@/assets/image-16.jpeg"



import { Divider, List } from "antd";
import Image from "next/image";

export default function AlbumPhoto() {
    const list = [Image3, Image6, Image7, Image11, Image9, Image8,Image10, Image12, Image13, Image14, Image15, Image16,]

    return (
        <div className="container-album">
            <Divider style={{ margin:"10vw 0px" }}/>
            <p className="title-date">ÁLBUM DE FOTOS</p>
            <p className="subtitle-date">Momentos únicos</p>
            <div style={{marginTop: "40px"}}>
                <List grid={{
                    gutter: 16,
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 3,
                    xl: 4,
                    xxl: 3,
                }}
                    dataSource={list}
                    renderItem={(photo) => (
                        <Image src={photo} alt="photo" className="img-album" />
                    )}>
                </List>
            </div>

            <Divider style={{ margin:"10vw 0px" }}/>
        </div>
    );
}