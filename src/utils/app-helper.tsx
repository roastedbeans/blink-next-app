export function paginateData<T>(data: T[], itemsPerPage: number): T[] {
	return data.slice(0, itemsPerPage);
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);

	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	return formattedDate;
}

export function utcToDate(utcDateStr: string): Date {
	return new Date(utcDateStr);
}

export function formatDateShort(dateString: string): string {
	const date = new Date(dateString);

	const monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	const month = monthNames[date.getUTCMonth()];
	const day = date.getUTCDate();

	const formattedDate = `${month} ${day}`;
	return formattedDate;
}

export function formatDateMedium(dateString: string): string {
	const date = new Date(dateString);

	const monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	const month = monthNames[date.getUTCMonth()];
	const day = date.getUTCDate();
	const year = date.getFullYear();

	const formattedDate = `${month} ${day}, ${year}`;
	return formattedDate;
}

export function formatDateSpecial(dateInput: Date): string {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const suffixes = ['th', 'st', 'nd', 'rd'];

	const day = dateInput.getDate();
	const month = months[dateInput.getMonth()];
	const hours = dateInput.getHours();
	const minutes = dateInput.getMinutes();

	const ordinalSuffix = (day: number) => {
		const v = day % 100;
		return day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
	};

	const hourFormatted = hours % 12 || 12; // Convert to 12-hour format
	const minuteFormatted = minutes < 10 ? `0${minutes}` : minutes; // Ensure two digits
	const amPm = hours < 12 ? 'AM' : 'PM';

	return `${month} ${ordinalSuffix(day)} at ${hourFormatted}:${minuteFormatted} ${amPm}`;
}

export function formatTime(dateInput: Date): string {
	const hours = dateInput.getHours();
	const minutes = dateInput.getMinutes();

	const hourFormatted = hours % 12 || 12; // Convert to 12-hour format
	const minuteFormatted = minutes < 10 ? `0${minutes}` : minutes; // Ensure two digits
	const amPm = hours < 12 ? 'AM' : 'PM';

	return `${hourFormatted}:${minuteFormatted} ${amPm}`;
}

export function formatTimeString(isoDateString: string): string {
	const date = new Date(isoDateString);

	// Extract hours and minutes
	let hours = date.getHours();
	const minutes = date.getMinutes();

	// Determine AM or PM suffix
	const ampm = hours >= 12 ? 'PM' : 'AM';

	// Convert hour from 24-hour to 12-hour format
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'

	// Format minutes to always be two digits
	const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;

	// Format time in desired format
	return `${hours}:${minutesFormatted}${ampm}`;
}

export function transformDateFormInput(dateString: string): string {
	const date = new Date(dateString);
	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const day = String(date.getUTCDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

export function containsEmail(str: string): boolean {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,64}\b/;
	return emailPattern.test(str);
}

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalizeFirstLetter(word: string): string {
	if (!word) {
		return word;
	}

	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function capitalizeFirstLetterOfEveryWord(sentence: string): string {
	if (!sentence) {
		return sentence;
	}

	return sentence
		.split(' ') // Split the sentence into words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
		.join(' '); // Join the words back into a sentence
}

export function deslugify(slug: string): string {
	return slug
		.split(/[-_]/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function truncate(text: string, numberOfWords: number): string {
	return text.split(' ').slice(0, numberOfWords).join(' ') + '...';
}

export function transformImageUrl(url: string): string {
	const queryParams = '?w=372&h=372&border=0,55FF0000';
	return `${url}${queryParams}`;
}

export function formatPhoneNumber(phoneNumberString: string) {
	// Check if the phone number string is null or less than 10 characters
	if (!phoneNumberString || phoneNumberString.length < 10) {
		return; // Return nothing if the phone number is null or less than 10 characters
	}

	// Remove all non-digit characters from the string
	const cleaned = ('' + phoneNumberString).replace(/\D/g, '');

	// Check if the cleaned phone number has at least 10 digits
	if (cleaned.length < 10) {
		throw new Error('The phone number is too short to format.');
	}

	// Extract the area code, first three digits, and last four digits
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

	if (match) {
		// Reformat the extracted segments into the desired format
		return `(${match[1]}) ${match[2]}-${match[3]}`;
	} else {
		throw new Error('The phone number could not be formatted.');
	}
}

export function generateVerificationCode() {
	const min = 100000;
	const max = 999999;
	return Math.floor(Math.random() * (max - min + 1) + min).toString();
}

export function convertToSlug(name: string) {
	if (!name) {
		return name;
	}
	const slugName = name
		.toLowerCase() // Convert to lowercase
		.replace(/[^\w\s-]/g, '') // Remove non-word characters except spaces and dashes
		.replace(/\s+/g, '-') // Replace spaces with dashes
		.replace(/--+/g, '-') // Replace multiple dashes with single dash
		.trim(); // Trim leading/trailing whitespace

	return slugName;
}
