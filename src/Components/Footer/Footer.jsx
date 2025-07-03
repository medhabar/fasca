import React from 'react';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='w-full bg-white pt-[30px] pb-[20px] border-t-[1px] border-[#d9d9d9]'>
            <div className="lg:container mx-auto">
                <div className="flex items-center justify-between pb-6">
                    {/* logo wrapper  */}
                    <div className="logo_wrapper">
                        <Link to={'/'}><h3 className='text-[2rem] text-[#484848] uppercase font-normal'>fasca</h3></Link>
                    </div>

                    {/* navbar wrapper  */} 
                    <div>
                        <nav className='flex items-center gap-[3.5rem]'>
                        <NavLink to={'/'} className='text-base text-[#484848] capitalize font-normal font-poppins'>support center</NavLink>
                        <NavLink to={'/'} className='text-base text-[#484848] capitalize font-normal font-poppins'>invoicing</NavLink>
                        <NavLink to={'/'} className='text-base text-[#484848] capitalize font-normal font-poppins'>contact</NavLink>
                        <NavLink to={'/'} className='text-base text-[#484848] capitalize font-normal font-poppins'>careers</NavLink>
                        <NavLink to={'/'} className='text-base text-[#484848] capitalize font-normal font-poppins'>blog</NavLink>
                        <NavLink to={'/'} className='text-base text-[#484848] capitalize font-normal font-poppins'>FAQs</NavLink>
                    </nav>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <p className='text-sm text-[#484848] font-poppins font-normal'>Copyright &copy; 20250 fasco. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;