import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({singleCourse}) => {
  const {title, image_url,details, _id}=singleCourse;
    return (
        <div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mb-5">
	<img src={image_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl font-semibold tracking-wide">{title }</h2>
			<p className="dark:text-gray-100">{details}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-700 text-white dark:text-gray-900">

      <Link  to={`/books/${_id}`}> Read More </Link>
    </button>
	</div>
</div>
        </div>
    );
};

export default CourseDetails;