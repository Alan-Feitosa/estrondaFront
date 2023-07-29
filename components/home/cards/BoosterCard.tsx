import * as React from "react"

export default function BoosterCard(){
    return(
        <div className="p-10">  
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Boost Atual</div>
                <p className="text-gray-700 text-base">
                    Dos 3000 aos 5000 MMR
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Recibo</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Suporte ao Boost</span>
            </div>
            </div>
        </div>
    )
}


