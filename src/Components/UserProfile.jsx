import React from 'react'
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from "./Elements/OtherPageBanner"

export default function UserProfile() {
  return (
   <>
    <GlobalHeader />
      <OtherPageBanner title="User Profile"/>
    <GlobalFooter />
   </>
  )
}
