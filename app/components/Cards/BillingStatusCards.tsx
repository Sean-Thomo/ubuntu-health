import React from "react";
import { CreditCard } from "lucide-react";

interface BillingStatusCardsProps {
	totalPaid: number;
	totalPending: number;
	totalOverdue: number;
}

const BillingStatusCards = ({
	totalPaid,
	totalPending,
	totalOverdue,
}: BillingStatusCardsProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
			<div className="border rounded-lg p-4">
				<div className="flex justify-between items-center">
					<div>
						<p className="text-sm ">Total Paid</p>
						<p className="text-2xl font-semibold text-green-400">
							R{totalPaid.toLocaleString()}
						</p>
					</div>
					<div className="p-3 rounded-full bg-green-900/30 text-green-400">
						<CreditCard size={20} />
					</div>
				</div>
			</div>

			<div className="border rounded-lg p-4">
				<div className="flex justify-between items-center">
					<div>
						<p className="text-sm ">Pending Payments</p>
						<p className="text-2xl font-semibold text-yellow-400">
							R{totalPending.toLocaleString()}
						</p>
					</div>
					<div className="p-3 rounded-full bg-yellow-900/30 text-yellow-400">
						<CreditCard size={20} />
					</div>
				</div>
			</div>

			<div className="border rounded-lg p-4">
				<div className="flex justify-between items-center">
					<div>
						<p className="text-sm ">Overdue</p>
						<p className="text-2xl font-semibold text-red-400">
							R{totalOverdue}
						</p>
					</div>
					<div className="p-3 rounded-full bg-red-900/30 text-red-400">
						<CreditCard size={20} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BillingStatusCards;
