import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name='description' content='Web site created using create-next-app' />

				{/* Google Fonts */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
				<link
					href='https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans&display=swap'
					rel='stylesheet'
				/>

				{/* Fontawesome */}
				<script src='https://kit.fontawesome.com/94c1165c97.js' crossOrigin='anonymous' />
			</Head>

			<body>
				<Main />

				<NextScript />
			</body>
		</Html>
	);
}
