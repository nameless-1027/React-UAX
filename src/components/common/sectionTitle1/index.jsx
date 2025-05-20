import React from 'react';

const datas = [
    {
        image: "media/lines/core1.png",
        title: <h1>
            <span className='text-[#7D4689]'>Why</span><br />
            <span className='text-[#CE1FEA]'>UAX </span>
            is a<br />Game
            <span className='text-[#B19DB9]'> Changer</span>
        </h1>,
        content: <p className='text-[20px]'>
            Monitors every action, message, and individual-even
            <br />
            <span className='text-white'>on browsers</span>&nbsp;designed for privacy.
        </p>
    }, {
        image: "media/lines/core2.svg",
        title: <h1> <span className='text-[#7D4689]'>Core</span><br />
            Offerings of<br /><span className='text-[#CE1FEA]'>UAX.Network</span>
        </h1>,
        content: <p className='text-[20px]'>
            Drives Web3 innovation: providing secure wallets,
            real-time monitoring, seamless cross-chain connectivity, and NFTs.
        </p>
    },
    {
        image: "media/glance/Group.png",
        title: <h1>
            <span className='text-[#CE1FEA]'>Tokenomics </span>
            at a <br /><span><b className='text-[#7D4689]'>Glance</b></span>
        </h1>,
        content: <p className='text-[16px] text-[#BABABA] max-w-[460px]'>
            Revenue Buybacks, Token Burns &amp;
            Limited supply.
            Use Cases: Utility Token - <span className='text-white'>UAX</span> is Required To Pay For
            Conversions, Customer
            Events &amp;
            Advanced Analytics On The UAX Platform.
        </p>
    }
]

export const SectionTitle1 = ({ type }) => {
    return (
        <>
            <div className='w-[50%] flex items-center px-[15px]'>
                <img src={datas[type - 1].image} alt="core1" className='mr-[40px]' style={{ width: "14px", height: "180px" }} />
                {
                    datas[type - 1].title
                }
            </div>
            <div className='w-[50%] flex flex-col items-end justify-center px-[15px]'>
                <div>
                    {
                        type === 3 ?
                            <h6 className='text-[20px] text-white font-bold'>Deflationary Mechanisms:</h6>
                            : <img src="media/lines/build.svg" alt="build" />
                    }
                    {
                        datas[type - 1].content
                    }
                </div>
            </div>
        </>
    )
}