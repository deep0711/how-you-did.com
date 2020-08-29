import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr'
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri'
import Profile from '../userProfile';
import './Navbar.css'

export const SidebarData = [
    {
        title : "Profile" , 
        path : '/profile',
        icon : <CgIcons.CgProfile className = "largeicon"/>,
        cName : 'nav-text' 
    },
    {
        title : "Create" , 
        path : '/post' , 
        icon : <IoIcons.IoIosCreate className = "largeicon"/>,
        cName : 'nav-text' 
    },
    {
        title : "Settings" , 
        path : '/settings' , 
        icon : <GrIcons.GrUserSettings className = "largeicon"/>,
        cName : 'nav-text'
    },
    {
        title : "Trending" , 
        path : '/trending' , 
        icon : <RiIcons.RiFireLine className = "largeicon"/>,
        cName : 'nav-text'
    },
]