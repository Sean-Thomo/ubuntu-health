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
			// rememberMe: false,
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
				// Replace with your actual API endpoint
				const response = await fetch("/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				if (!response.ok) {
					throw new Error("Invalid credentials");
				}

				const data = await response.json();
				toast.success("Login successful!");
				router.push("/dashboard");
			} catch (error) {
				toast.error(
					error instanceof Error
						? error.message
						: "Login failed. Please try again."
				);
			} finally {
				setIsLoading(false);
			}
		},
	});

	return (
		<div className="min-h-screen bg-gray-900 text-cyan-50 flex items-center justify-center p-4">
			<div className="bg-gray-800/50 border border-cyan-800/30 rounded-xl p-8 max-w-md w-full shadow-xl shadow-cyan-500/10">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-cyan-400 mb-2">
						Welcome Back
					</h1>
					<p className="text-cyan-400/70">Sign in to your account</p>
				</div>

				<form onSubmit={formik.handleSubmit} className="space-y-6">
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
								autoComplete="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								placeholder="your@email.com"
								disabled={isLoading}
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
								autoComplete="current-password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
								className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								placeholder="••••••••"
								disabled={isLoading}
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center"
								onClick={() => setShowPassword(!showPassword)}
								disabled={isLoading}
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

					{/* Remember Me & Forgot Password */}
					{/* <div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="rememberMe"
								name="rememberMe"
								type="checkbox"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								checked={formik.values.rememberMe}
								className="w-4 h-4 rounded bg-gray-700 border-cyan-800/30 focus:ring-cyan-500/50 text-cyan-400"
								disabled={isLoading}
							/>
							<label
								htmlFor="rememberMe"
								className="ml-2 block text-sm text-cyan-400/80"
							>
								Remember me
							</label>
						</div>
						<div className="text-sm">
							<Link
								href="/forgot-password"
								className="text-cyan-400 hover:underline"
							>
								Forgot password?
							</Link>
						</div>
					</div> */}

					{/* Submit Button */}
					<button
						type="submit"
						disabled={isLoading}
						className={`w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-medium shadow-lg transition-all ${
							isLoading
								? "opacity-70 cursor-not-allowed"
								: "hover:shadow-cyan-500/40"
						}`}
					>
						{isLoading ? (
							<span className="flex items-center justify-center">
								<svg
									className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Signing in...
							</span>
						) : (
							"Sign In"
						)}
					</button>

					{/* Sign Up Link */}
					<div className="text-center text-sm text-cyan-400/70">
						Don&lsquo;t have an account?{" "}
						<Link href="/signup" className="text-cyan-400 hover:underline">
							Sign up
						</Link>
					</div>
				</form>

				{/* Social Login Options */}
				<div className="mt-8">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-cyan-800/30"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-gray-800/50 text-cyan-400/70">
								Or continue with
							</span>
						</div>
					</div>

					<div className="mt-6 grid gap-3">
						<button
							type="button"
							disabled={isLoading}
							className="w-full inline-flex justify-center py-2 px-4 border border-cyan-800/30 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-cyan-400 hover:bg-gray-600 transition-colors"
						>
							Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
