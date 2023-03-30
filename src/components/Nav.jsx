import React from 'react'
import { Link } from 'react-router-dom'
import { useContextCustom } from '../context/stateContext'
import {BsCart4} from "react-icons/bs"

const Nav = () => {
    const {search,setSearch}=useContextCustom();
    const {state:{cart}}=useContextCustom();
    //console.log(cart);
    //console.log(search)

  return (
    <div className='container mx-auto w-full p-5 shadow flex justify-around items-center bg-[#ea580c] text-white text-semibold sticky top-0 z-10 mb-10 '>
        <Link to={'/'}>
        <h2 className='text-2xl md:text-3xl font-semibold'>Shop</h2>
        </Link>
        <div className=' flex md:gap-5 justify-end items-center'>
            <input value={search} onChange={e=>setSearch(e.target.value)} type="text" className=' outline-none text-black w-[190px] md:w-[75%]' />
            <Link to={'/addtocart'}>
              <div className=' relative'>

              <BsCart4 className=' text-3xl md:text-4xl'/>
              <span className='bg-[#fff] absolute bottom-5 left-5 h-6 w-6 rounded-[100%] flex justify-center items-center text-[#f97316] text-lg md:text-2xl font-semibold'>{cart.length}</span>
              </div>
            </Link>

        </div>
    </div>
  )
}

export default Nav