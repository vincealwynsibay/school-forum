import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useDocument } from "../../hooks/useDocument";
import { auth } from "../../utils/firebase";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import toast from "react-hot-toast";

const navigation = [
	{ name: "Explore Communities", to: "/groups", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const NavigationBar = () => {
	const { user } = useAuthContext();
	const { document } = useDocument("users", user ? user.uid : null);

	const { logout } = useLogout();

	return (
		<Disclosure as='nav' className='bg-gray-800'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<MenuIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex-shrink-0 flex items-center'>
									<Link
										to='/'
										className='font-medium text-indigo-600'
									>
										School Forum
									</Link>
								</div>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-4'>
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.to}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"px-3 py-2 rounded-md text-sm font-medium"
												)}
												aria-current={
													item.current
														? "page"
														: undefined
												}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								{/* Profile dropdown */}
								{user && document && (
									<Menu as='div' className='ml-3 relative'>
										<div>
											<Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
												<span className='sr-only'>
													Open user menu
												</span>
												<img
													className='h-8 w-8 rounded-full'
													src={`${document.photoURL}`}
													alt=''
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter='transition ease-out duration-100'
											enterFrom='transform opacity-0 scale-95'
											enterTo='transform opacity-100 scale-100'
											leave='transition ease-in duration-75'
											leaveFrom='transform opacity-100 scale-100'
											leaveTo='transform opacity-0 scale-95'
										>
											<Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
												<Menu.Item>
													{({ active }) => (
														<Link
															to={`/profile/${user.uid}`}
															className={classNames(
																active
																	? "bg-gray-100"
																	: "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Your Profile
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link
															to='/settings/account'
															className={classNames(
																active
																	? "bg-gray-100"
																	: "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Settings
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href='#'
															onClick={() => {
																logout();
																toast.success(
																	"Successfully Signed Out"
																);
															}}
															className={classNames(
																active
																	? "bg-gray-100"
																	: "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Sign out
														</a>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								)}

								{!user && (
									<>
										<div className='my-5 sm:my-8 sm:flex sm:justify-center sm:items-center lg:justify-start'>
											<div className='rounded-md shadow'>
												<Link
													to='login'
													className='w-full flex items-center justify-center px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
												>
													Login
												</Link>
											</div>
											<div className='hidden sm:inline mt-3 sm:mt-0 sm:ml-3'>
												<Link
													to='register'
													className='w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
												>
													Register
												</Link>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as={Link}
									to={item.to}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavigationBar;
