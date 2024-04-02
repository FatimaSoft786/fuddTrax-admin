import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {

let navigate = useNavigate();
     const login = async(email,password)=>{

    const data = {
       "email": email,
       "password": password
    }
    axios.post("https://fuddtrax-backend-production.up.railway.app/api/admin/login",data)
    .then((response)=>{
        console.log(response);
      if(response.data.error === false){
         setButtonText('Login')
         navigate("/first")
      }
       else{
        setButtonText('Login')
        setError("Please enter correct credentials")
       }
    }).catch((err)=>{
      console.log(err.message)
    })
   }


 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState('');
  const[buttonText,setButtonText] = useState('Login')

  

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-32 w-32"
            src="/logo.jpeg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
           setButtonText('please wait...')
             login(data.email,data.password)
            })}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-0">
                <input
                  id="email"
                  {...register('email', {
                    required: 'email is required',
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: 'email not valid',
                    },
                  })}
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#de0e02] sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                
              </div>
              <div className="mt-0">
                <input
                  id="password"
                  {...register('password', {
                    required: 'password is required',
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#de0e02] sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {error && <p className="text-red-500">{error || error.message}</p>}
            </div>

            <>
              <button
                type="submit"
                className="flex w-full mt-6 justify-center rounded-md bg-[#de0e02] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[##de0e02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#de0e02]"
              >
                {buttonText}
              </button>
            </>
          </form>

        
        </div>
      </div>
  )
}

export default Login
