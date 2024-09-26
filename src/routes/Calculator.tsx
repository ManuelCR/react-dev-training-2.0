import React from 'react';
import _ from 'lodash';

import { Button } from "semantic-ui-react";
import { useState } from 'react'; //Por que es algo que va a cambiar

export const Calculator = () => {
  //lo primero es usar el use state
  const[result, setResult] = useState<string>("");// <> defines the type

  const concatResult = (value: string) => {
    setResult((prevResult) => {return prevResult + value});
  }

  const calculate = () => {
    setResult((prevResult) => {return  eval(prevResult)});
  }

  const transformedArray = _.pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')

  return (
    <>
      {transformedArray}
      <div>
        <input type="text" value={result} />
      </div>
      <div>
        <Button onClick={() => concatResult("7")}>7</Button>
        <Button onClick={() => concatResult("8")}>8</Button>
        <Button onClick={() => concatResult("9")}>9</Button>
        <Button onClick={() => concatResult("+")}>+</Button>
      </div>
      <div>
        <Button onClick={() => concatResult("4")}>4</Button>
        <Button onClick={() => concatResult("5")}>5</Button>
        <Button onClick={() => concatResult("6")}>6</Button>
        <Button onClick={() => concatResult("-")}>-</Button>
      </div>
      <div>
        <Button onClick={() => concatResult("1")}>1</Button>
        <Button onClick={() => concatResult("2")}>2</Button>
        <Button onClick={() => concatResult("3")}>3</Button>
        <Button onClick={() => concatResult("*")}>*</Button>
      </div>
      <div>
        <Button onClick={() => concatResult("0")}>0</Button>
        <Button onClick={() => concatResult(".")}>.</Button>
        <Button onClick={() => calculate()}>=</Button>
        <Button onClick={() => concatResult("/")}>/</Button>
      </div>

    </>
  );
};
