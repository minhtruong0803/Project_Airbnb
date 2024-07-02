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
      <div className='main border-b'>
        {/* Top */}
        <div className='content'>
          {/* Logo */}
          <div className='logo'>
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
            <TbWorld />
            <div className='flex items-center'>
              <IoMenu />
              <FaUserCircle />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='search'>
          <button className='diadiem'>Địa điểm</button>
          <button className='nhanphong'>Nhận phòng</button>
          <button className='traphong'>Trả phòng</button>
          <button className='themkhach'>Khách</button>
          <div className='iconsearch rounded-full '>
            <IoSearchOutline className='icon text-white' />
          </div>
        </div>
      </div>
    </div>
  )
};


// style={{ paddingBottom: "10px", margin: "auto", width: "90%" }}