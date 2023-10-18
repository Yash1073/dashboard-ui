import React from 'react'
import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs';
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';
import img1 from "./assests/artworks-000569887574-bm017r-t500x500.jpg";
import './sidebar.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <>
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    {/* <BsCart3  className='icon_header'/> */}
                    <PanoramaFishEyeRoundedIcon className='icon_header' /> Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsFillArchiveFill className='icon' /> Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsFillGrid3X3GapFill className='icon' /> Customer
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsPeopleFill className='icon' /> Income
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsListCheck className='icon' /> Promote
                    </a>
                </li>
                {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Settings
                </a>
            </li> */}
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Setting
                    </a>
                </li>

                
                <li className='foot'>
                <img src={img1} alt="Image" style={{ width: 50, height: 50 }}/>
                    <div className='foot_text'>
                        <div>John</div>
                        <div> Project Manager</div>
                    </div>

                </li>
            </ul>
        </aside>
        </>
    )
}

export default Sidebar