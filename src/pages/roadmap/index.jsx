import React from "react";

import { Allow } from "../../components/layout/allow";
import { RoadmapMail } from "../../components/layout/roadmapmain";
import { Join } from "../../components/layout/join";

export const Roadmap = () => {
    return (
        <>
            <Allow />
            <RoadmapMail />
            <Join type={true} />
        </>
    );
};
