import React, { useState } from "react";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import DeleteUserAccount from "./DeleteUserAccount";
const EditAccount = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const { email, password } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className='md:flex md:flex-col md:gap-6 mt-10 px-2 sm:px-6 lg:px-8'>
				<div className='md:col-span-1'>
					<div className='px-4 sm:px-0'>
						<h3 className='text-xl  font-bold leading-6 text-gray-900'>
							Change Account
						</h3>
						<p className='mt-1 text-sm text-gray-600'>
							Account Settings. Make sure to not forget your email
							address and password.
						</p>
					</div>
				</div>
				<div className='mt-5 md:mt-0 md:col-span-2'>
					<div className='shadow sm:rounded-md sm:overflow-hidden'>
						<div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
							<ChangeEmail
								handleChange={handleChange}
								email={email}
							/>
							<ChangePassword
								handleChange={handleChange}
								password={password}
							/>
							<DeleteUserAccount />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditAccount;
