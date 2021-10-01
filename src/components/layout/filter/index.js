/* eslint-disable eqeqeq */
import React from 'react'
import {Form, Checkbox,Row,Col} from 'antd'
import './index.css'

export default function FilterDisp({catCheck, priceCheck, filterProduct , filterPrice}) {

    // let catGroup = []
    // catCheck.forEach((prod)=>{
    //     catGroup.push({id:prod.id, label:prod.name, value:prod.name})
    // })

    return (
        <div>
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
                                            <span>{prod.name}</span>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Checkbox.Group>
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
                                            <span>
                                                {prod.name == '<20'?'Less Than $20':prod.name == '20-100'?'$20 - $100': prod.name == '100-200'?'$100 - $200': 'More Than $200'}
                                            </span>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Checkbox.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}
