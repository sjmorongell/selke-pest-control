import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './app/App'
import CityPage from './app/pages/CityPage'
import BlogPage from './app/pages/BlogPage'
import { cityData } from './app/data/cityData'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        {cityData.map((city) => (
          <Route
            key={city.slug}
            path={`/${city.slug}`}
            element={<CityPage city={city} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
