import { useQuery } from '@tanstack/react-query';

export function useStaticQuery<T>(key: string[], fn: () => Promise<T>) {
  return useQuery({
    queryKey: key,
    queryFn: fn,
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

export function useDynamicQuery<T>(key: string[], fn: () => Promise<T>) {
  return useQuery({
    queryKey: key,
    queryFn: fn,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
  });
}
