import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './app/App'
import CityPage from './app/pages/CityPage'
import PestPage from './app/pages/PestPage'
import { cityData } from './app/data/cityData'
import { pestPages } from './app/data/pestData'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {cityData.map((city) => (
          <Route
            key={city.slug}
            path={`/${city.slug}`}
            element={<CityPage city={city} />}
          />
        ))}
        {pestPages.map((pest) => (
          <Route
            key={pest.slug}
            path={`/${pest.slug}`}
            element={<PestPage pest={pest} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
