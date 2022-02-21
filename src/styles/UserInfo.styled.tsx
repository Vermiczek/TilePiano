import styled from "styled-components";

export const StyledConfig = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: right;
  border-style: solid;
  border-color: blueviolet;
  border: 10px;
  margin: 25px;

  .text {
    color: #611c52;
    font-family: fantasy;
  }

  .buttons {
    margin: 10%;
    display: grid;
    width: 200px;
    grid-template-columns: 30px 30px;
    grid-row: auto auto;
    grid-gap: 50px;
  }

  .text {
    margin-top: 20px;
    text-align: center;
  }

  .slider {
    margin-top: 30px;
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%;
    height: 10px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
    transition: opacity 0.2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    border-radius: 50%;
    appearance: circle;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #04aa6d; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  .slider::-webkit-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    border-radius: 50%;
    background: #04aa6d; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
`;
