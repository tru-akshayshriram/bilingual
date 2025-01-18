import Link from 'next/link';

import data from '../data.json'
import { languages } from '@/constants';


export default function Home({ locale, site }) {
    // console.log(data);

    // console.log("Site:", site);




    return (
        <div>
            <h1>{site}</h1>
            <p>Current Locale: {locale}</p>
            <p>
                <Link href="/" locale="en">
                    English
                </Link>{' '}
                |{' '}
                <Link href="/" locale="de">
                    German
                </Link>
            </p>
        </div>
    );
}

export async function getStaticProps(context) {

    const { locale } = context;

    console.log(context);


    const contentfulModel = languages[context.locale].model

    const site = data.fields.title[contentfulModel]

    return {
        props: {
            site,
            locale: locale || 'en',                     // Default locale to 'en'
        },
    };
}