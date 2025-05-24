import React, { useState } from "react";

import { State } from "./state";
import { LineChart } from "./draw/line";
import { BarChart } from "./draw/bar";

import './style.css';

import {
    Chart as ChartJS,
    CategoryScale,      // ✅ Needed for x-axis category labels
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,      // ✅ Register it
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend
);


export const ChartPanel = ({ type }) => {
    const [action, setAction] = useState({
        line: 0,
        bar: 0
    });

    return (
        <div className={`w-full ${type === 2 ? 'lg:mb-[70px] mb-[24px]' : ''}`}>
            <div className='container mx-auto xl:px-[80px] px-0 portal'>
                <div className='xl:px-[70px] lg:px-[50px] px-[25px] flex flex-wrap justify-between chart-panel'>
                    <div className="w-full">
                        <State type={type} action={action} setAction={setAction} />
                        {type === 1 ?
                            <LineChart action={action.line} /> :
                            <BarChart action={action.bar} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}