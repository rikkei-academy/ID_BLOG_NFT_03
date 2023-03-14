import React from 'react'

export default function Hero() {
    return (
        <div className="Hero">
            <div className="Hero-title">
                <div className="text-title-1">
                    Discover, collect, and sell extraordinary NFTs
                </div>
                <div className="text-title-2">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                    typeface
                    without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is
                    available.
                </div>
                <button className="btn-box1">Start Collecting</button>
                <button className="btn-box2">Discovery Art</button>
            </div>
            <div className="Cards">
                <div className="Hero-cards">
                    <div className="card-NFT1">
                        <img src="../img/Image Placeholder.png" alt="" />
                        <div className="NFT-title-name">Inner State : Joy</div>
                        <div className="profile">
                            <div className="img-user"><img src="../img/Image Placeholder.png" alt="" /></div>
                            <div className="title-user">Robert Fox</div>
                        </div>
                        <div className="cardboard">
                            <div className="Current">
                                <div className="Cbid">Current Bid :</div>
                                <div className="eth">0.4435 ETH</div>
                            </div>
                            <button>Place a bid</button>
                        </div>
                    </div>
                </div>
                <div className="Hero-cards2">
                    <div className="card-NFT2">
                        <img src="../img/Image Placeholder.png" alt="" />
                        <div className="NFT-title-name">Inner State : Joy</div>
                        <div className="profile2">
                            <div className="img-user"><img src="../img/Image Placeholder.png" alt="" /></div>
                            <div className="title-user">Robert Fox</div>
                        </div>
                    </div>
                    <div className="sliders">
                        <span className="sp1">3</span>
                        <span className="sp2">/5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
