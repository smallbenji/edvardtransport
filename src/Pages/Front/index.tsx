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
								I Edvard Auto sætter vi mennesket i fokus. Vi
								prioriterer vores medarbejderes trivsel,
								sikkerhed og udvikling, hvilket skaber et bedre
								arbejdsmiljø og en stærkere virksomhed. Ved at
								lytte til og værdsætte hver enkelt medarbejders
								behov og bidrag, leverer vi ikke blot bedre
								service for vores kunder, men bygger også en
								sundere og mere effektiv forretning.
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
								I 2024 købte Edvard Auto den første lastbil,
								hvilket markerede begyndelsen på en spændende
								rejse i transportbranchen.
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
								Hos Edvard Auto er der ingen tidspunkter, hvor
								vi ikke kan køre. Vi opererer døgnet rundt,
								24/7, for at sikre, at vores kunders behov altid
								bliver opfyldt. Uanset tidspunktet på dagen
								eller natten, står Edvard Autos pålidelige
								vognmænd klar til at levere effektiv og hurtig
								transport.
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
