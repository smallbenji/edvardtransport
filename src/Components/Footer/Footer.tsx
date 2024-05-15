import { Container } from "@mui/material";

import "./Footer.scss";

function Footer() {
	return (
		<footer>
			<Container maxWidth="lg">
				<div className="Footer">
					<div className="FooterBox">
						<p>Edvard Auto /v Edvard Jacob Falch</p>
						<p>Tlf: +45 40797862</p>
						<p>CVR: 34532001</p>
						<p>Nordskovvej 22, 5750 Ringe</p>
					</div>
					<div className="FooterBox"></div>
					<div className="FooterBox">
						<img src="./benji.png" alt="" />
					</div>
				</div>
				<a href="https://smallbenji.tech">
					<p>Created by: smallbenji</p>
				</a>
			</Container>
		</footer>
	);
}

export default Footer;
