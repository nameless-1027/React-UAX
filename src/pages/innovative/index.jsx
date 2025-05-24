import React from 'react';

import { Heading } from '../../components/layout/heading';
import { Explore } from '../../components/layout/explore';
import { SomeContent } from '../../components/layout/someContent';
import { Join } from '../../components/layout/join';
import { EnterEmail } from '../../components/layout/enterEmail';

export const Innovative = () => {
    return (
        <>
            <Heading type={3} />
            <Explore />
            <SomeContent />
            <Join />
            <EnterEmail />
        </>
    )
}