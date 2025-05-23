import React from 'react';

import { Time } from '../../components/layout/time';
import { ChartPanel } from '../../components/layout/chartPanel';
import { Heading } from '../../components/layout/heading';

import '../../assets/styles/portal.css';

export const Portal = () => {
    return (
        <>
            <Heading type={1} />
            <Time />
            <ChartPanel type={1} />
            <ChartPanel type={2} />
        </>
    );
}