import React from "react";

interface Props {
  name: string;
  age: number;
}

const SecondComponent = (props: Props) => {
  return (
    <div>
      <p>Meu segundo componenente</p>
      <p>O nome dele é {props.name}</p>
      <p>A idade dele é {props.age}</p>
    </div>
  );
};

export default SecondComponent;
