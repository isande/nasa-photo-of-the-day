import React from "react";
import ApodDisp from './components/ApodDisp';
import "./App.css";
import styled from 'styled-components'

const ApodDiv = styled.div`
  background: paleturquoise;
  border: 5px inset lightseagreen;
  margin: 3rem;
`;

function App() {
  return (
    <ApodDiv className="App">
      <ApodDisp />
    </ApodDiv>
  );
}

export default App;
