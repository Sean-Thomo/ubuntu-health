import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WaitingList from "./components/WaitingList";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-24">
			{/* Navbar */}
			<Navbar />

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

			<Footer />
		</div>
	);
}
