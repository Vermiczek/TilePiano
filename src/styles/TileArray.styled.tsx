import styled from "styled-components";

export const StyledTileArray = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 10px;
  border-color: red;

  .map-wrapper {
    /* border-radius: 13px;
    border: 2px;
    border-color: #5c2248;
    border-style: solid; */
    display: flex;
    flex-direction: row;
    max-width: 700px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      max-width: 50%;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 0 0 10px 10px;
    }
    ::-webkit-scrollbar-thumb {
      width: 10px;
      background-color: #5c2248;
      border-radius: 10px;
      height: 10px;
    }

    ::-moz-scrollbar {
      width: 5px;
    }
    ::-moz-scrollbar-track {
      width: 20px;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 0 0 10px 10px;
    }
    ::-moz-scrollbar-thumb {
      width: 20px;
      background-color: #5c2248;
      border-radius: 10px;
    }
  }
`;
