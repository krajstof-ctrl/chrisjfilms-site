import { useEffect } from 'react';
import { LocationPage } from './LocationPage';
import { updatePageMeta } from '../lib/seo';

export function WorcestershirePage() {
  useEffect(() => {
    updatePageMeta(
      'Worcestershire Wedding Videographer | Worcester, Bromsgrove & Redditch',
      'Beautiful wedding videography across Worcestershire since 2016. Covering Worcester, Bromsgrove, Redditch, Kidderminster and throughout the county. Professional cinematic wedding films. Packages from £850 including Capture Only, The Film, and The Record.',
      'worcestershire wedding videographer, wedding videographer worcestershire, worcester wedding videographer, bromsgrove wedding video, redditch wedding films, worcestershire wedding cinematography, kidderminster wedding videographer',
      'https://www.chrisjfilms.com/worcestershire-wedding-videographer',
      'https://www.chrisjfilms.com/dsc06014.jpg',
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'ChrisJFilms Wedding Videography - Worcestershire',
        'description': 'Professional wedding videography services in Worcestershire. Cinematic wedding films edited by hand to music.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ChrisJFilms Wedding Films',
          'url': 'https://www.chrisjfilms.com'
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Worcestershire'
        },
        'priceRange': '£850-£2800'
      }
    );
  }, []);

  return (
    <LocationPage
      location="Worcestershire"
      title="Worcestershire Wedding Videographer"
      description="Beautiful wedding videography across Worcestershire - honest storytelling that captures your day as it truly was."
      heroText="Covering Worcestershire weddings since 2016. From Worcester to Bromsgrove, Redditch to Kidderminster, creating films that preserve your memories forever."
      aboutText="I'm Chris, a wedding videographer working throughout Worcestershire. With over 500 weddings filmed across the county, I focus on capturing genuine moments and real emotion. Every film is personally edited to music, ensuring your wedding is remembered exactly how it felt — honest, beautiful, and unforgettable."
    />
  );
}
