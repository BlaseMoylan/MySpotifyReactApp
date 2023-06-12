import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import (BrowserRouter)

export default function Home() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Library/>} />
            </Routes>
        </Router>
    )
}