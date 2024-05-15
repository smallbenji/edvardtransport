import { useState } from "react";
import { AppBar, Button, Drawer, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<div className="AppBarLogoName">
					<h1>Edvard Auto</h1>
				</div>
				<div style={{ flexGrow: 1 }}></div>
				<Button onClick={handleOpen} variant="contained">
					<MenuIcon />
				</Button>
				<Drawer anchor="right" open={open} onClose={handleOpen}>
					<Button variant="contained">Transport</Button>
					<Button variant="contained">Værksted</Button>
					<Button variant="contained">Vikariat</Button>
					<Button variant="contained">Bed And Breakfast</Button>
				</Drawer>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
