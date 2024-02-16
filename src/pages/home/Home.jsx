import React from 'react';
import HeroBanner from './heroBanner/heroBanner';
import Trending from './trending/Trending';
import Popular from '../popular/Popular';
import TopRated  from '../topRated/TopRated'

import "./style.scss"
const Home = () => {
  return (
    <>
    <HeroBanner/>
    <Trending/>
    <Popular />
            <TopRated />
   </>
  )
}

export default Home
