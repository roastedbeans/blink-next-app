import React, { useState, useEffect } from 'react';
import { RiEye2Line, RiEyeCloseLine } from '@remixicon/react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { TypewriterEffect } from './typewriter-effect';

const Loading = () => {
	const [isBlinking, setIsBlinking] = useState(true);

	useEffect(() => {
		const blinkInterval = setTimeout(() => {
			setIsBlinking((prevState) => !prevState);
		}, 400); // Adjust blinking speed here

		return () => clearTimeout(blinkInterval);
	}, [isBlinking]);

	return (
		<AnimatePresence>
			<div className='fixed w-full h-screen overflow-clip flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm z-[999]'>
				<MotionConfig transition={{ duration: 0.4, ease: 'easeInOut' }}>
					{isBlinking ? (
						<motion.div
							initial={{ scale: 0, opacity: 0.4 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}>
							<RiEye2Line />
						</motion.div>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<RiEyeCloseLine />
						</motion.div>
					)}
				</MotionConfig>

				<TypewriterEffect
					words={[{ text: 'blinking...' }]}
					className='lg:text-lg md:text-md sm:text-sm justify-center text-secondary dark:text-dark-secondary'
				/>
			</div>
		</AnimatePresence>
	);
};

export default Loading;
