import React from 'react';

import { Heading } from '../../components/layout/heading';
import { AboutCookie } from '../../components/layout/aboutCookie';
import { Involve } from '../../components/layout/involve';

export const Cookie = () => {
    return (
        <>
            <Heading type={11} />
            <AboutCookie />
            <Involve state={'cookieInvolve'} />
        </>
    )
}