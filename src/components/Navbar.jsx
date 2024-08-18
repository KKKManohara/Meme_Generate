import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Signin from './Signin';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [showSignin, setShowSignin] = useState(false); // State for displaying Signin component

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="MEME_Generate" />
                        <span className='text-xl tracking-tight'>MEME_Generate</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:flex justify-center space-x-12 items-center'>
                        <button
                            className='py-2 px-3 border rounded-md'
                            onClick={() => setShowSignin(!showSignin)}
                        >
                            Sign In
                        </button>
                        <a href='#' className='bg-gradient-to-r from-[#D42680] to-[#3D3BC9] py-2 px-3 rounded-md'>
                            Create an account
                        </a>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <br />
                        <div className='flex space-x-6'>
                            <button
                                className='py-2 px-3 border rounded-md'
                                onClick={() => setShowSignin(!showSignin)}
                            >
                                Sign In
                            </button>
                            <a href='#' className='bg-gradient-to-r from-[#D42680] to-[#3D3BC9] py-2 px-3 rounded-md'>
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Signin Modal */}
            {showSignin && (
                <div className='fixed inset-0 z-30 flex items-center justify-center bg-neutral-900 bg-opacity-50'>
                    <div className='bg-black bg-opacity-50 p-44 rounded-lg shadow-lg mt-[1300px]'>
                        <Signin />
                        <button
                            className='mt-4 px-4 py-2 bg-gradient-to-r from-[#D42680] to-[#3D3BC9] text-white rounded-md'
                            onClick={() => setShowSignin(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
