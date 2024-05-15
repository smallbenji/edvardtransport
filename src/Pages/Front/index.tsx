import { Grid } from "@mui/material";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Index.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Index = () => {
	return (
		<>
			<Header />
			<div className="MainPage">
				<Grid container spacing={0}>
					<Grid item md={12} sm={12}>
						<div className="Vognmand">
							<h1>Vogmandsforretning med fokus på mennesket</h1>
						</div>
					</Grid>
					<Grid item md={4} sm={12}>
						<div className="mennesket">
							<div className="Title">
								<PermIdentityIcon />
								<h2>Mennesket</h2>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Dolorem laboriosam mollitia
								quos voluptate, illo harum! Facere omnis ut
								fugit porro expedita placeat, corrupti dicta
								tempore dolorem voluptatibus quaerat adipisci
								tenetur.
							</p>
						</div>
					</Grid>
					<Grid item md={4} sm={12}>
						<div className="lastbil">
							<div className="Title">
								<LocalShippingIcon />
								<h2>Lastbilen</h2>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Dolorem laboriosam mollitia
								quos voluptate, illo harum! Facere omnis ut
								fugit porro expedita placeat, corrupti dicta
								tempore dolorem voluptatibus quaerat adipisci
								tenetur.
							</p>
						</div>
					</Grid>
					<Grid item md={4} sm={12}>
						<div className="døgnet">
							<div className="Title">
								<AccessTimeIcon />
								<h2>Alle timer i døgnet</h2>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Dolorem laboriosam mollitia
								quos voluptate, illo harum! Facere omnis ut
								fugit porro expedita placeat, corrupti dicta
								tempore dolorem voluptatibus quaerat adipisci
								tenetur.
							</p>
						</div>
					</Grid>
				</Grid>
			</div>
			<Footer />
		</>
	);
};

export default Index;
