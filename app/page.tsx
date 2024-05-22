import CoffeeList from '@/components/CoffeeList'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <CoffeeList />
      <Footer />
    </>
  )
}

export default Home