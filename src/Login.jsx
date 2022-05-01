import React from 'react';

function Login() {
	return (
		<div className="bg-gray-100 flex justify-center p-10">
			<div className=" p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
				<div className="space-y-6">
					<h5 className="text-2xl font-medium text-gray-900">
						Sign in to our platform
					</h5>
					<h1 for="email" className="block text-lg font-medium text-gray-900">
						Your email
					</h1>
					<input
						type="email"
						placeholder="Please enter Email"
						className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
					/>
					<label
						for="password"
						className="block text-lg font-medium text-gray-900"
					>
						Your password
					</label>
					<input
						type="password"
						placeholder="Please enter Password"
						className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
					/>
					<div className="flex justify-between">
						<div>
							<input
								type="checkbox"
								class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
							/>
							<label for="remember" class="font-medium text-gray-900 ">
								Remember me
							</label>
						</div>
						<a
							href="#"
							className="ml-auto text-sm text-blue-700 hover:underline"
						>
							Lost Password?
						</a>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3"
					>
						Login to your account
					</button>
					<div class="text-sm font-medium text-gray-500">
						Not registered?{' '}
						<a href="#" class="text-blue-700 hover:underline ">
							Create account
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
