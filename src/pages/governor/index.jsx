import React from 'react';

import { Heading } from '../../components/layout/heading';
import { AboutGovernor } from '../../components/layout/aboutGovernor';
import { Involve } from '../../components/layout/involve';

export const Governor = () => {
    return (
        <>
            <Heading type={7} />
            <AboutGovernor />
            <Involve />
        </>
    )
}