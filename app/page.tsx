import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <nav className=" h-20 flex-no-wrap relative flex w-full items-center justify-between bg-black shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start" data-te-navbar-ref>
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
              <span className="[&>svg]:w-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
            <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-te-collapse-item>
              <ul className="list-style-none mr-auto flex flex-col pl-4 lg:flex-row" data-te-navbar-nav-ref>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 text-2xl" href="https://discord.gg/gPRnVT749S" data-te-nav-link-ref>
                    <a href="" className="flex items-center">
                        <img src="ZombieHand.svg" className="h-8 mr-3 rounded-full" alt="" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-white font-blackops">Revolution</span>
                    </a>
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative flex items-center">
              <div className="relative" data-te-dropdown-ref>
                <a className="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href="https://discord.gg/gPRnVT749S" id="dropdownMenuButton1" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                  <span className="[&>svg]:w-5" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16" >
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                    </svg>
                  </span>
                </a>
                <ul className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>
                  <li>
                    <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref>Action</a>
                  </li>
                  <li>
                    <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref>Another action</a>
                  </li>
                  <li>
                    <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref>Something else here</a>
                  </li>
                </ul>
              </div>
              <div className="relative" data-te-dropdown-ref>
                <a className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" href="#" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                </a>
                <ul className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                  <li>
                    <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref>Action</a>
                  </li>
                  <li>
                    <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref>Another action</a>
                  </li>
                  <li>
                    <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref>Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative flex items-center justify-center py-16 bg-gray-50 sm:py-24 lg:py-32 mb-16">
          <div className="blur-background absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-neutral-700 dark:to-neutral-800" aria-hidden="true"></div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-lg text-center max-w-4xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <span className="block mb-6">Support The Server</span>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-white">
                  Thank you
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg" src="revolution-logo.png" alt="" />
                <a href="https://buy.stripe.com/test_3cs2aA5vr5ud0k8fYY">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  VIP1
                </h5>
                <h5 className="font-bold mb-4 text-base text-neutral-600 dark:text-neutral-200" >
                  Price: £5.00
                </h5> 
                <a className=" static bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 text-base text-neutral-600 dark:text-neutral-200" href="https://buy.stripe.com/test_3cs2aA5vr5ud0k8fYY">             
                  <button className='p-2'>
                      Buy Now
                  </button>
                </a>   
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    A great adventure is ahead of us! Get ready for a fascinating journey into the world of web design 🚀
                  </p>
              </div>
            </div>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg" src="revolution-logo.png" alt=""  />
                <a href="https://buy.stripe.com/test_3cs2aA5vr5ud0k8fYY">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  VIP2
                </h5>
                <h5 className="font-bold mb-4 text-base text-neutral-600 dark:text-neutral-200" >
                  Price: £15.00
                </h5> 
                <a className=" static bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 text-base text-neutral-600 dark:text-neutral-200" href="https://buy.stripe.com/test_3cs2aA5vr5ud0k8fYY">             
                  <button className='p-2'>
                      Buy Now
                  </button>
                </a>   
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    A great adventure is ahead of us! Get ready for a fascinating journey into the world of web design 🚀
                  </p>
              </div>
            </div>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg" src="revolution-logo.png" alt="" />
                <a href="https://buy.stripe.com/test_3cs2aA5vr5ud0k8fYY">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  VIP3
                </h5>
                <h5 className="font-bold mb-4 text-base text-neutral-600 dark:text-neutral-200" >
                  Price: £25.00
                </h5> 
                <a className=" static bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 text-base text-neutral-600 dark:text-neutral-200" href="https://buy.stripe.com/test_3cs2aA5vr5ud0k8fYY">             
                  <button className='p-2'>
                      Buy Now
                  </button>
                </a>   
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    A great adventure is ahead of us! Get ready for a fascinating journey into the world of web design 🚀
                  </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

          <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
            <span>© 2023 Copyright:</span>
            <a className="font-semibold text-neutral-600 dark:text-neutral-400" href="https://tailwind-elements.com/">Revolution</a>
          </div>
        </footer>
      </main>
    </div>
  );
}