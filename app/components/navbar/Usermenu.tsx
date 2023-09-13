'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface UsermenuProps {
    currentUser?: SafeUser | null
}
const Usermenu: React.FC <UsermenuProps> = ({
    currentUser
}) => {
    const registerModal=useRegisterModal();
    const loginModal=useLoginModal();
    const[isOpen, setIsOpen]= useState(false);
    
    const toggleOpen=useCallback (()=>{
        setIsOpen((value)=>!value);
    },[])
  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div onClick={()=>{}} className="hidden md:block text-sm font-semibold py-3 px-4 
            rounded-full hover:bg-neutral-100 transition cursor-pointer"> Airbnb your home</div>
            <div onClick={toggleOpen} className="p-4 md:py-1 md:px2 border-[1px] border-neutral-200 flex 
            flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar />
                </div>
            </div>
        </div>

        {isOpen && (
            <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white over-flow 
            top-12 right-0 text-sm'> 
                <div className='flex flex-col cursor-pointer'>
                    {currentUser? (
                        <>
                            <MenuItem 
                            onClick={()=>{}}
                            label='My trips'/>
                            
                            <MenuItem 
                            onClick={()=>{}}
                            label='My Favourites'/>
                             <MenuItem 
                            onClick={()=>{}}
                            label='My Reservations'/>
                             <MenuItem 
                            onClick={()=>{}}
                            label='My properties'/>
                             <MenuItem 
                            onClick={()=>{}}
                            label='Airbnb my home'/>
                            < hr/>
                            <MenuItem 
                            onClick={()=>signOut}
                            label='log out'/>
                        </>
                    ):(
                        <>
                            <MenuItem 
                            onClick={loginModal.onOpen}
                            label='Login'/>
                        
                            <MenuItem 
                            onClick={registerModal.onOpen}
                            label='Sign up'/>
                        </>
                    )}
                    

                </div>

            </div>
            
        )}
    </div>
  )
}

export default Usermenu