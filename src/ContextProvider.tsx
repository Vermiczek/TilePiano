import React, { useState, useContext } from "react";

//Interface used for search.
export interface GlobalSearch {
  search: string;
}

//Interface for storing user data.
export interface User {
  name: string;
  avatarUrl: string;
  githubLink: string;
}

//Interface which allows me to pass components as props.
interface ParentCompProps {
  children?: React.ReactNode;
}

//Search state context, Search setState context, user state context and user setState context.
const ColorContext = React.createContext<number>(0);
const ColorUpdateContext = React.createContext<Function>(() => {});
const AmountContext = React.createContext<number>(0);
const AmountUpdateContext = React.createContext<Function>(() => {});
const TempoContext = React.createContext<number>(1);
const TempoUpdateContext = React.createContext<Function>(() => {});
const PlayContext = React.createContext<boolean>(false);
const PlayUpdateContext = React.createContext<Function>(() => {});
const StopContext = React.createContext<boolean>(false);
const StopUpdateContext = React.createContext<Function>(() => {});
const VolumeContext = React.createContext<number>(100);
const VolumeUpdateContext = React.createContext<Function>(() => {});

export const useColorContext = () => useContext(ColorContext);
export const useColorUpdateContext = () => useContext(ColorUpdateContext);
export const useAmountContext = () => useContext(AmountContext);
export const useAmountUpdateContext = () => useContext(AmountUpdateContext);
export const useTempoContext = () => useContext(TempoContext);
export const useTempoUpdateContext = () => useContext(TempoUpdateContext);
export const usePlayContext = () => useContext(PlayContext);
export const usePlayUpdateContext = () => useContext(PlayUpdateContext);
export const useStopContext = () => useContext(StopContext);
export const useStopUpdateContext = () => useContext(StopUpdateContext);
export const useVolumeContext = () => useContext(VolumeContext);
export const useVolumeUpdateContext = () => useContext(VolumeUpdateContext);
//Component acting like a custom hook giving me access to a "global" memory thorough the whole project.
export const ContextProvider: React.FC<ParentCompProps> = ({ children }) => {
  const [chosenType, setType] = useState<number>(0);
  const [tempo, setTempo] = useState<number>(50);
  const [tileAmount, setTileAmount] = useState<number>(16);
  const [play, setPlay] = useState<boolean>(false);
  const [stop, setStop] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(100);

  return (
    <ColorContext.Provider value={chosenType}>
      <ColorUpdateContext.Provider value={setType}>
        <AmountContext.Provider value={tileAmount}>
          <AmountUpdateContext.Provider value={setTileAmount}>
            <TempoContext.Provider value={tempo}>
              <TempoUpdateContext.Provider value={setTempo}>
                <PlayContext.Provider value={play}>
                  <PlayUpdateContext.Provider value={setPlay}>
                    <StopContext.Provider value={stop}>
                      <StopUpdateContext.Provider value={setStop}>
                        <VolumeContext.Provider value={volume}>
                          <VolumeUpdateContext.Provider value={setVolume}>
                            {children}
                          </VolumeUpdateContext.Provider>
                        </VolumeContext.Provider>
                      </StopUpdateContext.Provider>
                    </StopContext.Provider>
                  </PlayUpdateContext.Provider>
                </PlayContext.Provider>
              </TempoUpdateContext.Provider>
            </TempoContext.Provider>
          </AmountUpdateContext.Provider>
        </AmountContext.Provider>
      </ColorUpdateContext.Provider>
    </ColorContext.Provider>
  );
};
