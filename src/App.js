import React from 'react';
import Routers from './Routers/Routers';
import "./Resources/Css/global.scss"
import GlobalHeader from './GlobalWidgets/GlobalHeader/GlobalHeader';

export default function App() {
  return (
    <>
    <GlobalHeader />
      <Routers />
    </>
  )
}
