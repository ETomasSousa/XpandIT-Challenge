// Trata de dar load a novos filmes à medida do scroll
// hooks/useInfiniteScroll.ts
import { useEffect, useState } from 'react';

const useInfiniteScroll = (items: any[], itemsPerLoad: number, containerRef: React.RefObject<HTMLDivElement>) => {
  const [visibleItems, setVisibleItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentItems, setCurrentItems] = useState<number>(itemsPerLoad);

  useEffect(() => {
    setVisibleItems(items.slice(0, currentItems));
  }, [items, currentItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const bottom = containerRef.current.scrollHeight - containerRef.current.scrollTop <= containerRef.current.clientHeight + 200;
      if (bottom && !isLoading && visibleItems.length < items.length) {
        setIsLoading(true);
        setTimeout(() => {
          setCurrentItems((prev) => Math.min(prev + itemsPerLoad, items.length));
          setIsLoading(false);
        }, 500);
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [visibleItems, isLoading, items.length, itemsPerLoad, containerRef]);

  return { visibleItems, isLoading };
};

export default useInfiniteScroll;
