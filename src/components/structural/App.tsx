import { HashRouter, Route, Routes } from 'react-router';

import Home from '../content/Home';
import Climbs from "../content/Climbs";
import Schedule from '../content/Schedule';
import Team from '../content/Team';
import Signup from '../content/Signup';
import Layout from "./Layout";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/climbs" element={<Climbs />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
