import * as React from "react";
import { Page } from "./types";

const CharactersModule = React.lazy(() => import("./modules/CharactersModule/CharactersComponent"));
//const EpisodeModule = React.lazy(() => import("./modules/EpisodeModule/EpisodeComponent"));
//const LocationsModule = React.lazy(() => import("./modules/LocationsModule/LocationsComponent"));

const routes: Page[] = [
	{
		path: "/characters",
		name: "Characters",
		component: CharactersModule,
	},
	/* {
		path: "/episode",
		name: "Episode",
		component: EpisodeModule,
	},
	{
		path: "/locations",
		name: "Locations",
		component: LocationsModule,
	}, */

];

export default routes;
