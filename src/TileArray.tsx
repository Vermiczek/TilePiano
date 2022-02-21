import React, { MutableRefObject } from "react";
import { useState, useEffect, useRef } from "react";
import { StyledTileArray } from "./styles/TileArray.styled";
import { Tile, tile } from "./Tile";
import { TileColumn, ColorTileColumn } from "./TileColumn";
import {
  usePlayContext,
  usePlayUpdateContext,
  useAmountContext,
} from "./ContextProvider";
import { motion } from "framer-motion";

interface column {
  playing: boolean;
  columnID: number;
  tiles: tile[];
}

export const TileArray: React.FC = () => {
  const [columnArray, setColumnArray] = useState<column[]>([]);
  const [playing, setPlaying] = useState<boolean>(false);
  const play = usePlayContext();
  const tileAmount = useAmountContext();
  const updateplay = usePlayUpdateContext();
  const [columnPrintableMap, setPrintable] = useState<any>();
  const refreshed: MutableRefObject<boolean> = useRef(false);

  useEffect(() => {
    console.log(tileAmount);
    {
      let tileCounter: number = 1;
      let columnArrayTemp: column[] = [];
      for (let columnID = 0; columnID < tileAmount; columnID++) {
        let tileArray: tile[] = [];
        for (let i2 = 1; i2 <= 8; i2++) {
          tileArray.push({ tileID: i2, type: 0 });
          tileCounter += 1;
        }
        columnArrayTemp.push({
          columnID: columnID,
          tiles: tileArray,
          playing: false,
        });
      }
      setColumnArray(columnArrayTemp);
      refreshed.current = true;
    }
  }, [tileAmount]);

  useEffect(() => {
    var map = columnArray.map((choice: any) => {
      let tempId: number = choice.columnID;
      let tempTiles: tile[] = choice.tiles;
      return (
        <TileColumn key={tempId} id={tempId} tiles={tempTiles} play={play} />
      );
    });
    setPrintable(map);
    updateplay(false);
  }, [columnArray, play]);

  return (
    <StyledTileArray>
      <ColorTileColumn />
      <div className="map-wrapper">{columnPrintableMap}</div>
    </StyledTileArray>
  );
};
