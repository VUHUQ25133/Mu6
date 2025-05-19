import { useMusicStore } from "@/stores/useMusicStore";
import { Library, ListMusic, PlayCircle, Users2 } from "lucide-react";
import StatsCard from "./StatsCard";

const DashboardStats = () => {
	const { stats } = useMusicStore();

	const statsData = [
		{
			icon: ListMusic,
			label: "Total Songs",
			value: stats.songsTotal.toString(),
			bgColor: "bg-emerald-500/10",
			iconColor: "text-emerald-400",
		},
		{
			icon: Library,
			label: "Total Albums",
			value: stats.albumsTotal.toString(),
			bgColor: "bg-violet-500/10",
			iconColor: "text-violet-400",
		},
		{
			icon: Users2,
			label: "Total Artists",
			value: stats.totalArtists.toString(),
			bgColor: "bg-orange-500/10",
			iconColor: "text-orange-400",
		},
		{
			icon: PlayCircle,
			label: "Total Users",
			value: stats.usersTotal.toLocaleString(),
			bgColor: "bg-sky-500/10",
			iconColor: "text-sky-400",
		},
	];

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 '>
			{statsData.map((stat) => (
				<StatsCard
					key={stat.label}
					icon={stat.icon}
					label={stat.label}
					value={stat.value}
					bgColor={stat.bgColor}
					iconColor={stat.iconColor}
				/>
			))}
		</div>
	);
};
export default DashboardStats;