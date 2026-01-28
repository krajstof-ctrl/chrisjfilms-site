import { useEffect } from 'react';
import { LocationPage } from './LocationPage';
import { updatePageMeta } from '../lib/seo';

export function WestMidlandsPage() {
  useEffect(() => {
    updatePageMeta(
      'West Midlands Wedding Videographer | Wolverhampton, Walsall & Dudley',
      'Expert wedding videographer covering West Midlands since 2016. Serving Wolverhampton, Walsall, Dudley, Solihull and across the region. Cinematic wedding films with 500+ weddings filmed. Packages from £850 including Capture Only, The Film, and The Record.',
      'west midlands wedding videographer, wedding videographer west midlands, wolverhampton wedding videographer, walsall wedding video, dudley wedding films, west midlands wedding cinematography, solihull wedding videographer, coventry wedding video',
      'https://www.chrisjfilms.com/west-midlands-wedding-videographer',
      'https://www.chrisjfilms.com/dsc06014.jpg',
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'ChrisJFilms Wedding Videography - West Midlands',
        'description': 'Professional wedding videography services in West Midlands. Cinematic wedding films edited by hand to music.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ChrisJFilms Wedding Films',
          'url': 'https://www.chrisjfilms.com'
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'West Midlands'
        },
        'priceRange': '£850-£2800'
      }
    );
  }, []);

  return (
    <LocationPage
      location="West Midlands"
      title="West Midlands Wedding Videographer"
      description="Expert wedding videography throughout the West Midlands - creating cinematic films that last forever."
      heroText="Serving the West Midlands since 2016. From Wolverhampton to Walsall, Dudley to Solihull, your wedding deserves a film that doesn't fade."
      aboutText="I'm Chris, a wedding videographer covering the West Midlands. With over 500 weddings filmed across the region, I understand what makes each venue and celebration unique. Every wedding film is hand-edited to music, capturing the emotion and energy of your day in a way that lasts forever."
    />
  );
}
