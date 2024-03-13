"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			{/** Mobile Nav Container */}
			<section className="nav-container">
				<div className="nav-icon" onClick={() => setMenuOpen(!menuOpen)}>
					<div
						className={`nav-icon-bar w-[30px] ${
							menuOpen && `rotate-[45deg]`
						} transition-all duration-300 ease-in-out`}
					></div>
					<div
						className={`nav-icon-bar w-[25px] ${menuOpen && `hidden`}`}
					></div>
					<div
						className={`nav-icon-bar w-[15px] ${
							menuOpen &&
							`w-[30px] rotate-[-45deg] absolute left-2 bottom-[21px]`
						} transition-all`}
					></div>
				</div>
				<div className="nav-logo">
					<Image
						className="object-contain"
						src="/images/logo.png"
						alt="Logo"
						fill
					/>
				</div>
			</section>

			{/** Mobile Nav Dropdown */}
			<section
				className={`${
					!menuOpen ? "nav-dd-closed" : "nav-dd-open"
				} transition-all duration-300`}
			>
				<div className="nav-dd-choice">blah</div>
				<div className="nav-dd-choice">blah</div>
				<div className="nav-dd-choice">blah</div>
				<div className="nav-dd-choice">blah</div>
			</section>
		</>
	);
};

export default Navbar;
