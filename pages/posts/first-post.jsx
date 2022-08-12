import Head from "next/head";

import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <h1>First Post</h1>
            <p>Welcome to my first post.</p>
            <p>Nothing more, you can back to the menu.</p>
        </Layout>
      );
}