import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
	const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { user, 
    createUser,
    updateProfileDetails,
     verifyEmail, 
    } = useContext(AuthContext);
  
    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
	console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        handleUpdateUserProfile(name, photoURL)
		sendVerification()
      })
      .catch((error) => console.error(error));


   
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }
    updateProfileDetails(profile)
    .then(() => {  Swal.fire("Profile has been Updated"); })
    .catch(error =>   Swal.fire(error.message));

  
    }

	const sendVerification = ( )=>{
		verifyEmail()
		.then(() => {
			Swal.fire("Check Email for verification");
		  navigate(from, { replace: true })
		})
		.catch((error) => {
			Swal.fire(error.message);
		});
	}


    return (
		<div className="mt-5 mb-5">
		<div className="flex justify-center items-center pt-8">
		  <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-700 text-gray-100">
			<div className="mb-8 text-center">
			  <h1 className="my-3 text-4xl font-bold">Register</h1>
			  <p className="text-sm text-gray-400">Create a new account</p>

			</div>
			<p className="px-6 text-sm text-center ">
			  Already have an account yet?{" "}
			  <Link to="/login" className="hover:underline text-sky-400 font-bold ">
				Sign In
			  </Link>
			  .
			</p>

			<div className="my-6 space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		<button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
			<p>Login with GitHub</p>
		</button>
	</div>

			<form
			  onSubmit={handleSubmit}
			  noValidate=""
			  action=""
			  className="space-y-12 ng-untouched ng-pristine ng-valid"
			>
			  <div className="space-y-4">
				<div>
				  <label htmlFor="name" className="block mb-2 text-sm">
					Name
				  </label>
				  <input
					type="text"
					name="name"
					id="name"
					placeholder="Enter Your Full Name Here"
					className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
					data-temp-mail-org="0"
				  />
				</div>
				<div>
				  <label htmlFor="photoURL" className="block mb-2 text-sm">
					Photo URL
				  </label>
				  <input
					type="text"
					name="photoURL"
					id="photoURL"
					placeholder="Enter Your Photo URL"
					className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
					data-temp-mail-org="0"
				  />
				</div>
				<div>
				  <label htmlFor="email" className="block mb-2 text-sm">
					Email address
				  </label>
				  <input
					type="email"
					name="email"
					id="email"
					placeholder="Enter Your Email Here"
					className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
					data-temp-mail-org="0"
				  />
				</div>
				<div>
				  <div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">
					  Password
					</label>
				  </div>
				  <input
					type="password"
					name="password"
					id="password"
					placeholder="*******"
					className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
				  />
				</div>
			  </div>
			  <div className="space-y-2">
				<div>
				  <button
					type="submit"
					className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
				  >
					Sign Up
				  </button>
				</div>
			  </div>
			</form>
			
		  </div>
		</div>
	  </div>
  
    );
};

export default Register;