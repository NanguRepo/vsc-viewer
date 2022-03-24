import React from 'react'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js';

export default function home() {
    return (
        <>
            <div className="p-40 flex flex-col items-center justify-center h-screen">
                <Hero title="View your Viggo assignments faster." subtitle="Only login once, and have a look at your assignments at a glance, in less than 2 seconds." />
                <button type="button" className="text-white mt-10 text-4xl h-32 w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2" onClick={() => {window.location.href="/#/app"}}>Go to app</button>
            </div>
            <Footer />
        </>
    )
}