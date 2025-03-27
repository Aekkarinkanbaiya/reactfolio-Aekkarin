import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li className={active === "home" ? "nav-item active" : "nav-item"}>
								<Link to="/">Home</Link>
							</li>
							<li className={active === "about" ? "nav-item active" : "nav-item"}>
								<Link to="/about">About</Link>
							</li>
							<li className={active === "contact" ? "nav-item active" : "nav-item"}>
								<Link to="/contact">Contact</Link>
							</li>
							{/* ปุ่มดาวน์โหลด Resume และ Transcript */}
							<li className="nav-item download">
								<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
									Resume
								</a>
							</li>
							<li className="nav-item download">
								<a href="/transcript.pdf" target="_blank" rel="noopener noreferrer">
									Transcript
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
