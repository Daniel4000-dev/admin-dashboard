import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';

const PageWrapper = ({ children }: { children: ReactNode }) => {

    const { toggleCollapse  } = useSideBarToggle();
    const pageStyle = classNames('bg-slate-50 flex-grow text-black p-2 mt-16 pl-[20rem]',
    {
        ["sm:pl-[20rem]"]:!toggleCollapse,
        ["sm: pl-[5.6rem]"]:toggleCollapse
    })
  return (
    <div className={pageStyle}>
        {children}
    </div>
  )
}

export default PageWrapper