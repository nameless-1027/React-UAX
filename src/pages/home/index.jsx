import React from "react";

import { Banner } from "../../components/layout/Banner";
import { Globe } from "../../components/layout/globe";
import { Wallet } from "../../components/layout/wallet";
import { WhatIs } from "../../components/layout/whatIs";
import { Offering } from "../../components/layout/offering";
import { Usecase } from "../../components/layout/usecase";
import { Glance } from "../../components/layout/glance";
import { FAQ } from "../../components/layout/FAQ";
import { Join } from "../../components/layout/join";
import { Network } from "../../components/layout/network";
import { Partner } from "../../components/layout/partner";

import '../../assets/styles/home.css';


export const Home = () => {
    return (
        <>
            <Banner />
            <Globe />
            <Wallet />
            <WhatIs />
            <Offering />
            <Network />
            <Usecase />
            <Glance />
            <FAQ />
            < Partner />
            <Join type={true} />
        </>

    );
};
