import React from "react";

interface IState {
  height: number;
  width: number;
  color: string;
  className: string;
}

const Pause = ({ color, height, width, className }: IState): JSX.Element => {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      style={{
        margin: "auto",
        display: "block ",
        fill: color
      }}
      viewBox="0 0 512 512"
    >
      <path d="m256 512c-68.378906 0-132.667969-26.628906-181.019531-74.980469-48.351563-48.351562-74.980469-112.640625-74.980469-181.019531s26.628906-132.667969 74.980469-181.019531c48.351562-48.351563 112.640625-74.980469 181.019531-74.980469s132.667969 26.628906 181.019531 74.980469c48.351563 48.351562 74.980469 112.640625 74.980469 181.019531s-26.628906 132.667969-74.980469 181.019531c-48.351562 48.351563-112.640625 74.980469-181.019531 74.980469zm0-472c-119.101562 0-216 96.898438-216 216s96.898438 216 216 216 216-96.898438 216-216-96.898438-216-216-216zm-30 105h-40v220h40zm100 0h-40v220h40zm0 0" />
    </svg>
  );
};

export default Pause;
