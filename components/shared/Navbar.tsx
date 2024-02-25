"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<section className="nav-container">
			<div className="nav-icon" onClick={() => setMenuOpen(!menuOpen)}>
				<div
					className={`nav-icon-bar w-[30px] ${
						menuOpen && `rotate-[45deg]`
					} transition-all`}
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
	);
};

export default Navbar;
