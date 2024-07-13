import Navigation from "./components/Navigation";
import QrGenerator from "./components/QrGenerator";
import QrScanner from "./components/QrScanner";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route path="/" element={<QrGenerator />} />
                <Route path="/qr-scanner" element={<QrScanner />} />
                <Route path="/qr-history" element={<History />} />
            </Route>
        </Routes>
    );
};

export default App;
