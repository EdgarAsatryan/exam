import React from 'react'
import Hero from '../Components/ui/Hero'
import BestSeller from '../Components/ui/BestSeller'
import Category from '../Components/ui/Category'
import Sale from '../Components/ui/Sale'
import Upgrade from '../Components/ui/Upgrade'
import SpendAndSave from '../Components/ui/SpendAndSave'
import TrendGames from '../Components/ui/TrendGames'
import Disk from '../Components/Disk'

export default function Home({filter, handleFilter,addToCart}) {
  return (
    <div>
      <Hero/>
      <BestSeller addToCart={addToCart} filter={filter} handleFilter={handleFilter}/>
      <Category filter={filter} handleFilter={handleFilter}/>
      <Sale/>
      <Upgrade addToCart={addToCart} filter={filter} handleFilter={handleFilter}/>
      <SpendAndSave/>
      <TrendGames addToCart={addToCart} filter={filter} handleFilter={handleFilter}/>
      <Disk/>
    </div>
  )
}
