"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Lock, Mail, User, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			acceptTerms: false,
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, "Must be 15 characters or less")
				.required("Required"),
			lastName: Yup.string()
				.max(20, "Must be 20 characters or less")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string()
				.min(8, "Must be at least 8 characters")
				.required("Required"),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref("password")], "Passwords must match")
				.required("Required"),
			acceptTerms: Yup.boolean().oneOf(
				[true],
				"You must accept the terms and conditions"
			),
		}),
		onSubmit: async (values) => {
			console.log(values);
		},
	});

	return (
		<div className="min-h-screen bg-gray-900 text-cyan-50 flex items-center justify-center p-4">
			<div className="bg-gray-800/50 border border-cyan-800/30 rounded-xl p-8 max-w-md w-full shadow-xl shadow-cyan-500/10">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-cyan-400 mb-2">
						Create Account
					</h1>
					<p className="text-cyan-400/70">Join us to get started</p>
				</div>

				<form onSubmit={formik.handleSubmit} className="space-y-6">
					{/* Name Fields */}
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<label
								htmlFor="firstName"
								className="block text-sm font-medium text-cyan-400 mb-1"
							>
								First Name
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<User size={18} className="text-cyan-400/50" />
								</div>
								<input
									id="firstName"
									name="firstName"
									type="text"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.firstName}
									className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									placeholder="John"
								/>
							</div>
							{formik.touched.firstName && formik.errors.firstName ? (
								<p className="text-red-400 text-xs mt-1">
									{formik.errors.firstName}
								</p>
							) : null}
						</div>

						<div>
							<label
								htmlFor="lastName"
								className="block text-sm font-medium text-cyan-400 mb-1"
							>
								Last Name
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<User size={18} className="text-cyan-400/50" />
								</div>
								<input
									id="lastName"
									name="lastName"
									type="text"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastName}
									className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									placeholder="Doe"
								/>
							</div>
							{formik.touched.lastName && formik.errors.lastName ? (
								<p className="text-red-400 text-xs mt-1">
									{formik.errors.lastName}
								</p>
							) : null}
						</div>
					</div>

					{/* Email Field */}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-cyan-400 mb-1"
						>
							Email Address
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Mail size={18} className="text-cyan-400/50" />
							</div>
							<input
								id="email"
								name="email"
								type="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								placeholder="your@email.com"
							/>
						</div>
						{formik.touched.email && formik.errors.email ? (
							<p className="text-red-400 text-xs mt-1">{formik.errors.email}</p>
						) : null}
					</div>

					{/* Password Field */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-cyan-400 mb-1"
						>
							Password
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Lock size={18} className="text-cyan-400/50" />
							</div>
							<input
								id="password"
								name="password"
								type={showPassword ? "text" : "password"}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
								className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								placeholder="••••••••"
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<EyeOff
										size={18}
										className="text-cyan-400/50 hover:text-cyan-400"
									/>
								) : (
									<Eye
										size={18}
										className="text-cyan-400/50 hover:text-cyan-400"
									/>
								)}
							</button>
						</div>
						{formik.touched.password && formik.errors.password ? (
							<p className="text-red-400 text-xs mt-1">
								{formik.errors.password}
							</p>
						) : null}
					</div>

					{/* Confirm Password Field */}
					<div>
						<label
							htmlFor="confirmPassword"
							className="block text-sm font-medium text-cyan-400 mb-1"
						>
							Confirm Password
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Lock size={18} className="text-cyan-400/50" />
							</div>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type={showConfirmPassword ? "text" : "password"}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.confirmPassword}
								className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								placeholder="••••••••"
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center"
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							>
								{showConfirmPassword ? (
									<EyeOff
										size={18}
										className="text-cyan-400/50 hover:text-cyan-400"
									/>
								) : (
									<Eye
										size={18}
										className="text-cyan-400/50 hover:text-cyan-400"
									/>
								)}
							</button>
						</div>
						{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
							<p className="text-red-400 text-xs mt-1">
								{formik.errors.confirmPassword}
							</p>
						) : null}
					</div>

					{/* Terms Checkbox */}
					<div className="flex items-start">
						<div className="flex items-center h-5">
							<input
								id="acceptTerms"
								name="acceptTerms"
								type="checkbox"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								checked={formik.values.acceptTerms}
								className="w-4 h-4 rounded bg-gray-700 border-cyan-800/30 focus:ring-cyan-500/50 text-cyan-400"
							/>
						</div>
						<div className="ml-3 text-sm">
							<label htmlFor="acceptTerms" className="text-cyan-400/80">
								I agree to the{" "}
								<Link href="/terms" className="text-cyan-400 hover:underline">
									Terms and Conditions
								</Link>
							</label>
							{formik.touched.acceptTerms && formik.errors.acceptTerms ? (
								<p className="text-red-400 text-xs mt-1">
									{formik.errors.acceptTerms}
								</p>
							) : null}
						</div>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
					>
						Create Account
					</button>

					{/* Login Link */}
					<div className="text-center text-sm text-cyan-400/70">
						Already have an account?{" "}
						<Link href="/login" className="text-cyan-400 hover:underline">
							Sign in
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUpPage;
