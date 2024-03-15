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
			<div className="home-02">
				<div className="text-4xl sm:text-6xl md:text-7xl lg:text-[105px]">
					From The Sky
				</div>
				<div className="h-line-white w-[70%]"></div>
				<div className="home-02-img-container">
					<div className="home-02-img">
						<Image
							className="object-cover"
							src="/images/sky-01.jpg"
							alt="Aerial Image 01"
							fill
						/>
					</div>
					<div className="home-02-img">
						<Image
							className="object-cover"
							src="/images/sky-02.jpg"
							alt="Aerial Image 02"
							fill
						/>
					</div>
				</div>
				<div className="h-line-white w-[50%]"></div>
				<div className="home-02-sm-text">
					<span>
						<span className="text-nowrap">FAA Licensed Drone Pilot</span>{" "}
						<span className="text-nowrap">
							ready for any aerial project.
						</span>
					</span>
					<span>You picture it, I'll shoot it.</span>
				</div>
			</div>
		</section>
	);
};

export default page;
