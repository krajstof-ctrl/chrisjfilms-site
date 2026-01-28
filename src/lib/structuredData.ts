export function addStructuredData(data: object) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);

  const existingScript = document.querySelector('script[type="application/ld+json"][data-page]');
  if (existingScript) {
    existingScript.remove();
  }

  script.setAttribute('data-page', 'true');
  document.head.appendChild(script);
}

export function createFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function createArticleStructuredData(
  headline: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  url: string,
  imageUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'ChrisJFilms Wedding Films',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.chrisjfilms.com/white_no_bg_00000.png'
      }
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl
      }
    })
  };
}

export function createVideoStructuredData(
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(duration && { duration })
  };
}

export function createBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
