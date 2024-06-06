// utils/idGenerator.js
import { uid } from 'uid';

function getRandomDigits(count: number) {
	let digits = '';
	for (let i = 0; i < count; i++) {
		digits += Math.floor(Math.random() * 10).toString();
	}
	return digits;
}

export function generateClientId(companyName: string) {
	const name = companyName.replace(/\s+/g, '').toUpperCase();
	const date = new Date();
	const year = date.getFullYear().toString().padStart(4, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const UID = uid(4).toUpperCase();
	return `ACL-${name}-${year}${month}${day}-${UID}`;
}

export function generateDemoClientId(companyName: string) {
	const name = companyName.replace(/\s+/g, '').toUpperCase();
	const date = new Date();
	const year = date.getFullYear().toString().padStart(4, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const UID = uid(4).toUpperCase();
	return `DEMO-ACL-${name}-${year}${month}${day}-${UID}`;
}

export function generateReferenceNumber(companyName: string) {
	const name = companyName.replace(/\s+/g, '').toUpperCase();
	const date = new Date();
	const year = date.getFullYear().toString().slice(-2);
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const UID = uid(4).toUpperCase();
	return `${name}-PROMO-${year}${month}-${UID}`;
}
