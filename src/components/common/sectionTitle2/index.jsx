import React from 'react';

const datas = [
    {
        title: <h1 className='text-center'>
            <span className='text-[#7D4689]'>What</span> is<br />
            <span className='text-[#CE1FEA]'>UAX.Network</span>
        </h1>,
        content: <p className="max-w-[625px] text-center mx-auto">
            <span className="text-white">UAX.</span> The
            network is a
            cutting-edge <span className="text-white">base-layer
                blockchain</span>
            ecosystem designed to connect <span className="text-white">digital assets and real-world</span>
            applications. It tokenizes tangible
            items via Artificial Intelligence Smart Integration (AISI).
        </p>,
    },
    {
        title: <h1 className='text-center md:mt-[30px] mt-[16px] md:mb-[16px] mb-[10px] md:text-[45px] text-[22px] font-bold'>
            Frequently
            <span className="text-[#7D4689]"> Asked </span>
            <span className="text-[#CE1FEA]">
                Questions </span>
        </h1>,
        content: <p className="md:text-[16px] text-[13px] text-center text-[#BABABA] mt-0">
            For our beloved community, we have prepared the
            most frequently asked questions by the users.
        </p>

    },
    {
        title: <h1 className='text-center mt-[16px] mb-[10px] text-[30px] sm:text-[45px] font-bold'>
            Join
            <span className="text-[#7D4689]"> Our </span><span className="text-[#CE1FEA]">
                Community</span>
        </h1>,
        content: <p className="text-[13px] sm:text-[16px] text-[#BABABA] sm:mb-[50px] mb-[36px] text-center font-normal">Join our vibrant community and
            explore
            the endless
            possibilities of UAX together. Engage with like-minded individuals, share
            insights, and shape the future of blockchain gaming. Experience the power of collaboration
            in
            our dynamic ecosystem.
        </p>
    },
    {
        title: <h1 className='text-center text-[32px]'>
            <span className='text-[#7D4689]'>Why </span>
            <span className='text-[#CE1FEA]'>UAX </span> is a <br />
            Game
            <span className='text-[#B19DB9]'> Changer</span>
        </h1>,
        content: <p className='text-[16px] text-center max-w-[460px] text-[#BABABA] line-height-[1.45]'>
            Built To Track Every Click, Every
            Conversation &amp; Every
            User-Even On
            <span className='text-white'> Privacy</span>-Conscious Browsers.
        </p>
    }
]

export const SectionTitle2 = ({ type }) => {
    return (
        <div className='section-title2 flex flex-col items-center'>
            {
                type !== 1 &&
                (type === 4 ?
                    <img
                        src="media/lines/line.png"
                        alt="Line"
                        className='px-[15px] h-[6px] mb-[20px]'
                    /> :
                    (type === 2 || type === 3) ?
                        <img
                            src="media/lines/dot.png"
                            alt="dot"
                            className='w-[169px] h-[8px]'
                        /> :
                        <img
                            src="media/lines/build.svg"
                            alt="build"
                        />)
            }
            {
                datas[type - 1].title
            }
            {
                datas[type - 1].content
            }
        </div>
    )
}
