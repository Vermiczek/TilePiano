import React, { MutableRefObject } from "react";
import { useState, useEffect, useRef } from "react";
import {
  useColorContext,
  useColorUpdateContext,
  useVolumeContext,
} from "./ContextProvider";
import { StyledTile } from "./styles/Tile.styled";
import { motion, useAnimation } from "framer-motion";
import { Howl } from "howler";

export interface tile {
  tileID: number;
  type: number;
}

interface Props {
  id: number;
  type: number;
  play: boolean;
  refresh: Function;
}

interface bgColor {
  backgroundColor: string;
}

const dictColor = [
  "#bfd2f0",
  "#DC143C",
  "#FF8C00",
  "#FFD700",
  "#006400",
  "#00008B",
  "#00BFFF",
  "#d69df3",
  "#9932CC",
  "#bfd2f0",
  "#e6778d",
  "#ffcc3e",
  "#eee7c3",
  "#54dd54",
  "#7f7ff3",
  "#b2e7f8",
  "#f7edfc",
  "#d59cf1",
];

export const Tile = (props: Props) => {
  const [tileID, setTileID] = useState<number>(props.id);
  const [play, setPlay] = useState<boolean>(false);
  const [type, setType] = useState<number>(props.type);
  const firstRefresh: MutableRefObject<boolean> = useRef(false);
  const changeColor = useAnimation();
  const volumeCtx = useVolumeContext();
  const bounceOnSound = useAnimation();
  const upContext = useColorUpdateContext();
  const typeContext: number = useColorContext();
  const volume = ((1 - tileID / 10) * volumeCtx) / 100;

  const soundPlay = (typesnd: number) => {
    let file = new Howl({
      src: [require("./pianosprite.mp3")],
      volume: volume,
      format: ["mp3"],
      sprite: {
        type0: [0, 0],
        type1: [50300, 2050],
        type2: [55100, 2050],
        type3: [57500, 2050],
        type4: [62300, 2050],
        type5: [67100, 2050],
        type6: [69500, 2050],
        type7: [74300, 2050],
        type8: [79100, 2050],
      },
    });
    let typevar = "type" + typesnd;
    file.play(typevar);
  };

  useEffect(() => {
    setPlay(props.play);
  }, [props.play]);

  if (play) {
    if (type != 0) soundPlay(type);
    changeColor.start({
      scale: 1,
      backgroundColor: [dictColor[type + 9], dictColor[type]],
    });
  }

  const clickEvents = () => {
    console.log(tileID);
    changeColor.start({ backgroundColor: dictColor[type] });
    if (tileID === 0) {
      upContext(type);
      console.log("New color");
      console.log(props.play);
      soundPlay(type);
    } else {
      setType(typeContext);
      props.refresh(tileID, typeContext);
    }
  };

  useEffect(() => {
    changeColor.start({ backgroundColor: dictColor[type] });
  }, [type]);

  return (
    <StyledTile
      as={motion.div}
      onClick={() => clickEvents()}
      animate={changeColor}
      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
      whileTap={{ scale: [1, 1] }}
      transition={{ duration: 0.4 }}
      initial={{ backgroundColor: dictColor[type], scale: 1 }}
    >
      {props.play}
    </StyledTile>
  );
};

export const ShowTile = (props: Props) => {
  const [tileID, setTileID] = useState<number>(props.id);
  const [type, setType] = useState<number>(props.type);
  const changeColor = useAnimation();
  const upContext = useColorUpdateContext();
  const typeContext: number = useColorContext();

  useEffect(() => {
    setType(typeContext);
    changeColor.start({ backgroundColor: dictColor[typeContext] });
  }, [typeContext]);

  return (
    <StyledTile
      as={motion.div}
      animate={changeColor}
      transition={{ duration: 0.4 }}
      initial={{ backgroundColor: dictColor[type], scale: 1 }}
    >
      {props.play}
    </StyledTile>
  );
};

export default Tile;
