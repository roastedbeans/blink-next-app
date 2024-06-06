import React from 'react';
import { Button } from '../ui/button';

const ButtonGroup = () => {
	return (
		<>
			<Button
				loading={false}
				size='sm'
				variant={'default'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'ghost'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'outline'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'gradient'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'link'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'destructive'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'secondary-default'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'secondary-ghost'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'secondary-outline'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'secondary-gradient'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'secondary-link'}>
				Click Me!
			</Button>
			<Button
				loading={false}
				size='sm'
				variant={'secondary-destructive'}>
				Click Me!
			</Button>
		</>
	);
};

const ButtonGroupDisabled = () => {
	return (
		<>
			<Button
				loading={true}
				size='sm'
				variant={'default'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'ghost'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'outline'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'gradient'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'link'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'destructive'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'secondary-default'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'secondary-ghost'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'secondary-outline'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'secondary-gradient'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'secondary-link'}>
				Click Me!
			</Button>
			<Button
				loading={true}
				size='sm'
				variant={'secondary-destructive'}>
				Click Me!
			</Button>
		</>
	);
};

export default ButtonGroup;

export { ButtonGroup, ButtonGroupDisabled };
