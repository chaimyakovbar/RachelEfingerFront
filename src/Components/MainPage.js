import React from 'react'
import CardProdut from './CardProduct'
import ImageList from './pages/ImageList'
import SocialNetworks from './SocialNetworks'
import AccessibilityMenu from './AccessibilityMenu'


const MainPage = () => {

  return (
    <div >
      <AccessibilityMenu />
      <ImageList />
      <CardProdut />
      <SocialNetworks />
    </div>
  )
}

export default MainPage

