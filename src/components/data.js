import { steps } from "framer-motion";

export const datas = {
    glance: [
        {
            label: "Marketing",
            value: "15%"
        },
        {
            label: "Presale",
            value: "35%"
        },
        {
            label: "Airdrops",
            value: "25%"
        },
        {
            label: "Rewards",
            value: "20%"
        },
        {
            label: "Dev-Team",
            value: "5%"
        },
        {
            label: "Legal",
            value: "5%"
        }
    ]
    , global: [
        {
            src: "https://images.uaxdlts.com/uax-landing/assets/images/icon/latest%20blocks.svg",
            alt: "Latest Blocks",
            title: "Latest Blocks",
            value: "3357"
        },
        {
            src: "https://images.uaxdlts.com/uax-landing/assets/images/icon/total%20nodes.svg",
            alt: "Total Nodes",
            title: "Total Nodes",
            value: "3"
        },
        {
            src: "https://images.uaxdlts.com/uax-landing/assets/images/icon/avg%20fees.svg",
            alt: "Avg Fees",
            title: "Avg Fees",
            value: "212 Bandwidth"
        },
        {
            src: "https://images.uaxdlts.com/uax-landing/assets/images/icon/tps.svg",
            alt: "Txn/Second",
            title: "Txn/Second",
            value: "2000+"
        }
    ],
    network: [
        {
            location: "up",
            title: "Web3 Tools To Gear Up UAX Potential",
            content: "Feel and experience the ultimate power of Web3 with the UAX.NETWORK."
        },
        {
            location: "left",
            title: "Introducing UAX The Gaming Leaders",
            content: "Own with pride—UAX.NETWORK secures true asset ownership via blockchain for seamless gaming."
        },
        {
            location: "right",
            title: "Decentralized Applications (Dapps) On UAX.NETWORK",
            content: "Using the UAX.NETWORK one has the option of scalability along with agility."
        },
        {
            location: "bottom",
            title: "Leading Ecosystem For Gaming And Nfts",
            content: "UAX revolutionizes gaming with seamless creator collaboration and digital collectibles."
        }
    ],
    offering: [
        {
            type: "wallet",
            title: "UAXWALLET",
            content: "Take full control of your digital assets with the UAX wallet.",
        },
        {
            type: "scan",
            title: "UAXSCAN",
            content: "UAX Blockchain Network transaction records in a second with UAX scan.",
        },
        {
            type: "bridge",
            title: "UAXBRIDGE",
            content: "Do Cross-chain blockchain transactions across your assets using UAX Bridge.",
        },
        {
            type: "nft",
            title: "UAXNFT",
            content: "Creating, collecting, and trading was never so easy, thanks to UAX NFT Marketplace.",
        }
    ],
    usecase: [
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
    ],
    heading: [
        {
            title:
                <h1 className="text-center text-[50px] font-semibold mb-4">
                    Metrices
                    <span className="text-[#9B07B3]"> Portal</span>
                </h1>,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
        }
    ],
    times: [
        {
            head: 'Block Time',
            Nr: '2.174',
            unit: 'Sec'
        },
        {
            head: 'Transactions per second',
            Nr: '10.7',
            unit: 'Sec'
        },
        {
            head: 'Total Transactions',
            Nr: '3,023,729',
            unit: 'txns'
        },
        {
            head: 'Total Consensus Stake',
            Nr: '1.57B',
            unit: 'Uaxn'
        },
    ],
    chartState: [
        'Total Accounts', 'Transactions Volume'
    ],
    chartData: [
        ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        {
            datasets: [
                [
                    {
                        label: "1D",
                        data: [20, 30, 40, 10, 60, 30, 70, 80, 20, 20, 40, 60, 70]
                    }
                ],
                [
                    {
                        label: "7D",
                        data: [30, 80, 30, 10, 60, 20, 30, 20, 20, 40, 70, 60, 70]
                    }
                ],
                [
                    {
                        label: "1W",
                        data: [70, 80, 20, 30, 20, 20, 60, 30, 40, 40, 10, 60, 70]
                    }
                ],
                [
                    {
                        label: "1M",
                        data: [40, 10, 60, 20, 20, 40, 30, 20, 30, 70, 80, 60, 70]
                    }
                ],
            ],
            options: (theme) => ({
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: theme === 'dark' ? '#949494' : '#000',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        // type: 'linear',
                        min: 0,
                        max: 100,
                        ticks: {
                            color: theme === 'dark' ? '#949494' : '#000',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            color: false,
                        },
                    },
                }
            })
        },
        {
            datasets: [
                [
                    {
                        label: "1D",
                        data: [200, 300, 400, 100, 600, 300, 700, 800, 200, 200, 400, 600, 700]
                    }
                ],
                [
                    {
                        label: "7D",
                        data: [300, 800, 300, 100, 600, 200, 300, 200, 200, 400, 700, 600, 700]
                    }
                ],
                [
                    {
                        label: "1W",
                        data: [700, 800, 200, 300, 200, 200, 600, 300, 400, 400, 100, 600, 700]
                    }
                ],
                [
                    {
                        label: "1M",
                        data: [400, 100, 600, 200, 200, 400, 300, 200, 300, 700, 800, 600, 700]
                    }
                ],
            ],
            options: (theme) => ({
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: theme === 'dark' ? '#949494' : '#000',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        // type: 'linear',
                        min: 0,
                        max: 1000,
                        ticks: {
                            color: theme === 'dark' ? '#949494' : '#000',
                            font: {
                                size: 10
                            },
                            stepSize: 200
                        },
                        grid: {
                            color: false,
                        },
                    },
                }
            })
        }
    ]
}