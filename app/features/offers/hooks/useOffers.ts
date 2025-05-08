import { useQuery } from '@tanstack/react-query';
import { fetchOffers } from '../api/offerService';
import { Offer } from '../types/offers';

export const useOffers = () => {
  return useQuery<Offer[]>({
    queryKey: ['offers'],
    queryFn: fetchOffers,
    // staleTime: 5 * 60 * 1000,
  });
};