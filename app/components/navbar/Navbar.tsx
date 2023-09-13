'use client';

import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import Usermenu from './Usermenu'
import { SafeUser } from '@/app/types';

interface NavbarProps{
  currentUser?: SafeUser |  null;
}

const Navbar: React.FC<NavbarProps> = (
  currentUser
) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0 p-3'>
                  <Logo />
                  <Search />
                  <Usermenu currentUser={currentUser}/>
                </div>
            </Container>

        </div>
    </div>
  )
}

export default Navbar