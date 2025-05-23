import React, { useMemo } from "react";

import { datas } from "../../data";

export const State = ({ setAction, action, type }) => {
    // const [chartType, setChartType] = useState(null);
    const chartType = useMemo(() => type === 1 ? 'line' : 'bar', [action, type]);

    return (
        <div className="w-full flex justify-between items-center chart-state-field">
            <p>{datas.chartState[type - 1]}</p>
            <div className="flex justify-center py-[5px] px-[8px] sm:gap-[15px] gap-[8px] state">
                <span
                    className={action[chartType] === 0 ? 'active' : ''}
                    onClick={() => setAction(prev => ({
                        ...prev, [chartType]: 0
                    }))}
                >1D</span>
                <span
                    className={action[chartType] === 1 ? 'active' : ''}
                    onClick={() => setAction(prev => ({
                        ...prev, [chartType]: 1
                    }))}
                >7D</span>
                <span
                    className={action[chartType] === 2 ? 'active' : ''}
                    onClick={() => setAction(prev => ({
                        ...prev, [chartType]: 2
                    }))}
                >1W</span>
                <span
                    className={action[chartType] === 3 ? 'active' : ''}
                    onClick={() => setAction(prev => ({
                        ...prev, [chartType]: 3
                    }))}
                >1M</span>
            </div>
        </div>
    )
}