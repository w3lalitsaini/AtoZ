import React from "react";
import { Title, Meta, Link as HeadLink } from "react-head";

const Seo = ({ title, description, keywords, image, url, schemaMarkup }) => {
  return (
    <>
      {/* Basic SEO */}
      {title && <Title>{title}</Title>}
      {description && <Meta name="description" content={description} />}
      {keywords && <Meta name="keywords" content={keywords} />}
      {url && <HeadLink rel="canonical" href={url} />}

      {/* Open Graph */}
      {title && <Meta property="og:title" content={title} />}
      {description && <Meta property="og:description" content={description} />}
      <Meta property="og:type" content="website" />
      {url && <Meta property="og:url" content={url} />}
      {image && <Meta property="og:image" content={image} />}

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      {title && <Meta name="twitter:title" content={title} />}
      {description && <Meta name="twitter:description" content={description} />}
      {image && <Meta name="twitter:image" content={image} />}

      {/* JSON-LD Structured Data */}
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      )}
    </>
  );
};

export default Seo;
