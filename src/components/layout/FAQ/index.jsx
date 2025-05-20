import React, { useState } from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        console.log(activeIndex);
    };

    return (
        <div className='flex flex-col container mx-auto px-[130px] py-[40px]'>
            <SectionTitle2 type={2} />
            <div className="max-w-[926px] mt-[40px] w-full mx-auto content-inner flat-accordion">
                <div
                    className="flat-toggle"
                    id={activeIndex === 0 ? 'active' : ''}
                    onClick={() => toggleContent(0)}
                >
                    <h5 className="toggle-title">What is UAXnetwork?</h5>
                    <p className={`toggle-content ${activeIndex === 0 ? 'block' : 'hidden'}`}>
                        UAX is an ecosystem built to bridge the digital and physical worlds
                        through
                        blockchain. It helps people create, manage, and exchange real value —
                        from
                        digital assets to NFTs- while staying in full control.
                    </p>
                </div>

                <div
                    className="flat-toggle"
                    id={activeIndex === 1 ? 'active' : ''}
                    onClick={() => toggleContent(1)}
                >
                    <h5 className="toggle-title">How does staking work on UAX.network?</h5>
                    <p className={`toggle-content ${activeIndex === 1 ? 'block' : 'hidden'}`}>
                        Staking on UAXnetwork is pretty simple, as you need to stake $500 worth
                        of UAXN coins and lock them for at least 1 year to gain trust. It's a
                        way to support the network and get something back without actively
                        trading. In this case, you act as a validator. The longer you validate
                        coins, the better the returns. And yeah, it’s all handled securely in
                        the background.

                    </p>
                </div>
                <div
                    className="flat-toggle"
                    id={activeIndex === 2 ? 'active' : ''}
                    onClick={() => toggleContent(2)}
                >
                    <h5 className="toggle-title">Can I withdraw UAXN coins during staking?</h5>
                    <p className={`toggle-content ${activeIndex === 2 ? 'block' : 'hidden'}`}>
                        No, you cannot withdraw or move the coins during
                        the first year of staking as it is part of UAX's policy.NETWORK.</p>
                </div>

                <div
                    className="flat-toggle"
                    id={activeIndex === 3 ? 'active' : ''}
                    onClick={() => toggleContent(3)}
                >
                    <h5 className="toggle-title">What are the benefits of using UAXN coins?</h5>
                    <p className={`toggle-content ${activeIndex === 3 ? 'block' : 'hidden'}`}>
                        UAXN coins are your key to doing stuff inside the
                        UAX.NETWORK — from trading and staking to minting NFTs. Holding UAXN
                        gives you some perks, like lower fees, early access to new features, and
                        participation in UAX's governance decisions.</p>
                </div>



                <div
                    className="flat-toggle"
                    id={activeIndex === 4 ? 'active' : ''}
                    onClick={() => toggleContent(4)}
                >
                    <h5 className="toggle-title">How is data stored and managed on UAX?NETWORK?</h5>
                    <p className={`toggle-content ${activeIndex === 4 ? 'block' : 'hidden'}`}>
                        Everything on UAX is saved using AISI (Artificial
                        Intelligence Smart Integration) and stored in secure and
                        blockchain-optimized servers. Further, they're spread across the chains,
                        making it safe and fully transparent.</p>
                </div>

                <div
                    className="flat-toggle"
                    id={activeIndex === 5 ? 'active' : ''}
                    onClick={() => toggleContent(5)}
                >
                    <h5 className="toggle-title">What are the transaction fees on UAX.network?</h5>
                    <p className={`toggle-content ${activeIndex === 5 ? 'block' : 'hidden'}`}>Only 212 Bandwidth per transaction is the smallest
                        fee you are supposed to pay at UAX.NETWORK. This small amount is being
                        charged to help the validators and to power the network. The fees ensure
                        the blockchain is secure and the required computational power is
                        provided to the ecosystem.</p>
                </div>

            </div>
        </div>
    )
}