import React, { ReactNode } from 'react';
import classNames from 'classnames';

const PageWrapper = ({children, toggleCollapse}: {children: ReactNode, toggleCollapse:boolean}) => {
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