
import React from 'react'

import ft from '../../resources/images/featured.png'

// people also buy images 
import ab1 from '../../resources/also-buy/1.png'
import ab2 from '../../resources/also-buy/2.png'
import ab3 from '../../resources/also-buy/3.png'

import './index.css'
import { Empty, Image, Skeleton } from 'antd'


export default function FeaturedProd({feat, pab, loading, addToCart}) {

    // people also buy 
    const fpab = pab && pab

    // featured products details 
    const fprod = feat && feat[0]

    // fallback for featured page 
    const fbprod = {
        name: 'Samurai King Resting',
        imgSrc: ft,
        imgAlt: 'pet',
        desc: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.",
        cat: 'pet',
        id: 1,
        gross:'1020 x 1020 pixel',
        net:'15 mb',
        pab:[
            {
                id: 2,
                imgSrc: ab1,
                imgAlt: 'premium'
            },
            {
                id: 3,
                imgSrc: ab2,
                imgAlt: 'premium'
            },
            {
                id: 4,
                imgSrc: ab3,
                imgAlt: 'premium'
            },
        ]
    }
    return (
        <div className="featured-product">
            <div className={`container ${feat?'d-block':'d-none'}`}>
            {
                loading? <Skeleton/>:
                    <div className="container px-3 px-md-0">

                        {/* featured product top  */}
                        <div className="w-100 py-3">
                            <div className="float-start">
                                <p className="fs-3 fw-bold">{fprod? fprod && fprod.name: fbprod.name}</p>
                            </div>
                            <div className="float-end d-none d-md-block">
                                <button onClick={()=> addToCart(fprod? fprod && fprod: fbprod)} className="w-100 btn btn-dark rounded-0 px-5">ADD TO CART</button>
                            </div>
                        </div>

                        {/* featured product content  */}
                        <div className="featured-product-content w-100">
                            <div className="cont-top">
                                <img className="cont-top-img" src={fprod? fprod && fprod.imgSrc: fbprod.imgSrc} alt={fprod? fprod && fprod.imgAlt: fbprod.imgAlt} width="100%" style={{maxHeight:'450px'}} />
                                <div className="f-label">
                                    <p className="px-4 px-md-5 py-2 py-md-3 fw-bold bg-light">Photo of the day</p>
                                </div>
                            </div>
                            <div className="w-100 d-block d-md-none my-3">
                                <button onClick={()=> addToCart(fprod? fprod && fprod: fbprod)} className="w-100 btn btn-dark rounded-0 px-5">ADD TO CART</button>
                            </div>
                            <div className="w-100 cont-bottom my-4">
                                <div className="row">

                                    {/* about section  */}
                                    <div className="col-md-7">
                                        <p className="fs-5 fw-bold m-0">About the {fprod? fprod && fprod.name: fbprod.name}</p>
                                        <p className="d-none d-md-block text-secondary fw-bold m-0 fs-5 lh-sm">{fprod? fprod && fprod.category: fbprod.cat}</p>
                                        <p className="text-secondary pr-md-5 py-3">{fprod? fprod && fprod.description ===null?fbprod.desc:fprod && fprod.description: fbprod.desc}</p>
                                    </div>

                                    {/* others also view section  */}
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="w-100 col-lg-12">
                                                <p className="fw-bold fs-5 float-md-end ">People also buy</p>
                                            </div>
                                            <div className="w-100 col-lg-12">
                                                <div className="row float-md-end">
                                                    { 
                                                        fpab === []?
                                                        <Empty/>
                                                        :
                                                        fpab.map((prod, index)=>(
                                                            <div key={index} className="col-4 px-2 pab" href="#a" >
                                                                <Image src={prod.imgSrc} alt={prod.imgAlt} width="100%" style={{minHeight:'150px'}} 
                                                                    fallback="data:image/png;base64,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"
                                                                />
                                                                {/* web display  */}
                                                                <div className="d-none d-md-block">
                                                                    <div className="atd w-75 mx-auto">
                                                                        <button onClick={()=> addToCart(prod)} className="w-100 mx-auto btn btn-dark rounded-0">CART <span className="fas fa-cart-plus" /></button>
                                                                    </div>
                                                                </div>
                                                                {/* mobile display */}
                                                                <div className="d-block d-md-none">
                                                                    <div className="atdm w-75 mx-auto">
                                                                        <button onClick={()=> addToCart(prod)} className="w-100 mx-auto btn btn-dark rounded-0"><span className="fas fa-cart-plus" /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="w-100 col-lg-12">
                                                <p className="fw-bold fs-5 float-md-end">Details</p>
                                            </div>
                                            <div className="w-100 col-lg-12 text-secondary">
                                                <p className="text-md-end m-0">Size: {fprod? fprod && fprod.details===null? fbprod.gross: fprod && fprod.details: fbprod.gross}</p>
                                                <p className="text-md-end m-0">Size: {fprod? fprod && fprod.details===null? fbprod.net: fprod && fprod.details: fbprod.net}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <hr/>

                    </div>
                }
            </div>
        </div>
    )
}
