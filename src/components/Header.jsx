import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    const mobileRef = useRef(null)

    const version = "1.0.0"

    const toggle = () => {
       if(mobileRef)
         mobileRef.current.classList.toggle("-translate-x-full")
    }

    return (
        <>
            <nav className='md:hidden'>
                <ul className='between p-4'>
                    <li><i class='bxr bx-menu bx-md block p-4' ref={mobileRef} onClick={toggle}></i> </li>
                    <li>
                        <Link to={'/'}>Tshimologo Moeng</Link>
                    </li>
                    <li>Version: {version}</li>
                </ul>
            </nav>

            <div className='block md:hidden fixed  min-h-screen bg-gray-200 top-0 -translate-x-full transition-transform duration-300'  ref={mobileRef}>
                <li className='px-8 py-4 flex centre gap-8'>Version: {version} <i class='bx bx-x bx-md block p-4'  onClick={toggle}></i> </li>
                <ul className='p-4 space-y-4'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li >
                        <Link to='/simple-interest'>Simple Interest</Link>
                    </li>
                    <li >
                        <Link to='/simple-depreciation'>Simple Depreciation</Link>
                    </li>
                    <li>
                        <Link to={'/compound-interest'}>Compound Interest</Link>
                    </li>
                     <li>
                        <Link to={'/compound-depreciation'}>Compound Depreciation</Link>
                    </li>
                     <li>
                        <Link to={'/sinking-fund'}>Sinking Funds</Link>
                    </li>
                     <li>
                        <Link to={'/nominal-rate'}>Nominal Interest Rate</Link>
                    </li>
                     <li>
                        <Link to={'/effective-rate'}>Effective Interest Rate</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
