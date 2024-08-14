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
				className="bg-secondary-800 flex items-center justify-center rounded-lg mt-2
                w-[18rem] md:w-[20rem]"
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
					className="bg-secondary-800 rounded-tr-lg rounded-br-lg text-gray-900 border-0 min-w-0 w-full text-sm
                    p-2 focus:bg-secondary-800 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
				/>
			</div>
			{meta.touched && meta.error ? (
				<div className="text-red-500 text-sm">{meta.error}</div>
			) : null}
		</div>
	);
};
export default CustomFormField;
