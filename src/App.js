"strict mode";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ReaktionList from "./Components/ReaktionList";
import ReaktionStats from "./Components/ReaktionStats";
import ReaktionForm from "./Components/ReaktionForm";
import AboutIconLink from "./Components/AboutIconLink";
import AboutReaktion from "./Pages/AboutReaktion";
import { ReaktionProvider } from "./Context/ReaktionContext";

function App() {

  return (
    <ReaktionProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ReaktionForm />
                  <ReaktionStats />
                  <ReaktionList
                  // feedback={displayData}
                  // handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route path="/about" element={<AboutReaktion />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </ReaktionProvider>
  );
}
export default App;
