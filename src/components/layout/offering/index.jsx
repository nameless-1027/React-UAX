import React from 'react';
import { SectionTitle1 } from '../../common/sectionTitle1';

export const Offering = () => {

    return (
        <div className='flex flex-col justify-between items-center container mx-auto xl:px-[130px] px-[16px] py-[40px]'>
            <div className='w-full flex flex-wrap justify-between items-center'>
                <SectionTitle1 type={2} />
            </div>
            <div className='w-full flex justify-between items-center sm:pt-[40px] pt-[20px] offering flex-wrap'>
                <div className='flex lg:w-[50%] w-full px-[10px]'>
                    <div className="document-box">
                        <a href="#" className="title">
                            <img
                                src="https://images.uaxdlts.com/uax-landing/assets/images/icon/uaxwallet.png"
                                style={{ width: "20px", marginRight: "10px" }}
                            />
                            UAXWALLET
                        </a>
                        <div className="pt-[10px] content">
                            <div className="flex flex-col justify-start content-detail">
                                <div>
                                    <p className="text-start">
                                        Take full control of your digital assets with the UAX wallet.
                                    </p>
                                </div>
                                <div className="group-button">
                                    <a href="#" className="btn">
                                        Explore
                                        <i className="fa fa-long-arrow-right ml-[4px]" aria-hidden="true">
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div className="content-image">
                                <img
                                    src="./media/offering/uax-wallet.png"
                                    alt="No Wallet"
                                    width={"100%"}
                                    height={"130px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:w-[50%] w-full px-[10px]'>
                    <div className="document-box">
                        <a href="#" className="title">
                            <img
                                src="https://images.uaxdlts.com/uax-landing/assets/images/icon/uaxscan.png"
                                style={{ width: "20px", marginRight: "10px" }}
                            />
                            UAXSCAN
                        </a>
                        <div className="pt-[10px] content">
                            <div className="flex flex-col justify-start content-detail">
                                <div>
                                    <p className="text-start">
                                        UAX Blockchain Network transaction records in a second with UAX scan.
                                    </p>
                                </div>
                                <div className="group-button">
                                    <a href="#" className="btn">
                                        Explore
                                        <i className="fa fa-long-arrow-right ml-[4px]" aria-hidden="true">
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div className="content-image">
                                <img
                                    src="./media/offering/uax-scan.png"
                                    alt="No Wallet"
                                    width={"100%"}
                                    height={"130px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:w-[50%] w-full px-[10px]'>
                    <div className="document-box">
                        <a href="#" className="title">
                            <img
                                src="https://images.uaxdlts.com/uax-landing/assets/images/icon/uaxbridge.png"
                                style={{ width: "20px", marginRight: "10px" }}
                            />
                            UAXBRIDGE
                        </a>
                        <div className="pt-[10px] content">
                            <div className="flex flex-col justify-start content-detail">
                                <div>
                                    <p className="text-start">
                                        UAXBRIDGE
                                        Do Cross-chain blockchain transactions across your assets using UAX Bridge.
                                    </p>
                                </div>
                                <div className="group-button">
                                    <a href="#" className="btn">
                                        Explore
                                        <i className="fa fa-long-arrow-right ml-[4px]" aria-hidden="true">
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div className="content-image">
                                <img
                                    src="./media/offering/uax-bridge.png"
                                    alt="No Wallet"
                                    width={"100%"}
                                    height={"130px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:w-[50%] w-full px-[10px]'>
                    <div className="document-box">
                        <a href="#" className="title">
                            <img
                                src="https://images.uaxdlts.com/uax-landing/assets/images/icon/uaxnft.png"
                                style={{ width: "20px", marginRight: "10px" }}
                            />
                            UAXNFT
                        </a>
                        <div className="pt-[10px] content">
                            <div className="flex flex-col justify-start content-detail">
                                <div>
                                    <p className="text-start">
                                        Creating, collecting, and trading was never so easy, thanks to UAX NFT Marketplace.
                                    </p>
                                </div>
                                <div className="group-button">
                                    <a href="#" className="btn">
                                        Explore
                                        <i className="fa fa-long-arrow-right ml-[4px]" aria-hidden="true">
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div className="content-image">
                                <img
                                    src="./media/offering/uax-nft.png"
                                    alt="No Wallet"
                                    width={"100%"}
                                    height={"130px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}