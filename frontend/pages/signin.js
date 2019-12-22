import Link from 'next/link';

const SignIn = () => {
	return (
		<>
			Sign in!
			<Link href="/signup">
				<a>Sign up for a new account!</a>
			</Link>
		</>
	);
};

export default SignIn;
