import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.css"

const App = lazy(() => import("./app/App"))
const BlogIndexPage = lazy(() => import("./app/pages/BlogIndexPage"))
const BlogPage = lazy(() => import("./app/pages/BlogPage"))
const SeoLandingRoute = lazy(() => import("./app/pages/SeoLandingRoute"))
const GiveawayPage = lazy(() => import("./app/pages/GiveawayPage"))
const GiveawayThankYouPage = lazy(
  () => import("./app/pages/GiveawayThankYouPage"),
)

function SiteRouter() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/"

  if (path === "/") return <App />
  if (path === "/giveaway") return <GiveawayPage />
  if (path === "/giveaway-thank-you") return <GiveawayThankYouPage />
  if (path === "/blog") return <BlogIndexPage />
  if (path.startsWith("/blog/")) {
    return <BlogPage slug={decodeURIComponent(path.slice("/blog/".length))} />
  }

  return <SeoLandingRoute slug={decodeURIComponent(path.slice(1))} />
}

const rootContainer = document.getElementById("root")

if (!rootContainer) {
  throw new Error("React root container was not found")
}

ReactDOM.createRoot(rootContainer).render(
  <React.StrictMode>
    <Suspense
      fallback={<div className="min-h-screen bg-white" aria-busy="true" />}
    >
      <SiteRouter />
    </Suspense>
  </React.StrictMode>,
)
