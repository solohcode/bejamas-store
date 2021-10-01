/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import { Card, Checkbox, Form, Select, Modal, Row,Col} from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, } from '@ant-design/icons';
import { connect } from 'react-redux';
import './index.css'
import FeaturedProd from '../featured';
import FilterDisp from '../filter';
import MainProduct from '../mainProducts';




    const mapStateToProps = ({dispatch , products}) =>({
        dispatch,
        products: products.products,
        filtered: products.filtered,
        loading: products.loading
    })

const Products=({dispatch, products, loading, filtered, cart}) =>{
    // dispatch get product function from redux saga 
    useEffect(() => {
        dispatch({
            type: 'products/GET_PRODUCTS'
        })
    }, [])

    // data from the redux store
    const data = filtered.length !== 0 ? filtered: products && products
    // product arrays >>>>>>>>>>>>>>>>>>>>>>
    let generalProduct = []
    let featured  = []
    let pab  = []
    data && data.forEach((prod)=>{
        generalProduct.push(prod)
    })
    products && products.forEach((prod)=>{
        if(prod.featured){
            featured.push(prod)
        }
        if(prod.pab){
            pab.push(prod)
        }
    })
    loading = generalProduct === []? loading=true: loading


    // all the states in the page >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // modal display  state
    const [modal, setModal] = useState(false)
    

    // functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // display modal function 
    const showModal = (val)=>{
        setModal(val)
    }
    // add to cart function 
    const addToCart=(e)=>{
        let n = {e, cart} 
        
        dispatch({
            type:"cart/ADD_TO_CART",
            payload: n
        })
    }
    // filter product function 
    const filterProduct = (f)=>{
        let filter = products.filter((prod)=> f.includes(prod.category))
        
        dispatch({
            type:"products/FILTER_PRODUCT",
            payload:filter.length === 0? products :filter
        })
    }
    // filter price function 
    const filterPrice = (e)=>{
        let filter = filtered.filter((prod)=> e.includes(prod.pricegp))
        dispatch({
            type:"products/FILTER_PRODUCT",
            payload: filter.length === 0? filtered :filter
        })
    }
    

    // checkbox arrays >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // category checkbox array
    const catCheck=[
        {
            name: 'people',
            value: 'People'
        },
        {
            name: 'premium',
            value: 'Premium'
        },
        {
            name: 'pet',
            value: 'Pet'
        },
        {
            name: 'food',
            value: 'Food'
        },
        {
            name: 'landmark',
            value: 'Landmark'
        },
        {
            name: 'city',
            value: 'City'
        },
        {
            name: 'nature',
            value: 'Nature'
        },
    ]
    // price checkbox array
    const priceCheck = [
        {
            name: '<20',
            value: 'Lower than $20'
        },
        {
            name: '20-100',
            value: '$20 - $100'
        },
        {
            name: '100-200',
            value: '$100 - $200'
        },
        {
            name: '>200',
            value: 'More than $200'
        },
    ]

    
    // mini components >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // sort by select component 
    const options = ((
        <Select bordered={false} placeholder="Price">
            <Select.Option value="price">
                Price
            </Select.Option>
            <Select.Option value="alphabet">
                Alphabetical Order
            </Select.Option>
        </Select>
    ))
    // modal component container 
    const modalcont = ((
        <Modal
        title="Filter"
        className="w-100 mx-auto"
        visible={modal}
        onOk={()=>showModal(false)}
        onCancel={()=>showModal(false)}
        >
            <div style={{height:'50vh', overflowY:'scroll'}}>
                {/* category section  */}
                <div className="">
                    <div className="my-4 fs-5 fw-bold">
                        <span>Category</span>
                    </div>
                    <div>
                        <Form>
                            <Checkbox.Group style={{ width: '100%' }} onChange={filterProduct}>
                                <Row>
                                    {
                                        catCheck && catCheck.map((prod,index)=>(
                                            <Col span={24} key={index}>
                                                <Checkbox value={prod.name} className="me-4"/>
                                                <span>
                                                    {prod.name == '<20'?'Less Than $20':prod.name == '20-100'?'$20 - $100': prod.name == '100-200'?'$100 - $200': 'More Than $200'}
                                                </span>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Checkbox.Group>,
                        </Form>
                    </div>
                </div>

                {/* price range section  */}
                <div>
                    <div className="my-4 fs-5 fw-bold">
                        <span>Price Range</span>
                    </div>
                    <div>
                        <Form>
                          <Checkbox.Group style={{ width: '100%' }} onChange={filterPrice}>
                              <Row>
                                  {
                                      priceCheck && priceCheck.map((prod, index)=>(
                                          <Col span={24} key={index}>
                                              <Checkbox value={prod.name} className="me-4"/>
                                              <span>{prod.name}</span>
                                          </Col>
                                      ))
                                  }
                              </Row>
                          </Checkbox.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </Modal>
    ))
    return (
        <div>
            <FeaturedProd feat={featured} pab={pab} loading={loading} addToCart={addToCart} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="float-start">
                            <div className="d-none d-md-block my-4 fs-4 fw-bold">
                                <span>Photography / <span className="text-secondary">Premium Photos</span></span>
                            </div>
                            <div className="d-block d-md-none my-4 fw-bold">
                                <span>Photography / <span className="text-secondary">Premium Photos</span></span>
                            </div>
                        </div>
                        <div className="float-end">
                            <div className="d-none d-md-block my-4">
                                <span className="text-secondary"><ArrowUpOutlined/><ArrowDownOutlined/> Sort By: {options}</span>
                            </div>
                            <div className="d-block d-md-none my-4 fw-bold">
                                <p className="fs-5 pointer" onClick={()=> showModal(true)}><span className="border p-2 fas fa-sliders-h"/></p>
                                {modalcont}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-3 px-md-0">
                    <Card>
                        <div className="row">
                            <div className="col-md-3 d-none d-md-block">
                                <FilterDisp catCheck={catCheck} priceCheck={priceCheck} filterProduct={filterProduct} filterPrice={filterPrice} />
                            </div>

                            <Card loading={loading} className="col-md-9 w-100 p-0">
                                <MainProduct productDatas={generalProduct} addToCart={addToCart}/>
                            </Card>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}



export default connect(mapStateToProps)(Products)