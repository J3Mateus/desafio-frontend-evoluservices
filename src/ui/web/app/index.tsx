import { ViteDIContainer } from "@web/dicontainer";
import "./globals.css";
import { PropsWithChildren } from "react";
import ResourcesProvider from "@web/contexts/resources/provider";
import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Home from "@web/pages/home";
function AppConfigSetup({
	children,
}: PropsWithChildren) {

	return (
            <ResourcesProvider usecase={ViteDIContainer.getResourcesUseCase()}>
                {children}
            </ResourcesProvider>
	);
}

function App() {

    const router = createBrowserRouter([
        {
        path: "/",
        element: <Home />,
        },
    ]);

	return (
        <AppConfigSetup>
            <RouterProvider router={router}>
            </RouterProvider>
        </AppConfigSetup>
	);
}

export default App;
