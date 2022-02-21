import React from "react";
import { StyledApp } from "./styles/App.styled";
import { TileArray } from "./TileArray";
import { ContextProvider } from "./ContextProvider";
import { Config } from "./UserInfo";

//Main component along with it's sub-components and providers.
const App: React.FC = () => {
  return (
    <ContextProvider>
      <StyledApp>
        <Config />
        <TileArray />
      </StyledApp>
    </ContextProvider>
  );
};

export default App;
