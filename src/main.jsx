import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { SWRConfig } from "swr";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/seo";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <SEO
                    title="Urban Greenland Farms – Fresh Farm Produce in Nigeria"
                    description="We grow with purpose cultivating top-quality products inside our advanced greenhouses and farm. Our journey begins in Lagos, but our mission is rooted in feeding cities across Nigeria with clean, healthy, and consistent produce."
                    keywords={[
                        "urban farms",
                        "greenhouse farming",
                        "fresh produce",
                        "buy vegetables",
                        "Nigeria farm products",
                    ]}
                    image="https://yourdomain.com/cover-image.jpg"
                    url="https://urbangreenlandfarms.com"
                />
                <App />
            </Provider>
        </HelmetProvider>
    </StrictMode>
);
