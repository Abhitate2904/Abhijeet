import React from 'react'
import { Link } from 'react-router-dom'
 

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-r from-orange-400 to-red-500 p-4 text-white border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                        <img src="/Logo1.jpg" alt="logo" style={{ height: "100%", width: "100%" }} />
                            <div>
                                <p>
                                    &copy; Copyright 2025. All Rights Reserved by Physciswala Satara.
                                </p>
                            </div>
                        </div>
                    </div>
                     
                </div>
            </div>
        </section>
  )
}

export default Footer