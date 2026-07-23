import { siteInfo } from './site';

export const siteAlternateName = 'Metal3DPowder';
export const defaultOgImagePath = '/og-image.png';
export const publisherLogoPath = '/favicon.svg';
export const rssFeedPath = '/feed.xml';

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

export type CollectionItem = {
  name: string;
  path?: string;
};

export const buildBreadcrumbSchema = (site: URL, items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.path ? { item: new URL(item.path, site).toString() } : {}),
  })),
});

export const buildOrganizationSchema = (site: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteInfo.brand,
  alternateName: siteAlternateName,
  url: site.toString(),
  email: siteInfo.email,
  logo: new URL(publisherLogoPath, site).toString(),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteInfo.email,
      availableLanguage: ['en'],
      areaServed: 'Worldwide',
    },
  ],
});

export const buildContactPageSchema = ({
  site,
  path,
  name,
  description,
}: {
  site: URL;
  path: string;
  name: string;
  description: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name,
  description,
  url: new URL(path, site).toString(),
  about: {
    '@type': 'Organization',
    name: siteInfo.brand,
    url: site.toString(),
    email: siteInfo.email,
  },
});

export const buildCollectionPageSchema = ({
  site,
  path,
  name,
  description,
  items,
}: {
  site: URL;
  path: string;
  name: string;
  description: string;
  items: CollectionItem[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name,
  description,
  url: new URL(path, site).toString(),
  isPartOf: {
    '@type': 'WebSite',
    name: siteInfo.brand,
    url: site.toString(),
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { url: new URL(item.path, site).toString() } : {}),
    })),
  },
});
