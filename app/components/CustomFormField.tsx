import React from "react";
import { FieldInputProps, FieldMetaProps } from "formik";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

type CustomFormFieldProps = {
	name: string;
	label: string;
	iconSrc: string;
	iconAlt: string;
	type: string;
	placeholder?: string;
	field: FieldInputProps<any>;
	meta: FieldMetaProps<any>;
};

const CustomFormField: React.FC<CustomFormFieldProps> = ({
	name,
	label,
	iconSrc,
	iconAlt,
	type,
	placeholder,
	field,
	meta,
}) => {
	return (
		<div className="mb-4">
			<label htmlFor={name} className="font-semibold text-md pb-2">
				{label}
			</label>
			<div
				className="bg-primary-50 flex items-center justify-center rounded-lg mt-2
                w-[18rem] md:w-[20rem] focus:outline focus:outline-[#f9fafb]"
			>
				{iconSrc && (
					<Image
						src={iconSrc}
						alt={iconAlt || "Icon"}
						height={24}
						width={24}
						className="m-2"
					/>
				)}

				<input
					type={type}
					id={name}
					{...field}
					placeholder={placeholder}
					className="bg-primary-50 text-gray-900 min-w-0 w-full text-sm 
                    p-2 focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
				/>
			</div>
			{meta.error ? (
				<div className="flex p-1 text-[#FF0000] text-sm w-[18rem] md:w-[20rem]">
					{meta.error}
				</div>
			) : null}
		</div>
	);
};
export default CustomFormField;
