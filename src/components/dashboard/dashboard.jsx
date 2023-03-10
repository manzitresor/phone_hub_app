import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from './sideBar'
import NavBar from './navbar'
import Cards from './cards'
import Table from './table'

export default function Dashboard() {
  return (
       <>
       <header>
        <SideBar></SideBar>
        <Cards></Cards>
        <Table></Table>


       </header>
   
       </>
  )
}
