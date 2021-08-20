import React from 'react'
import style from 'styled-components'
import Bannerimg from '../SRC/grocery.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Banner = () => {
    return (
        <Container>
            <Wrap>
                <Home>
                    <h1>Groceries Delivered in 90 Minute</h1>
                    <p>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
                    <div className="searchBar">
                        <p className="category">Grocery</p>
                        <input type="text" placeholder="Search your products here"></input>
                        <div className="search" style={{cursor:"pointer"}}>
                            <SearchIcon/><h3>Search</h3>
                        </div>
                    </div>
                </Home>
                <Fixed>
                    <div className="flex">
                        <ShoppingBasketIcon />
                        <h3>0 Item</h3>
                    </div>
                    <div className="rate">
                        $0.00
                    </div>
                </Fixed>
                <Demo>
                    <h3>
                        D<br/>E<br/>M<br/>O<br/>S
                    </h3>
                </Demo>
            </Wrap>
        </Container>
    )
}

const Container = style.div`
    width:100%;
    height:89vh;    
    background-image:url(${Bannerimg});
    background-size:cover;
    background-position:center;
`
const Wrap = style.div`
   
`
const Home = style.div`
    width:100%;
    height:89vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    h1{
        font-size:50px;
        margin-bottom:20px;
        color:#012443;
    }
    p{
        color:#9E9D89;
    }
    input{
        width:400px;
        border:none;
        outline:none;
    }
    .searchBar{
        margin-top:70px;
        border-radius:5px;
        display:flex;
        width:600px;
        height:45px;
        box-shadow: 2px 5px 23px -3px rgba(0,0,0,0.67);
    }
    .search{
        display:flex;
        align-items:center;
        background:#289672;
        width:120px;
        color:white;
        padding:5px;
        border-radius: 0 5px 5px 0;
    }
    .category{
        margin:10px;
        padding-right:15px;
        color:#289672;
    }
`
const Fixed = style.div`
    z-index:11;
    cursor:pointer;
    position:fixed;
    top:40vh;
    right:0;
    background:#289672;
    width:100px;
    height:100px;
    padding:8px;
    border-radius:5px 0 0 5px;
    .flex{
        color:white;
        padding-top:5px;
        padding-bottom:10px;
    }
    .rate{
        background:white;
        padding:10px;
        color:#289672;
        text-align:center;
        border-radius:5px;
    }
`
const Demo = style.div`
    z-index:11;
    position:fixed;
    top:60vh;
    right:0;
    background:#289672;
    width:40px;
    padding-left:15px;
    color:white;
    padding-top:15px;
    padding-bottom:15px;
    border-radius:5px 0 0 5px;
`

export default Banner
