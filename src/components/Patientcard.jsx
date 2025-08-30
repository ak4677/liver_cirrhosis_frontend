import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PatientContext from '../context/info/PatientContext';
import { useState } from 'react';

export default function Patientcard(props) {
    const navigator = useNavigate()
    const [hoveredSegment, setHoveredSegment] = useState(null); // 'safe', 'ok', 'danger'


    return (
        <div onClick={() => navigator(`/Patides/${props.patient._id}`)}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                {/* Fallback values */}
                {(() => {
                    const prediction = props.patient.prediction ?? 0;
                    const risks = props.patient.risk_percentages ?? [0, 0, 0];
                    const circumference = Math.PI * 32; // 2 * pi * r, where r = 16

                    const safeDashArray = `${(risks[0] / 100) * circumference / 2} ${circumference}`;
                    const okDashArray = `${(risks[1] / 100) * circumference / 2} ${circumference}`;
                    const dangerDashArray = `${(risks[2] / 100) * circumference / 2} ${circumference}`;

                    const okDashOffset = `-${(risks[0] / 100) * circumference / 2}`;
                    const dangerDashOffset = `-${((risks[0] + risks[1]) / 100) * circumference / 2}`;
                    return (
                        <>
                            {/* Prediction Heading */}
                            <div className="mb-4 text-center">
                                <h2
                                    className={`text-xl font-bold ${risks.every(r => r === 0)
                                        ? "text-gray-400" // when no data, show gray/white
                                        : prediction === 0
                                            ? "text-green-600"
                                            : prediction === 1
                                                ? "text-yellow-600"
                                                : "text-red-600"
                                        }`}
                                >
                                    {risks.every(r => r === 0)
                                        ? "No Data"
                                        : prediction === 0
                                            ? "Safe (L)"
                                            : prediction === 1
                                                ? "Ok (CL)"
                                                : "Danger (D)"}
                                </h2>
                            </div>

                            {/* Semicircular Risk Percentage Bar */}
                            <div className="relative size-40 mx-auto mb-4">
                                <svg
                                    className="size-full rotate-180"
                                    viewBox="0 0 36 36"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Background semicircle */}
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        className="stroke-current text-gray-200 dark:text-neutral-700"
                                        strokeWidth="3"
                                        strokeDasharray="50 100" // This creates a half-circle dash effect
                                        strokeLinecap="round"
                                    />

                                    {risks.every(r => r === 0) ? (
                                        // Only background if all risks are zero
                                        null
                                    ) : (
                                        <>
                                            {/* Safe (Green) segment */}
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                className="stroke-current text-green-500 hover:scale-102 transition-transform duration-200"
                                                strokeWidth="3"
                                                strokeDasharray={safeDashArray}
                                                strokeLinecap="round"
                                                onMouseEnter={() => setHoveredSegment('safe')}
                                                onMouseLeave={() => setHoveredSegment(null)}
                                            />

                                            {/* Ok (Yellow) segment */}
                                            {risks[1] > 0 && (
                                                <circle
                                                    cx="18"
                                                    cy="18"
                                                    r="16"
                                                    fill="none"
                                                    className="stroke-current text-yellow-500 hover:scale-102 transition-transform duration-200"
                                                    strokeWidth="3"
                                                    strokeDasharray={okDashArray}
                                                    strokeLinecap="round"
                                                    strokeDashoffset={okDashOffset}
                                                    onMouseEnter={() => setHoveredSegment('ok')}
                                                    onMouseLeave={() => setHoveredSegment(null)}
                                                />
                                            )}

                                            {/* Danger (Red) segment */}
                                            {risks[2] > 0 && (
                                                <circle
                                                    cx="18"
                                                    cy="18"
                                                    r="16"
                                                    fill="none"
                                                    className="stroke-current text-red-500 hover:scale-102 transition-transform duration-200"
                                                    strokeWidth="3"
                                                    strokeDasharray={dangerDashArray}
                                                    strokeLinecap="round"
                                                    strokeDashoffset={dangerDashOffset}
                                                    onMouseEnter={() => setHoveredSegment('danger')}
                                                    onMouseLeave={() => setHoveredSegment(null)}
                                                />
                                            )}
                                        </>
                                    )}
                                </svg>

                                {/* Percentage Labels */}
                                {!risks.every(r => r === 0) && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                        {hoveredSegment === 'safe' && (
                                            <span className="text-xl font-bold text-green-600 dark:text-green-500">
                                                {risks[0]}%
                                            </span>
                                        )}
                                        {hoveredSegment === 'ok' && (
                                            <span className="text-xl font-bold text-yellow-600 dark:text-yellow-500">
                                                {risks[1]}%
                                            </span>
                                        )}
                                        {hoveredSegment === 'danger' && (
                                            <span className="text-xl font-bold text-red-600 dark:text-red-500">
                                                {risks[2]}%
                                            </span>
                                        )}
                                        {!hoveredSegment && ( // Show all if nothing is hovered
                                            <>
                                                <h2
                                                    className={`text-xl font-bold ${risks.every(r => r === 0)
                                                        ? "text-gray-400" // when no data, show gray/white
                                                        : prediction === 0
                                                            ? "text-green-600"
                                                            : prediction === 1
                                                                ? "text-yellow-600"
                                                                : "text-red-600"
                                                        }`}
                                                >
                                                    {risks.every(r => r === 0)
                                                        ? "No Data"
                                                        : prediction === 0
                                                            ? <span className="text-xl font-bold text-green-600 dark:text-green-500">
                                                                {risks[0]}%
                                                            </span>
                                                            : prediction === 1
                                                                ? <span className="text-xl font-bold text-yellow-600 dark:text-yellow-500">
                                                                    {risks[1]}%
                                                                </span>
                                                                : <span className="text-xl font-bold text-red-600 dark:text-red-500">
                                                                    {risks[2]}%
                                                                </span>}
                                                </h2>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </>
                    );
                })()}

                {/* Patient Info Card */}
                {/* <div className="relative size-40 mx-auto mb-4">
                    <svg
                        className="size-full rotate-180"
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-orange-100 dark:text-neutral-700"
                            strokeWidth="3"
                            strokeDasharray="50 100"
                            strokeLinecap="round"
                        ></circle>
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-orange-600 dark:text-orange-500"
                            strokeWidth="1"
                            strokeDasharray="25 100"
                            strokeLinecap="round"
                        ></circle>
                    </svg>
                    <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                        <span className="text-2xl font-bold text-orange-600 dark:text-orange-500">
                            {props.patient.name?.Age ?? "--"}
                        </span>
                        <span className="text-xs text-orange-600 dark:text-orange-500 block">
                            {props.patient.Age?.name ?? "Unknown"}
                        </span>
                    </div>
                </div> */}

                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {props.patient.name}
                </h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Go to this step by step guideline process on how to certify for your weekly
                    benefits:
                </p>
            </div>
        </div>

    )
}
