import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { ThemeContext } from '../../../../context/themeContext';

import { datas } from '../../../data';

export const BarChart = ({ action }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Bar
            width={10}
            height={2}
            data={
                {
                    labels: datas.chartData[0],
                    datasets: [
                        {
                            ...datas.chartData[2].datasets[action][0],
                            backgroundColor: '#D164FF',
                            barThickness: 15
                        }
                    ]
                }
            }
            options={{ ...datas.chartData[2].options(theme) }}
        />
    )
}