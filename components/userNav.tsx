'use client';
import Link from '@/node_modules/next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu';

const UserNav = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                <Avatar className='h-10 w-10'>
                    <AvatarImage src="/avatar/02.png" alt="" />
                    <AvatarFallback>SR</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 z-[99999]'>
            <DropdownMenuLabel>
                <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>Big Baan</p>
                    <p className='text-xs leading-none text-muted-foreground'>
                        dadekunle31@gmail.com
                    </p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘p</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link href="">Log out</Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav