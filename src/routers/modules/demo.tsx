import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// demo 模块
const demoRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "demo"
		},
		children: [
			{
				path: "/demo/demo1",
				element: lazyLoad(React.lazy(() => import("@/views/demo/demo1/index"))),
				meta: {
					requiresAuth: true,
					title: "demo1",
					key: "demo1"
				}
			},
			{
				path: "/demo/demo2",
				element: lazyLoad(React.lazy(() => import("@/views/demo/demo2/index"))),
				meta: {
					requiresAuth: true,
					title: "demo2",
					key: "demo2"
				}
			},
		]
	}
];

export default demoRouter;
