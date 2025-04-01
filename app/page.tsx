import Head from "next/head";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Ubuntu Health | Streamlined EMR for Independent Practitioners
				</title>
				<meta
					name="description"
					content="Comprehensive EMR/EHR solution designed specifically for independent practitioners and small clinics"
				/>
			</Head>

			{/* Header */}
			<Navbar />

			{/* Hero Section */}
			<Landing />
			<ToastContainer />

			{/* Features Section */}
			<Services />

			{/* Pricing Section */}
			<Pricing />

			<Footer />
		</>
	);
}
