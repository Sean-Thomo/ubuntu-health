import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WaitingList from "./components/WaitingList";

export default function Home() {
	return (
		<>
			{/* Navbar */}
			<link
				rel="stylesheet"
				href="https://cdn.tailgrids.com/tailgrids-fallback.css"
			/>
			<Navbar />
			<div className="flex min-h-screen flex-col items-center justify-center px-24">
				{/* Landing Section */}
				<Landing />

				{/* Mission Statement */}
				<Mission />

				{/* Services */}
				<Services />

				{/* Pricing */}
				<Pricing />

				{/* Waing List */}
				<WaitingList />
			</div>
		</>
	);
}
