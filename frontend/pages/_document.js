import Document, { Html, Head, Main, NextScript } from 'next/document';
import HeadContent from './../components/HeadContent';
import Layout from './../components/Layout';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<HeadContent />
				</Head>
				<body>
					<Layout>
						<Main />
					</Layout>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
