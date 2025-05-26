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
				path: "/demo/demo0",
				element: lazyLoad(React.lazy(() => import("@/views/demo/demo0/index"))),
				meta: {
					requiresAuth: true,
					title: "demo0",
					key: "demo0"
				}
			},
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
			{
				path: "/demo/demo3",
				element: lazyLoad(React.lazy(() => import("@/views/demo/demo3/index"))),
				meta: {
					requiresAuth: true,
					title: "demo3",
					key: "demo3"
				}
			},
			{
				path: "/demo/demo4",
				element: lazyLoad(React.lazy(() => import("@/views/demo/demo4/index"))),
				meta: {
					requiresAuth: true,
					title: "demo4",
					key: "demo4"
				}
			},
			{
				path: "/demo/demo5",
				element: lazyLoad(React.lazy(() => import("@/views/demo/demo5/index"))),
				meta: {
					requiresAuth: true,
					title: "demo5",
					key: "demo5"
				}
			},
			{
				path: "/demo/demo6",
				element: lazyLoad(React.lazy(() => import("@/views/demo/demo6/index"))),
				meta: {
					requiresAuth: true,
					title: "demo6",
					key: "demo6"
				}
			},
			{
				path: "/demo/todolist",
				element: lazyLoad(React.lazy(() => import("@/views/demo/todolist/index"))),
				meta: {
					requiresAuth: true,
					title: "todolist",
					key: "todolist"
				}
			},
		]
	}
];

export default demoRouter;
