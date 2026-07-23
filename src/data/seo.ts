import { siteInfo } from './site';

export const siteAlternateName = 'Metal3DPowder';
export const defaultOgImagePath = '/og-image.png';
export const publisherLogoPath = '/favicon.svg';
export const rssFeedPath = '/feed.xml';
export const itemListOrderDescending = 'https://schema.org/ItemListOrderDescending';
export const itemListOrderUnordered = 'https://schema.org/ItemListUnordered';

export const getOrganizationId = (site: URL) => new URL('/#organization', site).toString();
export const getWebsiteId = (site: URL) => new URL('/#website', site).toString();
export const getBrandId = (site: URL) => new URL('/#brand', site).toString();
export const getLogoId = (site: URL) => new URL('/#logo', site).toString();

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

export const buildPublisherSchema = (site: URL) => ({
  '@type': 'Organization',
  '@id': getOrganizationId(site),
  name: siteInfo.operatorLegalName,
  alternateName: siteInfo.operatorName,
  logo: {
    '@type': 'ImageObject',
    '@id': getLogoId(site),
    url: new URL(publisherLogoPath, site).toString(),
    contentUrl: new URL(publisherLogoPath, site).toString(),
    width: 128,
    height: 128,
  },
});

export const buildOrganizationSchema = (site: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': getOrganizationId(site),
  name: siteInfo.operatorLegalName,
  legalName: siteInfo.operatorLegalName,
  alternateName: siteInfo.operatorName,
  url: new URL('/about/', site).toString(),
  email: siteInfo.email,
  logo: buildPublisherSchema(site).logo,
  brand: {
    '@type': 'Brand',
    '@id': getBrandId(site),
    name: siteInfo.brand,
    alternateName: siteAlternateName,
    url: site.toString(),
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteInfo.email,
      availableLanguage: ['en'],
    },
  ],
});

export const buildWebsiteSchema = (site: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': getWebsiteId(site),
  name: siteInfo.brand,
  alternateName: siteAlternateName,
  url: site.toString(),
  inLanguage: 'en',
  publisher: {
    '@id': getOrganizationId(site),
  },
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
  '@id': `${new URL(path, site).toString()}#webpage`,
  name,
  description,
  url: new URL(path, site).toString(),
  isPartOf: {
    '@id': getWebsiteId(site),
  },
  about: {
    '@id': getOrganizationId(site),
  },
});

export const buildCollectionPageSchema = ({
  site,
  path,
  name,
  description,
  items,
  itemListOrder = itemListOrderUnordered,
}: {
  site: URL;
  path: string;
  name: string;
  description: string;
  items: CollectionItem[];
  itemListOrder?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${new URL(path, site).toString()}#webpage`,
  name,
  description,
  url: new URL(path, site).toString(),
  isPartOf: {
    '@id': getWebsiteId(site),
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListOrder,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { url: new URL(item.path, site).toString() } : {}),
    })),
  },
});
