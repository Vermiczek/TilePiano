import React from "react";
import { StyledConfig } from "./styles/UserInfo.styled";
import {
  useAmountContext,
  useAmountUpdateContext,
  useTempoContext,
  useTempoUpdateContext,
  useStopUpdateContext,
  usePlayUpdateContext,
  useVolumeContext,
  useVolumeUpdateContext,
} from "./ContextProvider";
import { motion, useAnimation } from "framer-motion";
import { ShowTile } from "./Tile";
import { useColorContext } from "./ContextProvider";
import { Logo, Plus, Minus, Play, Stop } from "./icons";

export const Config = () => {
  const play = usePlayUpdateContext();
  const updateTiles = useAmountUpdateContext();
  const tiles = useAmountContext();
  const stop = useStopUpdateContext();
  const tempo = useTempoContext();
  const updateTempo = useTempoUpdateContext();
  const volume = useVolumeContext();
  const updateVolume = useVolumeUpdateContext();
  const color = useColorContext();

  return (
    <StyledConfig>
      <Logo />
      <ShowTile id={0} play={false} refresh={() => {}} type={color}></ShowTile>
      <div className="buttons">
        <motion.div
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: [0.8, 1] }}
          transition={{ duration: 0.4 }}
          initial={{ scale: 1 }}
          className="butt"
          onClick={() => {
            play(true);
            stop(false);
          }}
        >
          <Play />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: [0.8, 1] }}
          transition={{ duration: 0.4 }}
          initial={{ scale: 1 }}
          className="butt"
          onClick={() => stop(true)}
        >
          <Stop />
        </motion.div>
        <motion.div
          className="butt"
          onClick={() => {
            let x = tiles;
            updateTiles(x + 1);
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: [0.8, 1] }}
          transition={{ duration: 0.4 }}
          initial={{ scale: 1 }}
        >
          <Plus />
        </motion.div>
        <motion.div
          className="butt"
          onClick={() => {
            if (tiles >= 1) {
              let x = tiles;
              updateTiles(x - 1);
            }
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: [0.8, 1] }}
          transition={{ duration: 0.4 }}
          initial={{ scale: 1 }}
        >
          <Minus />
        </motion.div>
      </div>
      <div className="text">Tempo</div>
      <input
        className="slider"
        type="range"
        min="1"
        max="100"
        value={tempo}
        onChange={(e) => {
          updateTempo(e.target.value);
        }}
      ></input>
      <div className="text">Volume</div>
      <input
        className="slider"
        type="range"
        min="1"
        max="100"
        value={volume}
        onChange={(x) => {
          updateVolume(x.target.value);
        }}
      ></input>
      <div></div>
    </StyledConfig>
  );
};
