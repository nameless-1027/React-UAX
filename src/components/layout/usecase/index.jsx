import React, { useState } from 'react';

const details = [
    {
        title: 'NFTs On UAX',
        heading: "UAX NFTs revolutionize ownership and value exchange in the digital realm.",
        name: "@UAX-NFT",
        description: 'Mint your unique digital assets seamlessly on UAX, revolutionizing the creation and ownership of NFTs. Experience the future of digital collectibles with UAX\'s user- friendly platform.',
    },
    {
        title: 'UAX-WEB3.0',
        heading: "UAX pioneers the evolution of Web 3.0 with decentralized solutions for the next generation of internet applications.",
        name: "@UAX-WEB3.0",
        description: "UAX leads the charge in Web3.0, offering decentralized solutions that redefine the internet landscape. Experience the future of online interactions with UAX's cutting-edge platform.",
    },
    {
        title: 'Gaming On UAX',
        heading: "Experience groundbreaking gaming experiences powered by UAX's innovative blockchain technology.",
        name: "@UAX-Gaming",
        description: "Elevate your gaming experience with UAX's cutting-edge blockchain technology, unlocking new levels of immersion and innovation. Join the future of gaming with UAX's decentralized ecosystem.",
    },
    {
        title: 'UAX dapps',
        heading: "Explore the limitless potential of decentralized applications (dApps) on UAX, where innovation meets seamless integration for transformative digital experiences.",
        name: "@UAX dapps",
        description: "Discover the boundless possibilities of dApps on UAX, where innovation meets decentralized solutions for an immersive digital future. Join the UAX ecosystem to experience the next frontier in decentralized application development.",
    },
    {
        title: 'UAX stake',
        heading: "Stake your claim in the future of decentralized finance with UAX, unlocking opportunities for growth and participation in a dynamic ecosystem.",
        name: "@UAX stake",
        description: "Maximize your potential with UAX stake, empowering participation and growth within a vibrant decentralized network. Secure your future in the evolving landscape of decentralized finance with UAX.",
    },

]

export const Usecase = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col container mx-auto sm:px-[130px] px-[48px] sm:pt-[40px] pt-[20px] md:pb-[160px] pb-[60px] usecase'>
            <h1 className='text-center sm:text-[45px] text-[32px] font-bold sm:mt-[40px] mt-[20px] sm:mb-[16px] mb-[10px]'>
                <span className='text-[#CE1FEA]'>Uaxnetwork </span>
                Usecases
            </h1>
            <ul className="flex flex-wrap menu-tab">
                <li className={`${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
                    <div className="button">
                        <p className="fs-14 text-white m-0 text-center fw-400">
                            NFTs on UAX
                        </p>
                    </div>
                </li>
                <li className={`${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
                    <div className="button">
                        <p className="fs-14 text-white m-0 text-center fw-400">UAX-WEB3.0</p>
                    </div>
                </li>
                <li className={`${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
                    <div className="button">
                        <p className="fs-14 text-white m-0 text-center fw-400">Gaming On UAX</p>
                    </div>
                </li>
                <li className={`${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
                    <div className="button">
                        <p className="fs-14 text-white m-0 text-center fw-400">UAX dapps</p>
                    </div>
                </li>
                <li className={`${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>
                    <div className="button">
                        <p className="fs-14 text-white m-0 text-center fw-400">UAX stake</p>
                    </div>
                </li>
            </ul>
            <div className="content-inner" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="content">
                    <div className="block-text">
                        <h3 className="heading">{details[activeTab].title}</h3>
                        <p>{details[activeTab].heading}</p>
                    </div>
                    <div className="info">
                        <span className="icon-union-01"></span>
                        <span className="icon-union-02"></span>
                        <span className="icon-union-03"></span>
                        <span className="icon-union-04"></span>
                        <h4 className="name">{details[activeTab].name}</h4>
                        <p className="text">{details[activeTab].description}.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}