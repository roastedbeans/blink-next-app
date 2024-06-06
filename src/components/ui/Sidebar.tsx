'use client';
import { Network, SquaresFour } from '@phosphor-icons/react';
import { RiEye2Line, RiEyeCloseLine } from '@remixicon/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
	const router = useRouter();
	const path = usePathname();

	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};
	console.log(path);

	let isDashboard;
	let isBranches;
	if (path) {
		isDashboard = path.includes('/dashboard');
		isBranches = path.includes('/branches');
	}

	return (
		<AnimatePresence>
			<div
				className={`${
					openMenu ? 'max-w-48' : 'max-w-16'
				} md:max-w-64 w-full bg-background dark:bg-dark-background shadow-lg dark:shadow-dark-xl transition-all sidebar`}>
				<div className='md:pl-8 pl-5 py-8 space-y-6 w-full min-h-screen h-full relative'>
					<button
						onClick={handleOpenMenu}
						className={`${
							openMenu ? 'left-[172px]' : 'left-[44px]'
						} absolute top-12 p-1 rounded-full bg-gradient-to-b from-secondary/80 dark:from-dark-secondary/80 to-secondary dark:to-dark-secondary backdrop-blur-md shadow-lg transition-all md:hidden block`}>
						<RiEyeCloseLine
							size={32}
							className={`${
								openMenu ? 'scale-y-100' : 'scale-y-0 opacity-0'
							} transition-all  delay-100 text-white dark:text-secondary absolute`}
						/>
						<RiEye2Line
							size={32}
							className={`${
								openMenu ? 'scale-y-0 opacity-0' : 'scale-y-100 '
							} transition-all  delay-100 text-white dark:text-secondary`}
						/>
					</button>
					<h1 className='text-xl font-bold uppercase md:visible invisible text-textColor dark:text-dark-textColor'>
						Blink
					</h1>

					<ul className='text-dark-300 w-full space-y-6 min-h-screen h-full overflow-hidden'>
						<li
							className={`flex justify-between w-full ${
								isDashboard
									? 'text-textColor dark:text-dark-textColor font-semibold'
									: 'text-textColor-emphasis dark:text-dark-textColor-emphasis font-normal'
							}`}>
							<Link
								href='/dashboard'
								className='flex gap-2 w-fit items-center'>
								<SquaresFour size={24} />
								<span className={`${openMenu ? 'block' : 'md:block hidden'}`}>Dashboard</span>
							</Link>

							{isDashboard && (
								<motion.div
									className='bg-secondary text-secondary w-[2px] h-fit rounded-l-full cursor-pointer '
									whileHover={{ scaleX: 2 }}
									initial={{ translateX: 20 }}
									animate={{ translateX: 0 }}
									exit={{ translateX: 20 }}>
									&nbsp;
								</motion.div>
							)}
						</li>
						<li
							className={`flex justify-between w-full ${
								isBranches
									? 'text-textColor dark:text-dark-textColor font-semibold'
									: 'text-textColor-emphasis dark:text-dark-textColor-emphasis font-normal'
							}`}>
							<Link
								href='/branches'
								className='flex gap-2 w-fit items-center'>
								<Network size={24} />
								<span className={`${openMenu ? 'block' : 'md:block hidden'}`}>Branches</span>
							</Link>

							{isBranches && (
								<motion.div
									className='bg-secondary text-secondary w-[2px] h-fit rounded-l-full cursor-pointer '
									whileHover={{ scaleX: 2 }}
									initial={{ translateX: 20 }}
									animate={{ translateX: 0 }}
									exit={{ translateX: 20 }}>
									&nbsp;
								</motion.div>
							)}
						</li>
					</ul>
				</div>
			</div>
			{openMenu && (
				<button
					onClick={handleOpenMenu}
					className='w-full h-screen bg-black/10 backdrop-blur-sm fixed m-0 p-0 z-50 md:hidden block'></button>
			)}
		</AnimatePresence>
	);
};

export default Sidebar;
