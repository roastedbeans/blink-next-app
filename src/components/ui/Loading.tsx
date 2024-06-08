import React, { useState, useEffect } from 'react';
import { RiEye2Line, RiEyeCloseLine } from '@remixicon/react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { TypewriterEffect } from './typewriter-effect';

const Loading = () => {
	const [isBlinking, setIsBlinking] = useState(true);

	useEffect(() => {
		const blinkInterval = setTimeout(() => {
			setIsBlinking((prevState) => !prevState);
		}, 500); // Adjust blinking speed here

		return () => clearTimeout(blinkInterval);
	}, [isBlinking]);

	return (
		<AnimatePresence>
			<div className='fixed w-full h-screen overflow-clip flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm z-[999]'>
				<MotionConfig transition={{ duration: 0.1 }}>
					{isBlinking ? (
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{ scaleY: 0 }}
							transition={{ duration: 0.3 }}>
							<RiEye2Line />
						</motion.div>
					) : (
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{ scaleY: 0 }}
							transition={{ duration: 0.3 }}>
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
