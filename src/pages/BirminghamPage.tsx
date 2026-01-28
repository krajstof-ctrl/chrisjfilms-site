import { useEffect } from 'react';
import { LocationPage } from './LocationPage';
import { updatePageMeta } from '../lib/seo';

export function BirminghamPage() {
  useEffect(() => {
    updatePageMeta(
      'Birmingham Wedding Videographer | Professional Cinematic Wedding Films',
      'Award-winning Birmingham wedding videographer since 2016. Professional cinematic wedding films covering Birmingham city center and surrounding areas. 500+ weddings filmed with 5-star reviews. Packages from £850 including Capture Only, The Film, and The Record.',
      'birmingham wedding videographer, wedding videographer birmingham, wedding films birmingham, birmingham wedding video, wedding cinematographer birmingham, birmingham wedding cinematography, birmingham city wedding video, solihull wedding videographer',
      'https://www.chrisjfilms.com/birmingham-wedding-videographer',
      'https://www.chrisjfilms.com/dsc06014.jpg',
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'ChrisJFilms Wedding Videography - Birmingham',
        'description': 'Professional wedding videography services in Birmingham. Cinematic wedding films edited by hand to music.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ChrisJFilms Wedding Films',
          'url': 'https://www.chrisjfilms.com'
        },
        'areaServed': {
          '@type': 'City',
          'name': 'Birmingham',
          'containedIn': {
            '@type': 'AdministrativeArea',
            'name': 'West Midlands'
          }
        },
        'priceRange': '£850-£2800'
      }
    );
  }, []);

  return (
    <LocationPage
      location="Birmingham"
      title="Birmingham Wedding Videographer"
      description="Premium wedding videography in Birmingham - capturing authentic moments with cinematic quality."
      heroText="Filming Birmingham weddings since 2016. Whether your celebration is in the city center or surrounding areas, your story deserves to be told beautifully."
      aboutText="I'm Chris, a wedding videographer serving Birmingham and the wider region. Having filmed over 500 weddings, I know how to capture the moments that matter most. From intimate ceremonies to grand celebrations, every film is carefully edited to music, preserving your memories with the emotion and authenticity they deserve."
    />
  );
}
