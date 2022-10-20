import React from 'react';
import Routers from './Routers/Routers';
import "./Resources/Css/global.scss"
import GlobalHeader from './GlobalWidgets/GlobalHeader/GlobalHeader';
import GlobalFooter from './GlobalWidgets/GlobalFooter/GlobalFooter';
import HomeBanner from './Components/Elements/HomeBanner';

export default function App() {
  return (
    <>
    <GlobalHeader />
    <HomeBanner />
      <Routers />
    <GlobalFooter />
    </>
  )
}
