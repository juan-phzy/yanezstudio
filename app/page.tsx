import Image from "next/image";
import { PiArrowCircleRightThin } from "react-icons/pi";

const page = () => {
	return (
		<section className="home-container">
			<div className="hero-container">
				<div className="hero-text">
					<span>CAPTURE</span>
					<span>YOUR</span>
					<span>PERFECT SHOT</span>
				</div>
				<div className="hero-btn-container">
					<button className="btn-trns">
						See Services <PiArrowCircleRightThin size={30} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default page;
