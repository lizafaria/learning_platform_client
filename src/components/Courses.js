import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideBar from './SideBar';
import CourseDetails from './CourseDetails';

const Courses = () => {
    const courseDetails = useLoaderData();
    return (
        <div className='grid grid-cols-6'>
            <div>
            <SideBar></SideBar>
            </div>
            <div className='col-span-4'>
                <section className='grid lg:grid-cols-3 sm:grid-cols-1 py-6 sm:py-12 dark:bg-gray-700'>
                       {
                        courseDetails.map(singleCourse=> <CourseDetails key={singleCourse._id} singleCourse={singleCourse}></CourseDetails>)
                       }
                </section>
            </div>
            
        </div>
    );
};

export default Courses;