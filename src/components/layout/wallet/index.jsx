import React from 'react';

import './style.css'

export const Wallet = () => {

    return (
        <div className='flex flex-col container mx-auto sm:px-[38px] px-[16px] py-[15px] wallet'>
            <div className='lg:sm:px-[80px] px-0'>
                <div className='flex justify-between wallet-main'>
                    <div className=''>
                        <img src='/media/logo/dark.png' alt="favicon" className='w-[80px] mb-[52px]' />
                        <h1 className='text-white lg:text-[36px] text-[22px]' id="section-title">
                            UAX Wallet Coming Soon!
                        </h1>
                        <p className='text-white font-[200] lg:text-[14px] text-[11px]'>
                            Access your non-custodial UAX wallet seamlessly on laptops
                            and PCs with our browser extension or on the go with our easy to use mobile app.
                        </p>
                        <a href="#" className='text-[#b31bd8] font-[200] text-[14px]'>
                            Read more <i className='fa fa-long-arrow-right text-[#b31bd8]' />
                        </a>
                        <div className="wallet-download-buttons mt-[8px]">
                            <a href="#" className="wallet-btn wallet-google-play desktop:w-[24%] moblie:w-[49%] w-full">
                                <div className="icon" data-v-0c056308="">
                                    <div className="kit-icon is-fill" data-v-0c056308="">
                                        <svg className='lg:w-[40px] lg:h-[40px] w-[32px] h-[32px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.0667 12.9558L11.4153 5.03883C10.8924 4.72566 10.2822 4.54492 9.62916 4.54492C8.36127 4.54492 7.23725 5.26778 6.63558 6.30395L19.1778 18.8435L25.0667 12.9558Z" fill="#EEEEEE"></path>
                                            <path d="M6.17188 8.15244V31.847L18.0216 19.9996L6.17188 8.15244Z" fill="#EEEEEE"></path>
                                            <path d="M6.63581 33.6952C7.23763 34.7313 8.36168 35.454 9.62915 35.454C10.2681 35.454 10.868 35.2813 11.3825 34.978L11.4233 34.9541L25.0898 27.0663L19.1779 21.1556L6.63581 33.6952Z" fill="#EEEEEE"></path>
                                            <path d="M26.556 26.2201L32.007 23.074C33.0913 22.4886 33.8274 21.3456 33.8274 20.0274C33.8274 18.7187 33.1012 17.5813 32.0277 16.994L32.0154 16.9856L26.5303 13.8046L20.3341 19.9996L26.556 26.2201Z" fill="#EEEEEE"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <span className="wallet-small-text">GET IT ON</span>
                                    <span className="wallet-main-text">Google Play</span>
                                </div>
                            </a>
                            <a href="#" className="wallet-btn wallet-app-store desktop:w-[24%] moblie:w-[49%] w-full">
                                <div className="icon" data-v-0c056308="">
                                    <div className="kit-icon is-fill" data-v-0c056308="">
                                        <svg className='lg:w-[40px] lg:h-[40px] w-[32px] h-[32px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.2321 21.0606C28.1932 16.8494 31.7686 14.8007 31.9321 14.7053C29.9072 11.8269 26.7687 11.4336 25.6658 11.4022C23.0298 11.1318 20.4729 12.9401 19.1301 12.9401C17.7606 12.9401 15.6928 11.4283 13.4642 11.4728C10.5964 11.5159 7.9135 13.1348 6.44207 15.6487C3.40541 20.7744 5.67018 28.307 8.57953 32.4502C10.0349 34.4793 11.7355 36.745 13.9614 36.6653C16.139 36.5777 16.9525 35.3116 19.5804 35.3116C22.1842 35.3116 22.9481 36.6653 25.2182 36.6143C27.5553 36.5777 29.0268 34.576 30.4312 32.5286C32.113 30.2028 32.7884 27.9124 32.8152 27.7948C32.7603 27.7765 28.2763 26.108 28.2321 21.0606Z" fill="#EEEEEE"></path>
                                            <path d="M23.9438 8.67666C25.115 7.24855 25.9164 5.30564 25.6939 3.33398C23.9987 3.40715 21.8787 4.47726 20.6578 5.87401C19.5777 7.10482 18.6129 9.12221 18.8621 11.0194C20.7664 11.1579 22.7216 10.0826 23.9438 8.67666Z" fill="#EEEEEE"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <span className="wallet-small-text">Download on the</span>
                                    <span className="wallet-main-text">App Store</span>
                                </div>
                            </a>
                            <a href="#" className="wallet-btn wallet-apk desktop:w-[24%] moblie:w-[49%] w-full">
                                <div className="icon" data-v-0c056308="">
                                    <div className="kit-icon is-fill" data-v-0c056308="">
                                        <svg className='lg:w-[40px] lg:h-[40px] w-[32px] h-[32px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#EEEEEE" d="M20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36C27.3 36 33.54 30.96 35.42 24.26C34.16 25.74 32.24 27 30 27C26.13 27 23 23.87 23 20C23 17.86 23.93 15.95 25.41 14.59C23.68 13.02 21.34 12 18.75 12C13.75 12 9.57 15.95 9.06 20.91C8.58 25.63 12.27 30 17 30H18.5C14.91 28.74 12.5 25.52 12.5 22C12.5 18.41 15.41 15.5 19 15.5C21.46 15.5 23.66 17.03 24.53 19.27C25.17 20.97 25.56 22.77 26.38 24.35C26.86 25.27 27.57 26.04 28.5 26.56C28.5 26.56 28.5 26.56 28.5 26.56C25.77 32.09 19.2 34.35 13.68 31.63C8.16 28.91 5.9 22.34 8.62 16.82C11.34 11.3 17.91 9.04 23.43 11.76C24.23 12.15 24.97 12.64 25.65 13.2C24.43 10.78 22.09 9.02 19.36 9C15.47 8.97 12.2 11.93 11.89 15.79C11.59 19.58 14.53 22.88 18.32 23.19C20.08 23.33 21.77 22.6 22.95 21.19C23.58 22.97 25.01 24.28 26.8 24.71C28.59 25.14 30.48 24.57 31.81 23.2C32.59 22.4 33.17 21.4 33.5 20.3C35.03 14.91 31.81 9.16 26.42 7.63C24.42 7.05 22.26 7.04 20.24 7.6C21.22 6.46 22.5 5.58 24 5C22.71 4.35 21.36 4 20 4Z"></path>
                                        </svg>

                                    </div>
                                </div>
                                <div>
                                    <span className="wallet-small-text">Install extension</span>
                                    <span className="wallet-main-text">Mozilla</span>
                                </div>
                            </a>
                            <a href="#" className="wallet-btn wallet-chrome desktop:w-[24%] moblie:w-[49%] w-full">
                                <div className="icon" data-v-0c056308="">
                                    <div className="kit-icon is-fill" data-v-0c056308="">
                                        <svg className='lg:w-[40px] lg:h-[40px] w-[32px] h-[32px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7715 19.9956C15.7712 20.9126 16.0429 21.809 16.5523 22.5715C17.0616 23.334 17.7857 23.9284 18.6329 24.2795C19.4802 24.6305 20.4125 24.7225 21.3121 24.5438C22.2116 24.3651 23.038 23.9237 23.6866 23.2755C24.3352 22.6272 24.7769 21.8012 24.956 20.9019C25.135 20.0026 25.0432 19.0705 24.6923 18.2233C24.3414 17.3762 23.7471 16.6521 22.9846 16.1427C22.222 15.6332 21.3255 15.3613 20.4083 15.3613C19.1798 15.3646 18.0025 15.8539 17.1337 16.7222C16.2649 17.5906 15.7751 18.7674 15.7715 19.9956Z" fill="#EEEEEE"></path>
                                            <path d="M35.6405 17.3649V17.3684C35.5274 16.6945 35.366 16.0296 35.1575 15.3789H35.1499C35.3616 16.0328 35.5246 16.7015 35.6377 17.3794C35.5243 16.7016 35.3613 16.0329 35.1499 15.3789H24.4272C25.7417 16.5516 26.5911 18.15 26.5911 20.0043C26.5941 21.0909 26.3004 22.1578 25.7417 23.0899L18.6836 35.3462C18.6839 35.3524 18.6839 35.3586 18.6836 35.3648V35.3842V35.3662C19.2565 35.4273 19.8324 35.4563 20.4086 35.4531C20.8806 35.4531 21.3477 35.4262 21.8093 35.3842C22.5009 35.3217 23.1874 35.2124 23.8642 35.0572C30.7366 33.4885 35.8647 27.3407 35.8647 19.9967C35.8648 19.1147 35.7898 18.2342 35.6405 17.3649Z" fill="#EEEEEE"></path>
                                            <path d="M20.4085 26.1764C18.0901 26.1764 16.1581 24.9409 15.0755 23.0866L7.98841 10.831L7.97875 10.8145C6.44949 12.8844 5.46152 15.3033 5.10449 17.8517C4.74746 20.4002 5.03269 22.9974 5.93429 25.4077C6.83588 27.818 8.32529 29.965 10.2673 31.6539C12.2094 33.3428 14.5425 34.52 17.0551 35.0788V35.0753L22.4157 25.7901C21.7748 26.0366 21.0952 26.1674 20.4085 26.1764Z" fill="#EEEEEE"></path>
                                            <path d="M9.04355 9.55527L14.3807 18.7473C14.6578 17.3522 15.4098 16.0962 16.5088 15.1929C17.6078 14.2896 18.9859 13.7949 20.4086 13.7929H34.5655C34.0788 12.7239 33.4827 11.708 32.7866 10.7618L32.7949 10.7673C33.4883 11.7118 34.0817 12.7258 34.5655 13.7929H34.5772C34.0937 12.7226 33.5003 11.7054 32.8067 10.7577C32.7981 10.7524 32.79 10.7464 32.7825 10.7397C31.4226 8.92217 29.6788 7.42655 27.6752 6.35926C25.6715 5.29196 23.4572 4.67922 21.1898 4.56462C18.9223 4.45003 16.6575 4.83639 14.5564 5.69622C12.4553 6.55605 10.5695 7.86823 9.0332 9.53941L9.04286 9.55596L9.04355 9.55527Z" fill="#EEEEEE"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <span className="wallet-small-text">Install extension</span>
                                    <span className="wallet-main-text">Chrome</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <img src="/media/phone.png" alt="phone" className='phone desktop:block hidden' />
                    <img src="/media/phone2.webp" alt="phone" className='phone phone-single desktop:hidden lg:block hidden' />
                </div>
            </div>
        </div>
    )
}