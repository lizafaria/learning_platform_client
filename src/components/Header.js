import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../Context/AuthContext'



const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  

  const handleLogout = () => {
    logOut()
      .then(Swal.fire('User logged out!'))
      .catch(error => console.log(error))
  }

  console.log(user)
  return (
    <header className=' bg-gray-700 body-font text-white'>
      <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 text-white rounded-full dark:text-gray-900">
					<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
				</svg>
          <span className='ml-3 text-xl text-white'>Self Taught Programmer</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to='/home' className='mr-5 hover:text-gray-900'>
            Home
          </Link>

          {
            user  ?
            <>
            <Link to='/course' className='mr-5 hover:text-gray-900'>
              Courses
            </Link>
            <Link to='/blog' className='mr-5 hover:text-gray-900'>
              Blogs
            </Link>
            <Link to='/faq' className='mr-5 hover:text-gray-900'>
              FAQ
            </Link>
            <button
              onClick={handleLogout}
              className='inline-flex items-center bg-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
            >
              Logout
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </>
              :
              <>
                 <Link to='/login' className='mr-5 hover:text-gray-900'>
                     Login
                    </Link> 
                    <Link to={'/register'}  className='mr-5 hover:text-gray-900'>
                     Regsiter         </Link> 
              </>   
        
          }
        </nav>
      </div>
    </header>
  )
}

export default Header