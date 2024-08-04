import React from "react";
import { FieldInputProps, FieldMetaProps } from "formik";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

type CustomFormFieldProps = {
	name: string; // Name of the form field
	label: string; // Label for the form field
	iconSrc: string; //Icon for the form field
	iconAlt: string; //IconAlt for the icon
	type: string; // Input type (e.g., text, email, password)
	placeholder?: string; // Placeholder text for the input field
	field: FieldInputProps<any>; // Field input props from Formik
	meta: FieldMetaProps<any>; // Meta information from Formik
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
				className="flex items-center justify-center rounded-lg bg-gray-50 mt-2 pb-4 
                w-[18rem] md:w-[20rem]"
			>
				{iconSrc && (
					<Image
						src={iconSrc}
						alt={iconAlt || "Icon"}
						height={24}
						width={24}
						className="ml-2"
					/>
				)}

				<input
					type={type}
					id={name}
					{...field}
					placeholder={placeholder}
					className="text-gray-900 block border-0 flex-1 min-w-0 w-full text-sm
                    p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 
                    dark:text-white"
				/>
			</div>
			{meta.touched && meta.error ? (
				<div className="text-red-500 text-sm">{meta.error}</div>
			) : null}
		</div>
	);
};
export default CustomFormField;
