export interface PricingItem {
  id: string;
  service: string;
  priceFormatted: string;
  priceValue?: number;
  description?: string;
}

export type NicheType = 'Gastronomia, Passeios & Viagens' | 'Lifestyle';

export interface Creator {
  id: string;
  name: string;
  contact?: string;
  contactType?: 'phone' | 'email';
  whatsappLink?: string;
  emailLink?: string;
  profile: string;
  instagramUrl: string;
  niche: string;
  nicheGroup: NicheType;
  followersText: string;
  followersCount: number;
  status: 'available' | 'waiting_mediakit';
  prices: PricingItem[];
  rawValues: string;
  cityRegion: string;
  colorTheme: {
    badgeBg: string;
    badgeText: string;
    border: string;
    avatarGradient: string;
  };
}
