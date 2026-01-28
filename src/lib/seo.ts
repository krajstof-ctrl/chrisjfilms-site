interface SEOOptions {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

export const updatePageMeta = (
  title: string,
  description: string,
  keywords?: string,
  canonicalUrl?: string,
  ogImage?: string,
  structuredData?: Record<string, unknown>
) => {
  document.title = title;

  const updateMetaTag = (selector: string, attribute: string, content: string) => {
    let tag = document.querySelector(selector);
    if (tag) {
      tag.setAttribute(attribute === 'property' ? 'content' : 'content', content);
    } else {
      tag = document.createElement('meta');
      tag.setAttribute(attribute === 'property' ? 'property' : 'name', selector.match(/\[(.+?)=["'](.+?)["']\]/)?.[2] || '');
      tag.setAttribute('content', content);
      document.head.appendChild(tag);
    }
  };

  updateMetaTag('meta[name="description"]', 'name', description);

  if (keywords) {
    updateMetaTag('meta[name="keywords"]', 'name', keywords);
  }

  if (canonicalUrl) {
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkCanonical);
    }
  }

  const updateOgTag = (property: string, content: string) => {
    let ogTag = document.querySelector(`meta[property="${property}"]`);
    if (ogTag) {
      ogTag.setAttribute('content', content);
    } else {
      ogTag = document.createElement('meta');
      ogTag.setAttribute('property', property);
      ogTag.setAttribute('content', content);
      document.head.appendChild(ogTag);
    }
  };

  updateOgTag('og:title', title);
  updateOgTag('og:description', description);
  updateOgTag('og:type', 'website');
  if (canonicalUrl) {
    updateOgTag('og:url', canonicalUrl);
  }
  if (ogImage) {
    updateOgTag('og:image', ogImage);
    updateOgTag('og:image:width', '1200');
    updateOgTag('og:image:height', '630');
  }

  const updateTwitterTag = (name: string, content: string) => {
    let twitterTag = document.querySelector(`meta[name="${name}"]`);
    if (twitterTag) {
      twitterTag.setAttribute('content', content);
    } else {
      twitterTag = document.createElement('meta');
      twitterTag.setAttribute('name', name);
      twitterTag.setAttribute('content', content);
      document.head.appendChild(twitterTag);
    }
  };

  updateTwitterTag('twitter:card', 'summary_large_image');
  updateTwitterTag('twitter:title', title);
  updateTwitterTag('twitter:description', description);
  if (ogImage) {
    updateTwitterTag('twitter:image', ogImage);
  }

  if (structuredData) {
    let script = document.querySelector('script[type="application/ld+json"][data-page-schema]');
    if (script) {
      script.textContent = JSON.stringify(structuredData);
    } else {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }
};
