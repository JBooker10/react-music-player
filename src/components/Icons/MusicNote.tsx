import React from "react";

interface IState {
  height: number;
  width: number;
  color: string;
}

const MusicNote = ({ color, height, width }: IState): JSX.Element => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      //   x="0px"
      //   y="0px"
      viewBox="0 0 55 55"
      height={height}
      width={width}
      style={{
        margin: "auto",
        display: "block ",
        fill: color
      }}
    >
      <path
        d="M52.66,0.249c-0.216-0.189-0.501-0.275-0.789-0.241l-31,4.011C20.373,4.084,20,4.507,20,5.01v6.017v4.212v25.384
	C18.174,38.428,15.273,37,12,37c-5.514,0-10,4.037-10,9s4.486,9,10,9s10-4.037,10-9c0-0.232-0.019-0.46-0.039-0.687
	C21.974,45.248,22,45.189,22,45.121V16.118l29-3.753v18.257C49.174,28.428,46.273,27,43,27c-5.514,0-10,4.037-10,9s4.486,9,10,9
	c5.464,0,9.913-3.966,9.993-8.867c0-0.013,0.007-0.024,0.007-0.037V11.227V7.016V1C53,0.712,52.876,0.438,52.66,0.249z"
      />
    </svg>
  );
};

export default MusicNote;
