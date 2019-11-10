import React, { useState, useEffect } from 'react';
import './App.css';
import ObjectPage from './ObjectPage/ObjectPage';
import Navbar from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import CartPage from './CartPage/CartPage';
import Logo from "./HomePage/images/Atlanta.jpg";
import Logo1 from "./HomePage/images/chicago.jpg";
import Logo2 from "./HomePage/images/dallas.jpg";
import Logo3 from "./HomePage/images/LOSANGELES.jpg";

function App() {
    const [object, setObject] = useState({});
    const [hasErrors, setErrors] = useState(false);
    async function fetchData() {
        
            const BASE_URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=dallas-downtown&inputtype=textquery&fields=photos&key=AIzaSyBWfuBeeuxLPuD5IqKVDzlrRk_zHZccIWo'
            fetch(`${BASE_URL}`, { 
              method: 'GET',
              headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Methods':'POST, GET'
              }
            })
            .then(response => response.json())
            .then(json => console.log(json));
            
            
        }
        useEffect(() => {
            fetchData();
            }, []);
        
        
            
    const [price, setPrice] = useState({
        priceOption: 'new',
        price: 598.23,
        quantity: 1
    });
    

    const priceOptionHandler = (event) => {
        let currentPrice;
        let quantity = price.quantity;
        if (event.target.value === 'new') {
            currentPrice = 598.23;
        } else {
            currentPrice = 478.13;
        }
        setPrice({priceOption: event.target.value, price: (currentPrice * quantity), quantity: quantity});
    };

    const quantityHandler = (event) => {
        let initialPrice;
        if (price.priceOption === 'new') {
            initialPrice = 598.23;
        } else {
            initialPrice = 478.13;
        }
        const quantity = event.target.value;
        setPrice({quantity: quantity, price: (initialPrice * quantity), priceOption: price.priceOption})
    };

    const backgroundStyle = {
        height: '100%'
    };

    var list_items = [
        [Logo, "Dallas", 10],
        [Logo1, "Chicago", 323],
        [Logo2, "Atlanta", 234],
        [Logo3, "Los Angeles", 532],
        [Logo, "Denver", 234],
        [Logo1, "Charlotte", 121],
        [Logo2, "Las Vegas", 241],
        [Logo3, "San Fransisco", 101],
        [Logo, "Houston", 532]
        
    ]
    return (
      <div className="App" style={backgroundStyle}>
        <Navbar />
        {/*<CartPage*/}
        {/*    items = {list_items}*/}
        {/*/>*/}
        {/*<LoginPage />*/}
        {/*    logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"*/}
        {/*/>*/}
        <HomePage
            logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"
            cart="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
            login="https://www.trzcacak.rs/myfile/detail/3-39618_login-icon-with-transparent-background.png"
            img="https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049"
            items = {list_items}/>
        <ObjectPage
            img='https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'
            currentPriceOption={price.priceOption}
            changePriceOption={priceOptionHandler}
            price={price.price}
            quantity={price.quantity}
            changeQuantity={quantityHandler}/>
        <Footer />
    </div>
  );
}

export default App;
