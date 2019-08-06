import React from "react";
import { Title } from 'bloomer';

function Headers(props) {
  return (
    <div>
      <Title style={{color: "white"}} isSize={1}>{props.temp}</Title>
      <Title style={{color: "white"}} isSize={4}>{props.isRaining}</Title>
    </div>
  );
}

export default Headers;