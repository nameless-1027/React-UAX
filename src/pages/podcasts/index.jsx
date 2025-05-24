import React from 'react';

import { Heading } from '../../components/layout/heading';
import { Episode } from '../../components/layout/episode';
import { SomeContent } from '../../components/layout/someContent';
import { Join } from '../../components/layout/join';
import { EnterEmail } from '../../components/layout/enterEmail';

export const Podcasts = () => {
    return (
        <>
            <Heading type={2} />
            <Episode />
            <SomeContent />
            <Join type={false} />
            <EnterEmail />
        </>
    )
}