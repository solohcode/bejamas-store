/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { connect } from 'react-redux'
import HeadNav from '../../components/crumbs/header'
import Products from '../../components/layout/product'

const mapStateToProps = ({ cart}) =>({
    cartItems: cart.cart,
    cartLoading: cart.loading,
    cartVisible: cart.cartVisible
})
function Home({ cartItems, cartVisible}) {
    return (
        <div>
            <HeadNav cart={cartItems} cartVisible={cartVisible} />
            <Products cart={cartItems} />
        </div>
    )
}
export default connect(mapStateToProps)(Home)