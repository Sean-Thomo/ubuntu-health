import Image from "next/image";
import React from "react";

interface ButtonProps {
	isLoading: boolean;
	className?: string;
	children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
	return (
		<button
			type="submit"
			disabled={isLoading}
			className={
				className ??
				`flex justify-center text-primary-50 bg-primary-600 font-medium rounded-2xl 
                min-w-36 text-md mt-2 px-3 py-2 text-center hover:bg-primary-700 focus:outline-none 
                focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800`
			}
		>
			{isLoading ? (
				<div className="flex items-center gap-4">
					<Image
						src="/assets/icons/loader.svg"
						alt="Loader"
						height={24}
						width={24}
						className="animate-spin"
					/>{" "}
					Loading ...
				</div>
			) : (
				children
			)}
		</button>
	);
};

export default SubmitButton;
