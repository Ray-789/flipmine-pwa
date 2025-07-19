import { create } from 'zustand';

interface Listing {
  title: string;
  price: string;
  details: string;
  images: string[];
  location?: string;
  website?: string;
  url?: string;
  seller?: string;
  seller_rating?: string;
  ai_opinion?: string;
  ai_confidence?: string;
  category?: string;
  risk_level?: string;
}

interface ListingStore {
  currentListing: Listing | null;
  setListing: (listing: Listing) => void;
}

export const useListingStore = create<ListingStore>((set) => ({
  currentListing: null,
  setListing: (listing) => set({ currentListing: listing }),
}));
