import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Form from "./form.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className = "container-fluid">
			<Navbar 
				title="4Geeks"
				home="Home"
				link="Link"
				menuDropdown="Dropdown"
				action="Action"
				anotherAction="Another Action"
				something="Something else here"
				search="Search"
			/>
			<Jumbotron 
				header="Featured"
				title="4Geeks"
				description="With supporting text below as a natural lead-in to additional content."
				button="Go Somewhere"
				footer="Footer"
			/>
			<Form
				email="Email"
				password="Password"
				adress="Address"
				adress2="Address2"
				city="city"
				state="State"
				city1="Lisbon"
				city2="Porto"
				city3="Oeiras"
				city4="Viseu"
				zip="Zip Code"
				check="Check me Out"
				signIn="Sign In"
			/>
			<Footer
				home="Home"
				features="Features"
				pricing="Pricing"
				faqs="FAQs"
				about="About"
				company="2023 Luís Santos, Inc."		
			/>

		</div>
	);
};

export default Home;
