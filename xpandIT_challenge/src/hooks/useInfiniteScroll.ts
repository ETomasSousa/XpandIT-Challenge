// Trata de dar load a novos filmes à medida do scroll
import { useEffect, useState } from 'react';
import { debounce } from '../utils';

const useInfiniteScroll = (callback: () => void) => {
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {

		const handleScroll = debounce(() => {
			const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

				if (scrollTop + clientHeight >= scrollHeight - 20 && !isFetching) {
					setIsFetching(true);
					callback();
				}
		}, 100);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [callback, isFetching]);

	useEffect(() => {
		if (isFetching) {
			setTimeout(() => {
				setIsFetching(false);
			}, 1000);
		}
	}, [isFetching]);

	return [isFetching];
};

export default useInfiniteScroll;



