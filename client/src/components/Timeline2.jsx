import React from "react";

function Timeline2() {
  return (
    
//     <ol class="ml-4 relative border-l border-yellow-300 dark:border-black-400">                  
//     <li class="mb-10 ml-4">
//         <div class="absolute w-3 h-3 bg-red-600  mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
//         {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
//         <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
//         <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
//         <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700  focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-yellow-800 dark:text-yellow-400 dark:border-yellow-600 dark:hover:text-white dark:hover:bg-yellow-700 dark:focus:ring-yellow-700">Learn more 
//         <s class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//   </s></a>
//     </li>
//     <li class="mb-10 ml-4">
//         <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
//         <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
//         <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
//         <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
//     </li>
//     <li class="ml-4">
//         <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
//         <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
//         <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
//         <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
//     </li>
// </ol>

<ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
</ol>


    // <div className=" bg-yellow-400 text-white h-full w-52">
    //   <div className="side-btn flex gap-4 hover:bg-white">
    //     <img src={Stdudent} alt="hi" className="w-8 h-8"/>
    //     <Link className="" to="/">
    //       SearchStudent
    //     </Link>
    //   </div>
    //   <div className="side-btn flex gap-4">
    //     <img src={Room} alt="hi" className="w-8 h-8"/>
    //     <Link className="" to="/">
    //       Room
    //     </Link>
    //   </div>
    //   <div className="side-btn flex gap-4">
    //     <img src={Birthday} alt="hi" className="w-8 h-8"/>
    //     <Link className="" to="/">
    //       Birthday
    //     </Link>
    //   </div>
    //   <div className="side-btn flex gap-4">
    //     <img src={Fees} alt="hi" className="w-8 h-8"/>
    //     <Link className="" to="/">
    //       Fees
    //     </Link>
    //   </div>
    //   <div className="flex">
    //     <div className="side-btn gap-4">
    //       <div className="">
    //         <img src="" alt="x" />
    //       </div>
    //       <Link to="/">SearchSt</Link>
    //     </div>
    //   </div>

    //   <div className="flex gap-2">
    //     <div className="side-btn flex gap-4" to="/">
    //       <div className="">
    //         <img src="" alt="x" />
    //       </div>
    //       <Link>Roo</Link>
    //     </div>
    //   </div>

      
    //     <div className="side-btn flex gap-4" to="/">
    //       <div className="">
    //         <img src="" alt="x" />
    //       </div>
    //       <Link>Birth</Link>
    //     </div>
      

    //   <div className="flex gap-2">
    //     <div className="side-btn flex gap-4" to="/">
    //       <div className="">
    //         <img src="" alt="x" />
    //       </div>
    //       <Link>F</Link>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Timeline2;
