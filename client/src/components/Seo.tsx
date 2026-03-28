import { useEffect } from "react";

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article";
  structuredData?: StructuredData;
};

const SITE_NAME = "The Rok Group";
const SITE_URL = "https://www.therokgroup.co.uk";
const DEFAULT_KEYWORDS =
  "The Rok Group, builders Sussex, builders Surrey, builders Kent, builders South East, home extensions, renovations, new builds, residential construction, project management";

function upsertMeta(attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}='${value}']`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertStructuredData(structuredData?: StructuredData) {
  const existing = document.getElementById("rok-structured-data");

  if (!structuredData) {
    existing?.remove();
    return;
  }

  const script = existing ?? document.createElement("script");
  script.id = "rok-structured-data";
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(structuredData);

  if (!existing) {
    document.head.appendChild(script);
  }
}

export default function Seo({
  title,
  description,
  path,
  image,
  keywords = DEFAULT_KEYWORDS,
  type = "website",
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
    const socialImage = image ?? `${SITE_URL}/og-default.jpg`;

    document.title = title;
    document.documentElement.lang = "en-GB";

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta(
      "name",
      "robots",
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    );
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", socialImage);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", socialImage);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_GB");

    upsertLink("canonical", canonicalUrl);
    upsertStructuredData(structuredData);
  }, [description, image, keywords, path, structuredData, title, type]);

  return null;
}
