import Image from "next/image";
import React from "react";

type ButtonProps = {
	isLoading: boolean;
	className?: string;
	label?: string;
};

const SubmitButton = ({ isLoading, className, label }: ButtonProps) => {
	return (
		<button
			type="submit"
			disabled={isLoading}
			className={
				className ??
				`flex justify-center text-primary-50 bg-primary-700 font-medium rounded-lg 
                min-w-36 text-md mt-2 p-2 text-center hover:bg-primary-800 focus:outline-none 
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
				label
			)}
		</button>
	);
};

export default SubmitButton;
