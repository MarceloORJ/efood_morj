import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Ladolce from './pages/ladolce'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolce" element={<Ladolce />} />
  </Routes>
)

export default Rotas
