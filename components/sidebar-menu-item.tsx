'use client';
import Link from '@/node_modules/next/link';
import { SideNavItem } from '@/types/types';
import { BsChevronRight } from 'react-icons/bs';
import React, { useState } from 'react';
import { usePathname } from '@/node_modules/next/navigation';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import classNames from '@/node_modules/classnames/index';

const SideBarMenuItem = ({ item }:{ item: SideNavItem }) => {
    const {toggleCollapse} = useSideBarToggle();
    const linkStyle = 'flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:text-sidebar-muted-foreground hover:bg-sidebar-muted rounded-md transition duration-200';
    const ddLinkStyle = linkStyle;

    const pathName = usePathname();

    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu= () => {
        setSubMenuOpen(!subMenuOpen);
    }

    const inactiveLink = classNames("flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:text-sidebar-muted-foreground hover:bg-sidebar-muted rounded-md transition duration-200");
    const activeLinkStyle= 'active text-sidebar-muted-foreground bg-sidebar-muted';

    const navMenuDropdownItem = 'text-red py-2 px-4 hover:text-sidebar-muted-foreground transition duration-200 rounded-md';
    const dropDownMenuHeaderLink = classNames(inactiveLink, {
        ['bg-sidebar-muted rounded-b-none']: subMenuOpen
    })

  return (
    <div>
        {
            item.submenu
            ?(<div className='rounded-md min-w-[18px]'>
                <a className={`${ddLinkStyle} ${pathName.includes(item.path) ? activeLinkStyle : ''}`} onClick={toggleSubMenu}>
                    {item.icon}
                    {
                        !toggleCollapse &&
                        <>
                        <span className='ml-3 text-base leading-6 font-semibold'></span>
                        <BsChevronRight className={`${subMenuOpen?"rotate-90":''} ml-auto stroke-2 text-xs`} />
                        </>
                    }
                </a>
                {subMenuOpen && !toggleCollapse && <div className='bg-sidebar-muted border-1-4'>
                    <div className='grid gap-y-2 px-10 py-3 leading-5'>
                        {
                            item.subMenuItems.map((subItem, index) => {
                                return (
                                    <Link key={index} href={subItem.path} className={`${navMenuDropdownItem} ${subItem.path===pathName? 'text-white':'text-sidebar-foreground'}`} >
                                        <span>{subItem.title}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                }
            </div>)
            :(<Link href={item.path} className={`${linkStyle} ${item.path === pathName ? activeLinkStyle: ''}`}>
                {item.icon}
                {!toggleCollapse && <span className='ml-3 leading-6 font-semibold'>{item.title}</span>}
            </Link>)
        }
    </div>
  )
}

export default SideBarMenuItem