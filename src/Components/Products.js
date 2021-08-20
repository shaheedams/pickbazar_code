import React from 'react'
import style from 'styled-components'
import BrushIcon from '@material-ui/icons/Brush';
import apple from '../SRC/apple.png'
import bread from '../SRC/bread.png'
import coffee from '../SRC/coffee-cup.png'
import cooking from '../SRC/cooking-pot.png'
import meat from '../SRC/meat.png'
import milk from '../SRC/milk.png'
import spray from '../SRC/spray.png'
import wine from '../SRC/wine.png'
import dog from '../SRC/dog-food.png'
import arrow from '../SRC/arrow-next.svg'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { data } from '../products'

const Products = () => {
    return (
        <Container>
            <Wrap>
                <Category>
                    <div className="row">
                        <img src={apple } alt="#" width="30px"></img>
                        <h3 className="font">Fruits&Vegetables</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                    <div className="row">
                        <img src={meat } alt="#" width="30px"></img>
                        <h3 className="font">Meat&Fish</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                    <div className="row">
                        <img src={coffee } alt="#" width="30px"></img>
                        <h3 className="font">Snacks</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                    <div className="row">
                        <img src={dog } alt="#" width="30px"></img>
                        <h3 className="font">Pet Care</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                    <div className="row">
                        <img src={spray } alt="#" width="30px"></img>
                        <h3 className="font">Home & Cleaning</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                    <div className="row">
                        <img src={milk } alt="#" width="30px"></img>
                        <h3 className="font">Dairy</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                    <div className="row">
                        <img src={wine } alt="#" width="30px"></img>
                        <h3 className="font">Beverage</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                    <div className="row">
                        <img src={cooking } alt="#" width="30px"></img>
                        <h3 className="font">Cooking</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                    <div className="row">
                        <img src={bread } alt="#" width="30px"></img>
                        <h3  className="font">BreakFast</h3>
                        <img src={arrow} alt="#"></img>
                    </div>
                </Category>
                <Product>
                    {
                        data.map((e) => {
                            return (
                                <div className="product">
                                    <img src={e.img}></img>
                                    <h4>{e.name}</h4>
                                    <p className="font">{ e.stockL}</p>
                                    <div  className="cart">
                                        <h4>${ e.price}</h4>
                                        <div className="cartIcon">
                                            <ShoppingBasketIcon/> Cart
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </Product>
            </Wrap>
        </Container>
    )
}

const Container = style.div`
    width:100%;
   
`
const Wrap = style.div`
    display:flex;
`
const Category = style.div`
    width:300px;
    height:600px;
    position:sticky;
    top:80px;
    padding-left:20px;
    .row{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:22px;
    }
    .font{
        font-weight:normal;
    }
    .row:hover{
        color:#289672;
    }
`
const Product = style.div`
    background:#F7F7F7;
    display:flex;
    flex-wrap:wrap;
    .product{
        cursor:pointer;
        height:350px;
        width:200px;
        margin:20px;    
        background:white;
        padding:15px;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .font{
        font-weight:normal;
    }
    .cart{
        color:#289672;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .cartIcon{
        display:flex;
        align-items:center;
        padding:10px;
        padding-left:15px;
        padding-right:15px;
        border-radius:30px;    
    }
    .cartIcon:hover{
        background:#289672;
        color:white;
    }

`

export default Products
