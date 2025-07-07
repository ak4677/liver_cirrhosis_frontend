import React from 'react'

export default function AdmissionCard(props) {
    return (
        <div >
            {/* <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="relative size-40">
                    <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                        <span className="text-2xl font-bold text-orange-600 dark:text-orange-500">{props.assistante.doctor_id.name}</span>
                        <span className="text-xs text-orange-600 dark:text-orange-500 block">{props.assistante.patient_id.name}</span>
                    </div>
                </div>
                <a >
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            </div> */}

            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.assistante.doctor_id.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.assistante.patient_id.name}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.assistante.patient_id.Age}</p>
                    </div>
            </a>

        </div>
    )
}
