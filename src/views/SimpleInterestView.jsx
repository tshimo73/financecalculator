import Footer from "../components/Footer";
import Header from "../components/Header";
import { SimpleInterest } from "../utils/SimpleInterest.js";

import React, { useEffect, useState } from 'react'

export default function SimpleInterestView() {
    const [principal, setPrincipal] = useState(5000)
    const [interest, setInterest] = useState(5)
    const [years, setYears] = useState(1)

    const si = new SimpleInterest(principal, interest, years)


    return (
        <>
            <Header />
             <h1 className="centre text-4xl">Simple Interest</h1>
            <section className="min-h-screen col p-8 font-poppins gap-4">
               
                <div className="grid grid-cols-2 gap-4">

                    <div className="col-span-2 gap-4">
                        <div>
                            <label htmlFor="">Principle Amount</label>
                            <div className="w-full flex">
                                <p className="p-4 bg-green-300 text-green-600 w-1/4 centre ring ring-green-600">ZAR</p>
                                <input className="p-4 w-3/4 outline-none ring ring-blue-600 focus:ring-purple-500 hover:ring-purple-500" type="number" defaultValue={principal} onChange={e => setPrincipal(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 gap-4">
                        <div>
                            <label htmlFor="">Interest Rate</label>
                            <div className="w-full flex">
                                <p className="p-4 bg-green-300 text-green-600 w-1/4 centre ring ring-green-600">%</p>
                                <input className="p-4 w-3/4 outline-none ring ring-blue-600 focus:ring-purple-500 hover:ring-purple-500" type="number" defaultValue={interest} onChange={e => setInterest(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 gap-4">
                        <div >
                            <label htmlFor="">Years</label>
                            <div className="w-full flex">
                                <p className="p-4 bg-green-300 text-green-600 w-1/4 centre ring ring-green-600">Annual</p>
                                <input className="p-4 w-3/4 outline-none ring ring-blue-600 focus:ring-purple-500 hover:ring-purple-500" type="number" defaultValue={years} onChange={e => setYears(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div> <br />
                <div className="text-right w-full text-2xl">
                    <div className="between">
                        <p className="text-gray-600">Interest Paid:</p>  
                        <p className="text-xl text-blue-500">R{si.interest()}</p>
                    </div>

                    <div className="between">
                        <p className="text-gray-600">Total: </p>
                        <p className="text-blue-500">R{si.calculate()}</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
