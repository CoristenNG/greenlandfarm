// components/SEO.tsx
import { Helmet } from "react-helmet-async";

type Props = {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
};

const SEO = ({ title, description, keywords = [], image, url }: Props) => {
    const fullKeywords = [
        ...keywords,
        "Greenland",
        "Lagos",
        "Nigeria",
        "stephanyemmitty",
        "Stephen Oluwasusi",
        "Greenland Farm",
        "fresh produce",
        "agriculture",
        "sustainable farming",
        "local produce",
        "farm to table",
        "farm produce",
        "ecommerce",
        "Nigeria",
        "greenhouse",
        "fresh vegetables",
        "organic",
        "Lagos market",
    ];

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={fullKeywords.join(", ")} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};

export default SEO;
