import React, { useState } from 'react';

const Carousel = ({ pictures, closeCarousel}) => {

    const [index, setIndex] = useState(0);

    return (
        <div className="carousel">
            <div className="contain">
                <div className="exit" onClick={() => closeCarousel()}>&times;</div>

                <div className="main-thumb">
                    <img src={pictures.desktop[index]} alt="" />
                </div>

                <div className="scroller">
                    {/* {pictures.mobile.map((pic, index) => 
                        <div className="sub-image" key={index}>
                            <img src={pic} alt=""/>
                        </div>
                    )} */}
                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[0]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[1]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[2]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[3]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[4]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[5]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[6]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[7]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[8]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[9]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[10]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[11]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[12]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[13]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[14]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[15]} alt=""/>
                    </div>

                    <div className="sub-image" key={index}>
                        <img src={pictures.mobile[16]} alt=""/>
                    </div>
                    
                </div>

                
            </div>
            
        </div>
    )
}

export default Carousel;