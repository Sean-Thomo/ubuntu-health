import DashboardNav from "../components/DashboardNav";
import PrescriptionsTableCard from "../components/Tables/PrescriptionsTable";

export default function Page() {
	return (
		<div className="flex flex-row gap-4 h-screen">
			<div className="w-1/6">
				<div>
					<DashboardNav />
				</div>
			</div>
			<div className="w-5/6 py-6 pr-4">
				<PrescriptionsTableCard />
			</div>
		</div>
	);
}
