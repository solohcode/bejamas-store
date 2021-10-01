import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Divider, Empty, Dropdown, Image } from 'antd'
import React from 'react'



// Bejamas logo text images importations
import txt1 from './Bejamas-logo/1.png'
import txt2 from './Bejamas-logo/2.png'
import txt3 from './Bejamas-logo/3.png'
import txt4 from './Bejamas-logo/4.png'
import txt5 from './Bejamas-logo/5.png'
import txt6 from './Bejamas-logo/6.png'
import txt7 from './Bejamas-logo/7.png'
import txt8 from './Bejamas-logo/8.png'

// headnav css importation
import './index.css'
import { connect } from 'react-redux'




const mapStateToProps = ({dispatch})=>({
    dispatch
})
function HeadNav({cart, dispatch, cartVisible }) {
    
    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            document.getElementById('navbar').classList.add('fixed-top');
          document.getElementById('navbar').classList.add('shadow-sm');
          // add padding top to show content behind navbar
          let navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar').classList.remove('fixed-top');
          document.getElementById('navbar').classList.remove('shadow-sm');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  });




  const logo = [
      {
          src:txt1,
          alt: 'B'
      },
      {
        src:txt2,
        alt: 'E'
    },
    {
        src:txt3,
        alt: 'J'
    },
    {
        src:txt4,
        alt: 'A'
    },
    {
        src:txt5,
        alt: 'M'
    },
    {
        src:txt6,
        alt: 'A'
    },
    {
        src:txt7,
        alt: 'S'
    },
    {
        src:txt8,
        alt: '_'
    }
]


    // clear cart function 
    const clearCart=()=>{
        dispatch({
            type: 'cart/CLEAR_CART'
        })
    }
    
    const menu = ((
        <div className="bg-white p-3 border">
            <div className="" style={{width:'200px'}}>
                <div className="row">
                    {
                        cart.length === 0? <Empty/>:
                        cart.map((prod, index)=>(
                            <div key={index} className="col-12">
                                <div className="float-start">
                                    <p className="fw-bold">{prod.name}</p>
                                    <p>{`$ ${prod.price}`}</p>
                                </div>
                                <div className="float-end">
                                    <Image src={prod.imgSrc} alt="..." width="50px" 
                                        fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                                    />
                                </div>
                                <Divider/>
                            </div>
                        ))
                    }
                    <Divider/>
                    <div className="col-12">
                        <button onClick={()=> clearCart()} className="w-100 rounded-0 btn btn-outline-dark">CLEAR</button>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <div>
            <nav id="navbar" className="navbar" >
                <div className="container-fluid px-0 px-md-5">

                    {/* logo  */}
                    <div className="logo">
                        {
                            logo === []? <Empty/> :
                            logo.map((prod, index)=>(
                                <img key={index} src={prod.src} alt={prod.alt} className="me-1" />
                            ))
                        }
                    </div>

                    {/* cart icon  */}
                    <div className="cart">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Badge count={cart.length} style={{ backgroundColor: '#000' }}>
                            <ShoppingCartOutlined className="pointer fs-2 btn-cart" />
                        </Badge>
                    </Dropdown>
                    </div>
                </div>
            </nav>
                    <Divider/>
        </div>
    )
}


export default connect(mapStateToProps)(HeadNav)