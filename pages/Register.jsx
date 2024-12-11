import React from 'react'

const Login = () => {
  return (



<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="register.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="#">
          <span className="sr-only">Home</span>
          <svg
            className="h-8 sm:h-10"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            
          </svg>
        </a>
          
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl bg-white">
          Welcome to Kanxi! 
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          
        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
    Gender
  </label>

  <select
    id="gender"
    name="gender"
    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
  >
    <option value="" disabled selected>
      Select Gender
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>


<div className="col-span-6">
  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
    Email
  </label>

  <input
    type="email"
    id="Email"
    name="email"
    required
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    placeholder="example@domain.com"
    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
  />
</div>

<div className="col-span-6">
  <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
    Date of Birth
  </label>

  <input
    type="date"
    id="dob"
    name="dob"
    required
    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
  />
</div>



<div className="col-span-6 sm:col-span-3">
  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
    Password
  </label>

  <input
    type="password"
    id="Password"
    name="password"
    required
    placeholder="Enter your password"
    pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
    title="Password must be at least 8 characters long and include a lowercase letter, an uppercase letter, a number, and a special character."
    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
  />
</div>

<div className="col-span-6 sm:col-span-3">
  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
    Password Confirmation
  </label>

  <input
    type="password"
    id="PasswordConfirmation"
    name="password_confirmation"
    required
    placeholder="Confirm your password"
    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
  />
</div>


          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and company announcements.
              </span>
            </label>
          </div>

          {/* <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By login , you agree to our
              <a href="Terms" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="Privacy" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div> */}

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Log in
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              {/* Already have an account? */}
              
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
  )
}

export default Login