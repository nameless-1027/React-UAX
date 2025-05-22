import React from 'react';

export const Partner = () => {
    return (
        <section>
            <div className="w-full">
                <div className="container mx-auto lg:sm:px-[80px] px-0">
                    <div className='flex justify-around gap-3 flex-wrap'>
                        <div className="col center mb-1 mt-2">
                            <img src="media/partner/Polygon.png" alt="No Polygon" />
                        </div>
                        <div className="col center mb-1 mt-2">
                            <img src="media/partner/Cardano.png" alt="No Cardano" />
                        </div>
                        <div className="col center mb-1 mt-2">
                            <img src="media/partner/Filecoin.png" alt="No Filecoin" />
                        </div>
                        <div className="col center mb-1 mt-2">
                            <img src="media/partner/Neo.png" alt="No Neo" />
                        </div>
                        <div className="col center mb-1 mt-2">
                            <img src="media/partner/Dash.png" alt="No Dash" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}