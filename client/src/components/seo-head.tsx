"use client"

import { useLanguage } from "@/context/language-context"
import { Helmet } from "react-helmet"

interface SEOMetadata {
  title: {
    de: string
    en: string
  }
  description: {
    de: string
    en: string
  }
  keywords?: {
    de: string
    en: string
  }
  canonicalUrl?: string
  ogImage?: string
}

export default function SEOHead({ metadata }: { metadata: SEOMetadata }) {
  const { language } = useLanguage()
  
  const title = language === "de" ? metadata.title.de : metadata.title.en
  const description = language === "de" ? metadata.description.de : metadata.description.en
  const keywords = metadata.keywords ? (language === "de" ? metadata.keywords.de : metadata.keywords.en) : ""
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {metadata.ogImage && <meta property="og:image" content={metadata.ogImage} />}
      {metadata.canonicalUrl && <link rel="canonical" href={metadata.canonicalUrl} />}
      
      {/* Language alternates for SEO */}
      <link rel="alternate" hrefLang="de" href={`${window.location.origin}?lang=de`} />
      <link rel="alternate" hrefLang="en" href={`${window.location.origin}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={`${window.location.origin}`} />
      
      {/* Language meta tag */}
      <meta httpEquiv="content-language" content={language} />
    </Helmet>
  )
}