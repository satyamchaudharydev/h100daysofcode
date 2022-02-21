import React from 'react'
import { Sidenav } from './Sidenav'
import { Outlet } from 'react-router'
export const Page = () => {
    return <>
        <Sidenav />
        
        <Outlet />
    </>
}
