import React from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'

const UserNav = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button className='relative h-8 w-8 rounded-full'>

            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserNav