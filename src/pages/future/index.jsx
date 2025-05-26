import React from 'react';

import { Heading } from '../../components/layout/heading';
import { SomeContent } from '../../components/layout/someContent';
import { Solving } from '../../components/layout/solving';
import { Meet } from '../../components/layout/meet';
import { Updates } from '../../components/layout/updates';
import { Join } from '../../components/layout/join';
import { EnterEmail } from '../../components/layout/enterEmail';

export const Future = () => {
    return (
        <>
            <Heading type={6} />
            <SomeContent type={true} />
            <Solving />
            <Meet />
            <Updates />
            <SomeContent />
            <Join />
            <EnterEmail />
        </>
    )
}