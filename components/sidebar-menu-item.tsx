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
    const linkStyle = 'flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white rounded-md transition duration-200';
    const ddLinkStyle = linkStyle;
    const navMenuDropdownItem = 'text-[#6e768e] light:text-[#6e768e] py-2 px-4 light:hover:text-black hover:text-white transition duration-200';

    const inactiveLink = classNames("flex items-center imn-h-[40px] h-full text-[#6e768e] light");
    const activeLinkStyle= 'rounded-md text-white light:text-black light:bg-[#efefef] bg-[#3a3f48]';

    const pathName = usePathname();

    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu= () => {
        setSubMenuOpen(!subMenuOpen);
    }

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
                {subMenuOpen && !toggleCollapse && <div className='bg-[#3a3f48] border-1-4'>
                    <div className='grid gap-y-2 px-10 py-3 leading-5'>
                        {
                            item.subMenuItems.map((subItem, index) => {
                                return (
                                    <Link key={index} href={subItem.path} className={`${navMenuDropdownItem} ${subItem.path===pathName? 'text-white':''}`} >
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