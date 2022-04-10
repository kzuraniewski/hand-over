import React from 'react';
import Head from 'next/head';
import '../sass/main.scss';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Hand Over</title>
			</Head>

			<Component {...pageProps} />
		</Layout>
	);
}
