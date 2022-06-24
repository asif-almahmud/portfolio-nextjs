import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const menuItems = [{section:"Home",target:"/"},{section:"About",target:"#about"},{section:"Skills",target:"#skills"},{section:"Projects",target:"#projects"},{section:"Contact",target:"#contact"}];

const Navbar = (props: Props) => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] '>
        <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
            <span className='drop-shadow-lg font-medium text-4xl italic px-2 border-2 border-slate-400 rounded-lg shadow-lg'>a<span className='text-xl font-bold'>sif</span></span>
            <div>
                <ul className='hidden md:flex'>
                    {menuItems.map((item)=>(
                        <React.Fragment key={item.section}>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:text-slate-800'>
                                <Link href={item.target}>{item.section}</Link>
                            </li>
                        </React.Fragment>    
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar