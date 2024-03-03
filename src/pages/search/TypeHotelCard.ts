export interface TypeHotelCard {
  id: number;
  name: string;
  mainPhotoId: number;
  photoMainUrl: string;
  photoUrls: string[];
  position: number;
  rankingPosition: number;
  countryCode: string;
  latitude: number;
  longitude: number;
  priceBreakdown: PriceBreakdown;
  currency: string;
  checkin: Checkin;
  checkout: Checkout;
  checkoutDate: string;
  checkinDate: string;
  reviewScore: number;
  reviewScoreWord: string;
  reviewCount: number;
  qualityClass: number;
  isFirstPage: boolean;
  accuratePropertyClass: number;
  propertyClass: number;
  ufi: number;
  wishlistName: string;
  optOutFromGalleryChanges: number;
  wishlistToggle: WishlistToggle;
  propertyType: any;
  proposedAccommodation: string[];
  priceDetails: PriceDetails;
  additionalLabels: string[];
}

export interface PriceBreakdown {
  taxExceptions: any[];
  excludedPrice: ExcludedPrice;
  benefitBadges: BenefitBadge[];
  grossPrice: GrossPrice;
  strikethroughPrice: StrikethroughPrice;
}

export interface ExcludedPrice {
  value: number;
  currency: string;
}

export interface BenefitBadge {
  identifier: string;
  variant: string;
  text: string;
  explanation: string;
}

export interface GrossPrice {
  currency: string;
  value: number;
}

export interface StrikethroughPrice {
  currency: string;
  value: number;
}

export interface Checkin {
  fromTime: string;
  untilTime: string;
}

export interface Checkout {
  untilTime: string;
  fromTime: string;
}

export interface WishlistToggle {
  destinationId: string;
  wishlistName: string;
  propertyId: number;
}

export interface PriceDetails {
  info: string;
  strikethrough: string;
  gross: string;
  taxInfo: string;
}
