import React from 'react'

export default function Patides() {
    return (
        <div className='flex justify-items-center m-4'>
            <div className="relative mt-3">
                <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-200 dark:text-neutral-700" strokeWidth="1" strokeDasharray="75 100" strokeLinecap="round"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-500 dark:text-green-500" strokeWidth="2" strokeDasharray="56.25 100" strokeLinecap="round"></circle>
                </svg>
                <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-4xl font-bold text-green-600 dark:text-green-500">75</span>
                    <span className="text-green-600 dark:text-green-500 block">Score</span>
                </div>
            </div>

            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">ATS</label>
                    <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="30"/>
                        <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe! </span>under control</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">BTS</label>
                    <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="75"/>
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">risk!</span> over the limit!</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">CTS</label>
                    <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="75"/>
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">risk!</span> over the limit!</p>
                </div>
            </form>

        </div>
    )
}
