import React ,{useState} from 'react'
import style from 'styled-components'
import logo from '../SRC/logo.svg'
import apple from '../SRC/apple.png'
import flag from '../SRC/united-states.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import bread from '../SRC/bread.png'
import coffee from '../SRC/coffee-cup.png'
import cooking from '../SRC/cooking-pot.png'
import meat from '../SRC/meat.png'
import milk from '../SRC/milk.png'
import spray from '../SRC/spray.png'
import wine from '../SRC/wine.png'
import dog from '../SRC/dog-food.png'

const NavBar = () => {

    const [click, setClick] = useState(false);
    return (
        <Container >
            <MobileView>
                <div class="flex">
                    <MenuIcon style={{marginRight:"20px",cursor:"pointer"}}/>
                    <img src={logo} alt="#" style={{cursor:"pointer"}}></img>
                </div>
                <div class="flex">
                    <img src={flag} alt="#" width="20px" style={{marginRight:"20px",cursor:"pointer"}}></img>
                    <SearchIcon style={{cursor:"pointer"}}/>
                </div>
            </MobileView>
            <Wrap className="mobilNone">
                <NavLeft className="flex width ">
                    <img src={logo} alt="#" style={{cursor:"pointer"}}></img>
                    <button className="btn" onClick={() => {
                        if (click === true) {
                            setClick(false);
                        } else {
                            setClick(true);
                        }
                    }} style={{cursor:"pointer"}}><span className="category flex green"><img src={apple} alt="#" width="20px"/><h3>Grocery</h3><ArrowDropDownIcon/></span></button>
                    {click &&
                        <div className="float">
                            <div className="row">
                                <img src={apple} alt="#" width="30px"></img>
                                <h3 className="font">Fruits&Vegetables</h3>
                            </div>
                            <div className="row">
                                <img src={meat} alt="#" width="30px"></img>
                                <h3 className="font">Meat&Fish</h3>
                            </div>
                            <div className="row">
                                <img src={coffee} alt="#" width="30px"></img>
                                <h3 className="font">Snacks</h3>
                            </div>
                            <div className="row">
                                <img src={dog} alt="#" width="30px"></img>
                                <h3 className="font">Pet Care</h3>
                            </div>
                            <div className="row">
                                <img src={spray} alt="#" width="30px"></img>
                                <h3 className="font">Home&Cleaning</h3>
                            </div>
                            <div className="row">
                                <img src={milk} alt="#" width="30px"></img>
                                <h3 className="font">Dairy</h3>
                            </div>
                            <div className="row">
                                <img src={wine} alt="#" width="30px"></img>
                                <h3 className="font">Beverage</h3>
                            </div>
                            <div className="row">
                                <img src={cooking} alt="#" width="30px"></img>
                                <h3 className="font">Cooking</h3>
                            </div>
                        </div>
                    }
                </NavLeft>
                <NavCenter className="flex " style={{cursor:"pointer"}} >
                    <SearchIcon/><input type="text" placeholder="Search your products here"></input>
                </NavCenter>
                <NavRight className="flex width ">
                    <a href="#" className="" style={{cursor:"pointer"}}><h3>Offer</h3></a>
                    <a href="#" className="flex " style={{cursor:"pointer"}}><HelpIcon /><h3>Need Help</h3></a>
                    <button className="btn lang " style={{cursor:"pointer"}}><span className="flex"><img src={flag} alt="#" width="20px"></img><h3>English</h3></span></button>
                    <button className="btn join " style={{cursor:"pointer"}}><h4>Join</h4></button> 
                </NavRight>
            </Wrap>
        </Container>
    )
}

const Container = style.div`
    position:sticky;
    z-index:11;
    top:0;
    width:100%;
    height:80px;
    background:white;
    padding-left:30px;
    padding-right:30px;
    box-shadow: 1px 1px 8px 1px #888888;
`
const Wrap = style.div`
    @media only screen and (max-width:988px){
        display:none; 
    }   
    width:100%; 
    height:80px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`

const NavLeft = style.div`
    width:400px;
    .category{
        display:flex;
        width:120px;
        align-items:center;
        justify-content:space-around;
    }
    .btn{
        padding:6px;
        border:1px solid gray;
        border-radius:5px;
        outline:none;
        background:white;
    }
    .float{
        position:fixed;
        width:230px;
        background:white;
        height:430px;
        top:75px;
        left:120px;
        padding:20px;
        box-shadow: 1px 1px 8px 1px #888888;
    }
    .row{
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        padding:10px;
        padding-top:10px;
        padding-bottom:10px;
    }
    .font{
        display:flex;
        align-items:center;
        margin-left:10px;
    }
    .row:hover{
        color:#289672;
    }
`
const NavCenter = style.div`
    width:800px;
    padding:8px;
    border:1px soid gray;
    border-radius:5px;
    background:#F7F7F7;
    input{
        width:580px;
        height:30px;
        border:none;
        outline:none;
        background:#F7F7F7;
    }
`
const NavRight = style.div`
    width:500px;
    a{
        text-decoration:none;
        color:black;
    }
    a:hover{
        color:#289672;
    }
    .btn{
        padding:8px;
        border:1px solid gray;
        border-radius:5px;
        outline:none;
        background:white;
    }
    .join{
        padding:10px;
        width:60px;
        color:white;
        background:#289672;
    }  
`
const MobileView = style.div`
    display:none;
    @media only screen and (max-width:988px){
        width:100%;
        height:80px;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
`

export default NavBar
