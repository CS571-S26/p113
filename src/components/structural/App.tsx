import { HashRouter, Route, Routes } from 'react-router';

import Climbs from "../content/Climbs";
import Layout from "./Layout";
import Home from '../content/Home';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/climbs" element={<Climbs/>}></Route>
                <Route path="/schedule" element={<Climbs />}></Route>
                <Route path="*" element={<Climbs />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;