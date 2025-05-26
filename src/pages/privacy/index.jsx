import React from 'react';

import { Heading } from '../../components/layout/heading';
import { AboutPrivacy } from '../../components/layout/aboutPrivacy';
import { Involve } from '../../components/layout/involve';

export const Privacy = () => {
    return (
        <>
            <Heading type={9} />
            <AboutPrivacy />
            <Involve state={'privacyInvolve'} />
        </>
    )
}