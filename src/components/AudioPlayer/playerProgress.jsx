import { useState, useEffect } from "react";
import { formatTime } from "../playlist";
import * as S from "./audioPlayer.style";

export const PlayerProgress = ({ audioRef }) => {
  const [duration, setDuration] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentSecond, setCurrentSecond] = useState(0);

  const handleClickProgressBar = (even) => {
    const trackPercent = (even.clientX / even.currentTarget.clientWidth) * 100;

    if (audioRef.current) {
      audioRef.current.currentTime = (duration / 100) * trackPercent;
    }
  };

  useEffect(() => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      const progressListener = () => {
        setCurrentSecond(Math.round(audioPlayer.currentTime));
        setCurrentProgress((audioPlayer.currentTime / duration) * 100);
      };
      const playingListener = () => {
        setDuration(Math.round(audioPlayer.duration));
      };
      audioPlayer.addEventListener("playing", playingListener);
      audioPlayer.addEventListener("timeupdate", progressListener);
      return () => {
        audioPlayer.removeEventListener("timeupdate", progressListener);
        audioPlayer.removeEventListener("playing", playingListener);
      };
    }
  }, [duration, audioRef]);
  return (
    <S.BarPlayerProgress onClick={formatTime}>
      <S.BarPlayerPointer
        type="range"
        min={0}
        max={duration}
        value={currentSecond}
        step={0.01}
        onChange={(event) => handleClickProgressBar(event.target.value)}
        style={{ width: `${`${audioRef.progress}%`}` }}
        $color="#B672FF"
      ></S.BarPlayerPointer>
    </S.BarPlayerProgress>
  );
};
