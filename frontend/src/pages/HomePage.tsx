import Topbar from "@/components/Topbar.tsx";
import { useMusicStore } from "@/stores/useMusicStore.tsx";
import { useEffect } from "react";
import FeaturedSection from "../components/homePage/FeaturedSection.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { usePlayerStore } from "@/stores/usePlayerStore.tsx";
import SectionGrid from "../components/homePage/SectionGrid.tsx";

const HomePage = () => {
	const {
		fetchFeaturedSongs,
		fetchForYouSongs,
		fetchTrendingSongs,
		isLoading,
		forYouSongs,
		featuredSongs,
		trendingSongs,
	} = useMusicStore();

	const { initializeQueue } = usePlayerStore();

	useEffect(() => {
		fetchFeaturedSongs();
		fetchForYouSongs();
		fetchTrendingSongs();
	}, [fetchFeaturedSongs, fetchForYouSongs, fetchTrendingSongs]);

	useEffect(() => {
		if (forYouSongs.length > 0 && featuredSongs.length > 0 && trendingSongs.length > 0) {
			const allSongs = [...featuredSongs, ...forYouSongs, ...trendingSongs];
			initializeQueue(allSongs);
		}
	}, [initializeQueue, forYouSongs, trendingSongs, featuredSongs]);

	return (
		<main className='rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900'>
			<Topbar />
			<ScrollArea className='h-[calc(100vh-180px)]'>
				<div className='p-4 sm:p-6'>
					<h1 className='text-2xl sm:text-3xl font-bold mb-6'>Welcome Back!</h1>
					<FeaturedSection />

					<div className='space-y-8'>
						<SectionGrid title='You May Listen' songs={forYouSongs} isLoading={isLoading} />
						<SectionGrid title='On Trending' songs={trendingSongs} isLoading={isLoading} />
					</div>
				</div>
			</ScrollArea>
		</main>
	);
};
export default HomePage;
