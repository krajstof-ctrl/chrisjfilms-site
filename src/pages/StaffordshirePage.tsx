import { useEffect } from 'react';
import { LocationPage } from './LocationPage';
import { updatePageMeta } from '../lib/seo';

export function StaffordshirePage() {
  useEffect(() => {
    updatePageMeta(
      'Staffordshire Wedding Videographer | Lichfield, Stafford & Uttoxeter',
      'Professional wedding videographer based in Staffordshire since 2016. Serving Lichfield, Stafford, Stone, Uttoxeter and across the county. Cinematic wedding films with 500+ weddings experience. Packages from £850 including Capture Only, The Film, and The Record.',
      'staffordshire wedding videographer, wedding videographer staffordshire, lichfield wedding videographer, stafford wedding video, staffordshire wedding films, wedding cinematography staffordshire, stone wedding videographer, uttoxeter wedding video',
      'https://www.chrisjfilms.com/staffordshire-wedding-videographer',
      'https://www.chrisjfilms.com/dsc06014.jpg',
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'ChrisJFilms Wedding Videography - Staffordshire',
        'description': 'Professional wedding videography services in Staffordshire. Cinematic wedding films edited by hand to music.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ChrisJFilms Wedding Films',
          'url': 'https://www.chrisjfilms.com'
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Staffordshire'
        },
        'priceRange': '£850-£2800'
      }
    );
  }, []);

  return (
    <LocationPage
      location="Staffordshire"
      title="Staffordshire Wedding Videographer"
      description="Professional wedding videography across Staffordshire - capturing timeless films for couples throughout the county."
      heroText="Capturing weddings across Staffordshire since 2016. From Lichfield to Stafford, Stone to Uttoxeter, your day deserves to be remembered forever."
      aboutText="I'm Chris, a wedding videographer based in Staffordshire. With over 500 weddings filmed across the county and surrounding areas, I know the best venues and how to capture every moment of your special day. Every film is personally edited to music, ensuring your memories are preserved exactly as they felt."
    />
  );
}
