import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { ThemeContext } from '../../../../context/themeContext';

import { datas } from '../../../data';

export const LineChart = ({ action }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Line
            width={10}
            height={2}
            data={
                {
                    labels: datas.chartData[0],
                    datasets: [
                        {
                            ...datas.chartData[1].datasets[action][0],
                            borderColor: '#CE2A96',
                            backgroundColor: '#CE2A96',
                            borderWidth: 1,
                            tension: 0.1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                        }
                    ]
                }
            }
            options={{ ...datas.chartData[1].options(theme) }}
        />
    )
}