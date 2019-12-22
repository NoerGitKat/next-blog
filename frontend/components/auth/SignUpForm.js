import { useState } from 'react';

const SignUpForm = () => {
	const [formData, setFormData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = event => {
		event.preventDefault();

		// Validate form data

		// Make API call to server to store form data
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setFormData(prevState => ({ ...prevState, [name]: value }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder="Your name..."
					name="name"
					onChange={handleChange}
				/>
				<input
					type="email"
					className="form-control"
					placeholder="Your email..."
					name="email"
					onChange={handleChange}
				/>
				<input
					type="password"
					className="form-control"
					placeholder="Your password..."
					name="password"
					onChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default SignUpForm;
