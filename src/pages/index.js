import Link from 'next/link';


export default function Home({ message, locale }) {
    return (
        <div>
            <h1>{message.welcome}</h1>
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

    console.log('Locale:', locale); // Debug locale

    // Localized messages
    const messages = {
        en: { welcome: 'Welcome' },
        de: { welcome: 'Willkommen' },
    };

    return {
        props: {
            message: messages[locale] || messages['en'], // Fallback to English if locale is not found
            locale: locale || 'en',                     // Default locale to 'en'
        },
    };
}