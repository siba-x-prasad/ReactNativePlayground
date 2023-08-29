import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask
} from "react-native-svg";

const Container = styled.View`
  flex: 1;
  padding: 50px 0;
  justify-content: center;
  background-color: #f4f4f4;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: red;
`;
const Item = styled.View`
  flex: 1;
  border: 1px solid #ccc;
  margin: 2px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  height: 200px;
  background-color: ${props => (props.transparent ? "red" : "blue")};
  width: 80%;
  padding: 10px;
`;

export default class Style5 extends Component {
  render() {
    return (
      <Container>
        <Svg height="150" width="300">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
              <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
              <Stop offset="1" stopColor="red" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
        </Svg>

        <Svg height="100" width="100">
          <Defs>
            <RadialGradient
              id="grad"
              cx="50%"
              cy="50%"
              rx="50%"
              ry="50%"
              fx="50%"
              fy="50%"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0%" stopColor="#ff0" stopOpacity="1" />
              <Stop offset="100%" stopColor="#00f" stopOpacity="1" />
            </RadialGradient>
            <ClipPath id="clip">
              <G scale="0.9" x="10">
                <Circle cx="40" cy="30" r="20" />
                <Ellipse cx="60" cy="70" rx="20" ry="10" />
                <Rect x="65" y="15" width="50" height="50" />
                <Polygon points="20,60 20,80 50,70" />
                <Text
                  x="50"
                  y="30"
                  fontSize="32"
                  fonWeight="bold"
                  textAnchor="middle"
                  scale="1.2"
                >
                  Q
                </Text>
              </G>
            </ClipPath>
          </Defs>
          <Rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="url(#grad)"
            clipPath="url(#clip)"
          />
        </Svg>
        <Svg height="100" width="300">
          <Defs>
            <G id="shape">
              <G>
                <Circle cx="50" cy="50" r="50" />
                <Rect x="50" y="50" width="60" height="50" />
                <Circle cx="50" cy="50" r="5" fill="#c00" />
              </G>
            </G>
          </Defs>
          <Use href="#shape" x="20" y="0" />
          <Use href="#shape" x="170" y="0" />
        </Svg>
      </Container>
    );
  }
}