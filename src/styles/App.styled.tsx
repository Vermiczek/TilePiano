import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(169, 134, 175);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  body {
    margin: 0px;
    padding: 0px;
  }
  * body {
    margin: 0;
    padding: 0;
  }
  .header {
    font-size: 50px;
    padding: 20px;
    color: #420f42;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(225, 183, 243, 0.6);
    width: 400px;
    padding: 20px;
    overflow-x: scroll;
    position: fixed;
    top: 50px;
    max-width: 300px;
  }
`;
