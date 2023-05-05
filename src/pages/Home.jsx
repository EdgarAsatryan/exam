import React from 'react'
import Hero from '../Components/ui/Hero'
import BestSeller from '../Components/ui/BestSeller'
import Category from '../Components/ui/Category'
import Sale from '../Components/ui/Sale'
import Upgrade from '../Components/ui/Upgrade'
import SpendAndSave from '../Components/ui/SpendAndSave'
import TrendGames from '../Components/ui/TrendGames'
import Disk from '../Components/Disk'

export default function Home() {
  return (
    <div>
      <Hero/>
      <BestSeller/>
      <Category/>
      <Sale/>
      <Upgrade/>
      <SpendAndSave/>
      <TrendGames/>
      <Disk/>
    </div>
  )
}
