import React from 'react'
import logo from "./assets/airbnb.png";
import { TbWorld } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

// new

export default function Navbar() {
  return (
    <div>
      <div className='border-b'>
        {/* <div className='main sm-mx-6 md-mx-10 lg-mx-12'> */}
        {/* Top */}
        <div className='main sm:mx:6 md:mx-10 lg:mx-12'>
          {/* Logo */}
          <div className='logo hidden lg:flex'>
            <img src={logo} />
          </div>
          {/* Link */}
          <div className='link flex justify-between w-36'>
            <a href='#' className="active">Chỗ ở</a>
            <a href='#' className='flex'>Trải nghiệm</a>
          </div>
          {/* Login/out */}
          <div className='flex items-center'>
            <p>Cho thuê chỗ ở qua Airbnb</p>
            <TbWorld className='world' />
            <div className='login flex items-center'>
              <IoMenu className='menu' />
              <FaUserCircle className='user' />
            </div>
          </div>
        </div>

        {/* Bottom */}
          <div className='bottom'>
            <div className='search flex justify-start ' >
              <button className='diadiem'>Địa điểm</button>
              <button className='nhanphong'>Nhận phòng</button>
              <button className='traphong'>Trả phòng</button>
              <button className='themkhach'>Khách</button>
              {/* <div className='iconsearch rounded-full '> */}
                <button className='iconsearch' type='search'>
                <IoSearchOutline className='icon text-white' />
                </button>
              {/* </div> */}
            </div>
          </div>

      </div>
    </div>
    // </div>
  )
};


// style={{ paddingBottom: "10px", margin: "auto", width: "90%" }}