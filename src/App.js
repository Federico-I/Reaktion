"strict mode";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import ReaktionList from "./Components/ReaktionList";
import ReactionStats from "./Components/ReactionStats";
import ReaktionData from "./Data/ReaktionData";
import ReaktionForm from "./Components/ReaktionForm";
import AboutReaktion from "./Pages/AboutReaktion";
import AboutIconLink from "./Components/AboutIconLink";

function App() {
  const [displayData, setDisplayData] = useState(ReaktionData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setDisplayData([newFeedback, ...displayData]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this Item?")) {
      setDisplayData(displayData.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ReaktionForm handleAdd={addFeedback} />
                <ReactionStats feedback={displayData} />
                <ReaktionList
                  feedback={displayData}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path="/about" element={<AboutReaktion />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}
export default App;
