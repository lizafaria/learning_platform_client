import React from 'react';

const FAQ = () => {
    return (
        <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How does the programming courses work?</summary>
				<div className="px-4 pb-4">
					<p>Almost all programming languages work the same way: You write code to tell it what to do: print("Hello, world"). The code is compiled, which turns it into machine code the computer can understand. The computer executes the code, and writes Hello, world back to us.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Which is the course of Operating System ?</summary>
				<div className="px-4 pb-4">
					<p>The course is split into four sections: (1) Introduction, (2) Process and Thread Management, (3) Resource Management and Communication, and (4) Distributed Systems.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Why is web technology important?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Learning Web Technology is essential today because Internet has become the number one source to information, and many of the traditional software applications have become Web Applications.</p>
					
				</div>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default FAQ;