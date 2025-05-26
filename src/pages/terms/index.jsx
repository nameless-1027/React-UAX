import React from 'react';

import { Heading } from '../../components/layout/heading';
import { AboutTerms } from '../../components/layout/aboutTerms';
import { Involve } from '../../components/layout/involve';

export const Terms = () => {
    return (
        <>
            <Heading type={10} />
            <AboutTerms />
            <Involve state={'termList'} />
        </>
    )
}