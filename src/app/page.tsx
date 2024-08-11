"use client"

import Toolbar from "./toolbar/toolbar";
import MainCarousel from "./carousel/main-carousel";
import ScheduleDate from "./schedule-date/schedule-date";
import PlaceDiractions from "./place-directions/place-diractions";
import AlbumPhoto from "./album-photo/album-photo";
import ConfirmAssistance from "./confirm-assistance/confirm-assistance";
import FinalPage from "./final/final";
import DressRules from "./outfit/dress-rules";
import Regalos from "./regalo/regalo";
import { useRef } from 'react';

import { SoundOutlined } from '@ant-design/icons';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 6
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    }
  };
  return (
    <main style={{ background: "#fdf6f1" }}>

      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          position: "fixed",
          zIndex: "2",
          right: "0",
          marginTop: "7em",
          padding: "8px",
          borderRadius: "30px 0px 0px 30px",
          background:"#fdf6f1",
          boxShadow:"6px 6px 18px 0px rgba(0,0,0,0.3)"
        }}>
        <div style={{ background: "#bec092", padding: "10px", borderRadius: "100%" }}>
          <SoundOutlined style={{ fontSize: "20px" }} />
        </div>
      </div>
      <audio ref={audioRef} src="/audio.mp3" />

      <Toolbar />
      <MainCarousel />
      <ScheduleDate />
      <PlaceDiractions />
      <AlbumPhoto />
      <DressRules />
      <Regalos />
      <ConfirmAssistance />
      <FinalPage />

    </main>
  );
}
