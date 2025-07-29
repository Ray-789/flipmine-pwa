import { create } from 'zustand';

interface Listing {
  category: string;
  risk_level: string;
  ai_confidence: number;
  title: string;
  price: string;
  details: string;
  images: string[];
  location?: string;
  website?: string;
  url?: string;
  seller?: string;
  seller_rating?: string;
}

interface ListingStore {
  listings: Listing[];
  setListings: (listings: Listing[]) => void;

  currentListing: Listing | null;
  setListing: (listing: Listing) => void;
}

export const useListingStore = create<ListingStore>((set) => ({
  listings: [],
  setListings: (listings) => set({ listings }),

  currentListing: null,
  setListing: (listing) => set({ currentListing: listing }),
}));
