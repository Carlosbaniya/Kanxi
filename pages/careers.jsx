import React from 'react'

const careers = () => {
  return (
    <>
    {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
         <img src="Welcome.jpg" alt="" />
        </p>

        <div className="mt-8">
          <a href="#" className="text-2xl font-bold text-pink-600"> 97567839 </a>

          <address className="mt-2 not-italic">Kupandole, Lalitpur</address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>
          

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <label
                htmlFor="Option1"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabIndex="0"
              >
                <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                <span className="text-sm"> Cleaning </span>
              </label>
            </div>

            <div>
              <label
                htmlFor="Option2"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabIndex="0"
              >
                <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                <span className="text-sm"> Plumbing </span>
              </label>
            </div>

            <div>
              <label
                htmlFor="Option3"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabIndex="0"
              >
                <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                <span className="text-sm"> Carpenter </span>
              </label>
            </div>
            <div>
              <label
                htmlFor="Option4"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabIndex="0"
              >
                <input className="sr-only" id="Option4" type="radio" tabIndex="-1" name="option" />

                <span className="text-sm"> Beautician </span>
              </label>
            </div>
            <div>
              <label
                htmlFor="Option5"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabIndex="0"
              >
                <input className="sr-only" id="Option5" type="radio" tabIndex="-1" name="option" />

                <span className="text-sm"> Repair Services </span>
              </label>
            </div>
            <div>
              <label
                htmlFor="Option6"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabIndex="0"
              >
                <input className="sr-only" id="Option6" type="radio" tabIndex="-1" name="option" />

                <span className="text-sm"> Pest Control</span>
              </label>
            </div>
          </div>
            

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <a href="GetBack"></a>
            <button 
            
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default careers