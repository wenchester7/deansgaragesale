import React from 'react';
import './assets/css/style1.css';
import './assets/css/style.css';
import Logo from './assets/images/logo.png';
import backImg from './assets/images/backImg.jpg';
function App(){
    return(
       <div className="App">
           <section className="backImg">
                <img src={backImg} alt="shopping mall"/>
                <div id="square"></div>
            </section>
        
            <header>
                <div className ="top-sign">
                    <p>Free Worldwide Shipping</p> 
                </div>
    
                <div id="logo">
                    <a href="index.html">
                        <img src={Logo} className="img-logo" alt="Logo of DGS"/>
                    </a>
                </div>
                <ul className="navMain">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>   
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                            Catalog
                            <span className="fa fa-caret-down" ></span>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Pet accessories</a>
                            <a className="dropdown-item" href="#">Gadgets  section</a>
                            <a className="dropdown-item" href="#">Art and Jewelry</a>
                            <a className="dropdown-item" href="#">Camping Section</a>
                            <a className="dropdown-item" href="#">Sport Section</a>
                            <a className="dropdown-item" href="#">Home Appliances</a>
                            <a className="dropdown-item" href="#">Accessories section</a>
                            <a className="dropdown-item" href="#">Gamers section</a>
                            <a className="dropdown-item" href="#">Health Section</a>
                        </div>    
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact US</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <svg className="bi bi-person-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <svg className="bi bi-search" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="fa fa-shopping-cart"></span>
                        </a>
                    </li>
                </ul>
            </header>

            <section className="main-section">
                <div className="frontStoreName">
                    <h4>"IF YOU DON'T WANT TO STAY INLINE, SHOP ONLINE!"</h4> 
                    <h1>Deans Garage Sale</h1>
                </div> 
            </section>        

            <section className="topheader">
                <h1  className="bestCollection">Check out Our Best Collections
                    <hr className="small"/>
                </h1>
                <section className="bestSeller">
                    <div className="row">
                        <div className="col-md-30 grid">
                            <img src={require("./assets/images/accessoriesSection.jpg")} alt="accessories Section"/> 
                            <p>ACCESSORIES SECTION </p>
                        </div>
                        <div className="col-md-30 grid">
                            <img src={require("./assets/images/gadgetSection.jpg")} alt="gadget Section"/>
                            <p>GADGET SECTION</p>
                        </div>
                        <div className="col-md-30">
                            <img src={require("./assets/images/healthSection.jpg")}  alt="Home Appliances Section"/>
                            <p>HEALTH SECTION</p>
                        </div>
                    </div>    
            
                    <div className="row">
                        <div className ="col-md-30 grid">
                            <img src={require("./assets/images/sportSection.jpg")} alt="sport Section"/>
                            <p>SPORT SECTION</p>
                        </div>
                        <div className="col-md-30 grid">
                            <img src={require("./assets/images/campingSection.jpg")} alt="camping Section"/>
                            <p>CAMPING SECTION</p>
                        </div>
                        <div className="col-md-30 grid">
                            <img src={require("./assets/images/petAccessories.jpg")} alt="camping Section"/>
                            <p>PET SECTION</p>
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col-md-30 grid">
                            <img src={require("./assets/images/homeappliancesSection.jpg")}  alt="Home Appliances Section"/>
                            <p>HOME APPLIANCES</p>
                        </div>
                        <div className="col-md-30 grid">
                            <img src={require("./assets/images/gamerSection.jpeg")} alt="gamer Section"/>
                            <p>GAMER SECTION</p>
                        </div>
                        <div className="col-md-30 grid">
                            <img src={require("./assets/images/artjewelrySection.jpg")} alt="Art and Jewelry"/>
                            <p>ART AND JEWELRY</p>
                        </div>
                    </div>
                </section>  
            </section> 

            <section className="topheader">
                <h1 className=" hotseller">Super Hot Sellers
                    <hr className="small"/>
                </h1>
    
                <section className="superHotSeller">
                    <div className="row">
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/translator black.jpg")} alt="black and white mini translator"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                             </div>
                             <p>Personal translator - TranslatIQ <br/>— $199.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/levitation speaker.jpg")} alt="Levitation wireless speaker"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Levitating Wireless Speaker <br/>- $149.97</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/i-scan.jpg")} alt="portable i-scanner"/>
                            <div className="product-onsale">
                                <p>Save<br/>$50</p>
                            </div>
                            <p>I-scanner - portable scanner<br/>- $89.95</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/powerbank.jpg")} alt="portable mini powerbank"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Portable Mini Power bank<br/> - $49.95</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/mosquito trap.jpg")} alt="Electric Home mosquito trap"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Mosquito Trap - $39.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/cooler gamepad.jpg")} alt="Ultimate Mobile gamepad"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Ultimate Mobile Gamepad <br/> - $25.99</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/portable smart translator.jpg")} alt="portable smart translator"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Portable Smart Translator<br/> - $74.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/ashtray main.jpg")} alt="picture of smart ashtray"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>  
                            <p>USB rechargable Ashtray<br/> - $69.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/sunglasses.jpg")} alt="smart sunglasses audio"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Smart SunGlasses - $149.99</p>
                        </div>
                    </div>    
                    <div className="row">
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/usb charger.jpg")} alt="usb type connector"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>USB Type C HUB 9 in 1 <br/> - $25.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/poket karaoke.png")} alt="portable karaoke mini microphone"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Pocket Karaoke - $45.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/wall heater.jpg")} alt="Electric wall heater"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Electric Wall Heater - $49.99</p>
                        </div>
                    </div>    
                    <div className="row">
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/earphone translator.jpg")} alt="mini earphone translator"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>MultiLanguage earphone translator <br/> - $39.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/air photo drone.jpg")} alt="Air Photographer mini Drone"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Air Photographer drone - $99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/keyboard-bluetooth.jpg")} alt="wireless bluetooth keyboard"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Wireless Bluetooth Keyborard <br/> - 24.99</p>
                        </div>
                    </div>    
                    <div className="row">
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/game controller.jpg")} alt="game controller for mobile"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Game Controller Shooter for PUBG<br/> - $11.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/car-massage-seat.jpg")} alt="Electric Heated car massage seat"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>
                            <p>Electric Heated Massage Seat<br/> - $59.99</p>
                        </div>
                        <div className="col-md-20">
                            <img src={require("./assets/images/products/hotSellerfolder/backpack level3.jpg")} alt="PubG military backpack level 3"/>
                            <div className="product-onsale">
                                <p>Save<br/>$60</p>
                            </div>  
                            <p>Pubg Military backpack<br/> - $25.99</p>
                        </div>
                    </div>
                </section>
            </section>              
            
            <footer>
                <div className="stick-Bottom">
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="Privacy Policy.html">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="Refund Policy.html">Refund Policy</a>
                                </li>
                                <li>
                                    <a href="termsofservice.html">Terms of Service</a>
                                </li>
                            </ul>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Shipping Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact US</a>
                                </li>
                                <li>
                                    <a href="#">Affiliate Program</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i> Facebook</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram"></i> Instagram</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-youtube-play"></i> Youtube</a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <p><span>&#169</span>2020, Dean Garage Sale<br/>
                            Powered by Dean <br/>Azat Bizhanov
                            </p>  
                        </div>
                    </div>     
                </div>
            </footer>
       </div>
    );
    }

export default App;