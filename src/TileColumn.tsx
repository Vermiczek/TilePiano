import { Tile, tile } from "./Tile";
import React, { useState, useEffect, MutableRefObject, useRef } from "react";
import {
  StyledColorTileColumn,
  StyledTileColumn,
} from "./styles/TileColumn.styled";
import { useStopContext, useTempoContext } from "./ContextProvider";
import { motion } from "framer-motion";

interface Props {
  id: number;
  tiles: tile[];
  play: boolean;
}

export const TileColumn = (props: Props) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [columnID, setID] = useState<number>(props.id);
  const [tileArray, setTiles] = useState<tile[]>([]);
  const [tileColumnPrintable, setPrintable] = useState<any>();
  const tim: any = useRef(false);
  const firstRefresh: MutableRefObject<boolean> = useRef(true);
  const stop: boolean = useStopContext();
  const tempo: number = useTempoContext();

  const refreshTile = (idx: number, type: number) => {
    let tempTileArray: tile[] = tileArray;
    tempTileArray[idx].type = type;
    setTiles(tempTileArray);
  };

  useEffect(() => {
    if (props.play === true && tim.current === false) {
      tim.current = setTimeout(() => {
        setPlaying(props.play);
        tim.current = false;
      }, (1000 * columnID * (100 - tempo)) / 50);
      console.log(tim.current);
    }
  }, [props.play, stop]);

  useEffect(() => {
    if (stop === true) {
      clearInterval(tim.current);
      tim.current = false;
    }
  }, [stop]);

  useEffect(() => {
    setTiles(props.tiles);
    firstRefresh.current = false;
  }, [props.id, props.tiles]);

  useEffect(() => {
    var map = tileArray.map((choice: any) => {
      let tempId: number = choice.tileID;
      return (
        <Tile
          key={tempId + columnID}
          id={tempId}
          refresh={refreshTile}
          play={playing}
          type={0}
        />
      );
    });
    setPrintable(map);
    setPlaying(false);
  }, [tileArray, playing]);

  return (
    <StyledTileColumn
      key={columnID}
      as={motion.div}
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ stiffness: 60 }}
      exit={{ x: -100 }}
    >
      {tileColumnPrintable}
      <motion.div
        className="play-button"
        onClick={() => {
          console.log("playing!");
          setPlaying(true);
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: [0.9, 1] }}
        transition={{ duration: 0.4 }}
      ></motion.div>
    </StyledTileColumn>
  );
};

export const ColorTileColumn = () => {
  const [tileColumnPrintable, setPrintable] = useState<any>();
  const firstRefresh: MutableRefObject<boolean> = useRef(true);

  if (firstRefresh.current) {
    let tempArray: number[] = [];
    for (let i = 0; i < 9; i++) {
      tempArray.push(i);
    }
    var map = tempArray.map((choice: any) => {
      return <Tile refresh={() => {}} id={0} play={false} type={choice} />;
    });
    setPrintable(map);
    firstRefresh.current = false;
  }

  return (
    <StyledColorTileColumn
      as={motion.div}
      animate={{ x: 0 }}
      initial={{ x: -1000 }}
      // transition={{stiffness: 60 }}
    >
      {tileColumnPrintable}
    </StyledColorTileColumn>
  );
};
