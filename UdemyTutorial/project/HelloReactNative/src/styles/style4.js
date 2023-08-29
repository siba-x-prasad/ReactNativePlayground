import React, {Component} from 'react';
import { StyleSheet,Text, View} from 'react-native';
import styled from 'styled-components'
const Container=styled.View`
    flex:1;
    padding:50px 0;
    justify-content:center;
    background-color:#f4f4f4;
    align-items:center
`
const Title=styled.Text`
font-size:20px;
text-align:center;
 color:red;
`
const Item=styled.View`
flex:1;
border:1px solid #ccc;
margin:2px 0;
border-radius:10px;
box-shadow:0 0 10px #ccc;
height:200px;
// execute a specific style based on the props
background-color:${props=>props.transparent?"red":"blue"};
width:80%;
padding:10px;
 
`
const Shape=styled.View`
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`

export default class App extends Component {
  render() {
    return (
      <Container>
             <Item transparent>{/*pass the props to the components*/}
             <Title >Item number 1</Title>
             </Item>
             <Item  primary>
             <Title >Item number 1</Title>
             </Item>
             <Item  transparent>
             <Title >Item number 1</Title>
             </Item>
             <Item  primary>
             <Title >Item number 1</Title>
             </Item>
      </Container>
    );
  }
}