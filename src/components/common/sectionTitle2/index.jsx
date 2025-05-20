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
        title: <h1 className='text-center mt-[30px] mb-[16px] text-[45px] font-bold'>
            Frequently
            <span className="text-[#7D4689]"> Asked </span>
            <span className="text-[#CE1FEA]">
                Questions </span>
        </h1>,
        content: <p className="text-[16px] text-[#BABABA]">
            For our beloved community, we have prepared the
            most frequently asked questions by the users.
        </p>

    },
    {
        title: <h1 className='text-center mt-[30px] mb-[16px] text-[45px] font-bold'>
            Join
            <span className="text-[#7D4689]"> Our </span><span className="text-[#CE1FEA]">
                Community</span>
        </h1>,
        content: <p className="text-[16px] text-[#BABABA] mb-[50px] text-center font-normal">Join our vibrant community and
            explore
            the endless
            possibilities of UAX together. Engage with like-minded individuals, share
            insights, and shape the future of blockchain gaming. Experience the power of collaboration
            in
            our dynamic ecosystem.
        </p>
    }
]

export const SectionTitle2 = ({ type }) => {
    return (
        <div className='section-title2 flex flex-col items-center'>
            {
                type !== 1 && <img src="media/lines/dot.png" alt="Dot" width={169} />
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
