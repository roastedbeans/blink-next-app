import React from 'react';
import { TextInput } from '@tremor/react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Input } from '../ui/input';

const InputGroup = () => {
	return (
		<>
			<div className='w-full '>
				<Input
					id='search'
					icon={<MagnifyingGlass />}
					placeholder='Search...'
					type='text'
					error={false}
					errorMessage={'invalid search'}
				/>
			</div>
			<div className='w-full'>
				<Input
					id='username'
					placeholder='Username'
					type='text'
					error={true}
					disabled={false}
					errorMessage={'invalid username'}
				/>
			</div>
			<div className='w-full'>
				<Input
					id='disabled'
					placeholder='disabled'
					type='text'
					error={false}
					disabled={true}
					errorMessage={'invalid'}
				/>
			</div>
			<div className='w-full'>
				<Input
					value={'password'}
					id='password'
					placeholder='Password'
					type='password'
					error={false}
					disabled={false}
					errorMessage={'invalid'}
				/>
			</div>
		</>
	);
};

export default InputGroup;
