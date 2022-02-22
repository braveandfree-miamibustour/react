import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './components/Checkout';
import GroupCheckout from "./components/GroupCheckout";
import AdditionalCheckout from "./components/AdditionalCheckout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Home from "./components/Home";
import Booknow from './components/Booknow';
import Prices from "./components/Prices";
import Faqs from "./components/Faqs";
import Contactus from "./components/Contactus";
import './App.css';
// import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	// const { i18n } = useTranslation();

	// function handleClick(lang){
	// 	i18n.changeLanguage(lang);
	// }


  return (
	  
    <Router>
    <div className="App">
		{/* <nav>
			<button onClick={()=>handleClick('en')}>
				English
			</button>
			<button onClick={()=>handleClick('sp')}>
				Espanol
			</button>
		</nav> */}
	  <Switch>
      <Route exact path='/'>
							<Home />
					</Route>
      <Route path='/Prices'>
			<Prices />
			</Route>
      <Route path='/Faqs'>
					<Faqs />
			</Route>
      <Route path='/ContactUs'>
					<Contactus />
			</Route>
      <Route path='/BookNow'>
					<Booknow />
			</Route>
      <Route path='/checkout'>
							<Checkout />
					</Route>
          <Route path='/groupcheckout'>
							<GroupCheckout />
					</Route>
					<Route path='/addOncheckout'>
							<AdditionalCheckout />
					</Route>
      <Route path='/success'>
							<Success />
					</Route>
      <Route path='/cancel'>
						<Cancel />
			</Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
