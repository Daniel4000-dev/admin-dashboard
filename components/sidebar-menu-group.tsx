"use client";
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle'
import classNames from '@/node_modules/classnames/index';
import { SideNavItemGroup } from '@/types/types'
import React from 'react'
import SideBarMenuItem from './sidebar-menu-item';

const SideBarMenuGroup = ({ menuGroup }: { menuGroup: SideNavItemGroup }) => {
    const {toggleCollapse } = useSideBarToggle();

    const menuGroupTitleStyle= classNames('py-4 tracking-[.1rem] font-meduim uppercase text-sm text-[#A5A1AA]', 
    {})
  return (
    <>
       <h3 className={menuGroupTitleStyle}>{!toggleCollapse ? menuGroup.title : '...'}</h3>
       {
        menuGroup.menuList?.map((item,index) => {
            return <SideBarMenuItem key={index} item={item} />
        })
       }
    </>
  )
}

export default SideBarMenuGroup