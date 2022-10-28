import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const SideBar = () => {
    const [side, setSide]= useState([])

    useEffect(()=>{
        fetch("https://assignment-10-server-orpin-five.vercel.app/books")
        .then(res => res.json())
        .then(data=> setSide(data))
    },[])
    return (
        <div>
        <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-900">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2>
			<div className="flex flex-col space-y-1">
                {
                    side.map(option=>

                        <button className='lg:bg-gray-400 sm:mb-2 lg:mb-2 lg:p-3 sm:bg-white  rounded font-bold'><Link to={`/books/${option._id}`} key={option._id} >{option.title}</Link></button>
                    )
                }

			</div>
		</div>
		
	</nav>
</aside>
        </div>
    );
};

export default SideBar;