import Image from "next/image";

import MainImage from "../principal.jpeg"
export default function MainCarousel() {
  return (
    <div style={{ width: "100%", height: "auto", position: "relative", padding: "0 0.9em" }}>
      <Image src={MainImage} alt="" className="main-image" />

      <div style={{ width: "100%", height: "auto", position: "absolute", bottom: "1em", padding: "1em" }}>
        <div style={{ width: "fit-content", textAlign: "center" }}>
          <h1 className="title-main-image">¡Nos Casamos!</h1>
          <h2 className="subtitle-main-image">y queremos compartirlo con vos</h2>
        </div>
      </div>
    </div>
  );
}