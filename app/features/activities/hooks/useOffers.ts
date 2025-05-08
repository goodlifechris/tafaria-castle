import { useQuery } from '@tanstack/react-query';
import { fetchLeisureActivities } from '../api/leisureActivitiesService';
import { LeisureActivity } from '../types/leisureActivities';

export const useLeisureActivities = () => {
  return useQuery<LeisureActivity[]>({
    queryKey: ['leisureActivities'],
    queryFn: fetchLeisureActivities,
    // staleTime: 5 * 60 * 1000, // optional caching
  });
};
