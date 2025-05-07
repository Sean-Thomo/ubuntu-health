"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Password is required"),
		}),
		onSubmit: async (values) => {
			setIsLoading(true);
			try {
				const response = await fetch("http://localhost:5290/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				const data = await response.json();

				if (!response.ok) {
					toast.error(`Login failed: ${data.message}`);
					return;
				}

				localStorage.setItem("token", data.token);
				localStorage.setItem("licenseNumber", data.licenseNumber);

				toast.success("Login successful!");
				router.push(`/dashboard/${data.licenseNumber}`);
			} catch (err) {
				console.error(`Error logging in: ${err}`);
				toast.error("An unexpected error occurred");
			} finally {
				setIsLoading(false);
			}
		},
	});

	return (
		<div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
			<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md w-full">
				<div className="text-center mb-8">
					<div
						className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center
          justify-center mb-4"
					>
						<Lock className="text-blue-600" size={24} />
					</div>
					<h1 className="text-2xl font-semibold text-gray-800">
						Medical Portal Login
					</h1>
					<p className="text-gray-600 mt-2">Access your EMR system</p>
				</div>

				<form onSubmit={formik.handleSubmit} className="space-y-6">
					{/* Email Field */}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Email Address *
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Mail className="text-gray-400" size={16} />
							</div>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md
                text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500
                focus:border-blue-500"
								placeholder="your@email.com"
								disabled={isLoading}
							/>
						</div>
						{formik.touched.email && formik.errors.email ? (
							<p className="text-red-600 text-xs mt-1">{formik.errors.email}</p>
						) : null}
					</div>

					{/* Password Field */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Password *
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Lock className="text-gray-400" size={16} />
							</div>
							<input
								id="password"
								name="password"
								type={showPassword ? "text" : "password"}
								autoComplete="current-password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
								className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md
                text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500
                focus:border-blue-500"
								placeholder="••••••••••••••••"
								disabled={isLoading}
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center"
								onClick={() => setShowPassword(!showPassword)}
								disabled={isLoading}
							>
								{showPassword ? (
									<Eye
										className="text-gray-400 hover:text-gray-500"
										size={16}
									/>
								) : (
									<EyeOff
										className="text-gray-400 hover:text-gray-500"
										size={16}
									/>
								)}
							</button>
						</div>
						{formik.touched.password && formik.errors.password ? (
							<p className="text-red-600 text-xs mt-1">
								{formik.errors.password}
							</p>
						) : null}
					</div>

					{/* Forgot Password */}
					<div className="flex justify-end">
						<Link
							href="/forgot-password"
							className="text-sm text-blue-600 hover:underline"
						>
							Forgot password?
						</Link>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						disabled={isLoading}
						className={`w-full text-white py-2 px-4 border border-transparent rounded-md
              shadow-sm text-sm font-medium  bg-blue-600 hover:bg-blue-700 focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
								isLoading ? "opacity-70 cursor-not-allowed" : ""
							}`}
					>
						{isLoading ? (
							<span className="flex items-center justify-center">
								<svg
									className="animate-spin -ml-1 mr-3 h-4 w-4 "
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0
                    3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Signing in...
							</span>
						) : (
							"Sign In"
						)}
					</button>

					{/* Sign Up Link */}
					<div className="text-center text-sm text-gray-600">
						Don&lsquo;t have an account?{" "}
						<Link href="/signup" className="text-blue-600 hover:underline">
							Register now
						</Link>
					</div>
				</form>

				{/* Social Login Option */}
				<div className="mt-8">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-white text-gray-500">
								Or continue with
							</span>
						</div>
					</div>

					<div className="mt-6">
						<button
							type="button"
							disabled={isLoading}
							className="w-full inline-flex justify-center py-2 px-4 border border-gray-300
              rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							<svg
								className="w-5 h-5 mr-2"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933
                2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907
                2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173
                12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
								/>
							</svg>
							Sign in with Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
