import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between bg-red-600 px-6 py-4'>
                <h2>Next API</h2>
                <div className=' flex items-center gap-4'>
                    <ul className='flex justify-between gap-6'>
                        <li>
                            <Link href={'posts'}>Posts</Link>
                        </li>
                        <li>
                            <Link href={'meals'}>Meals</Link>
                        </li>
                    </ul>
                    <button className='btn'>Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;