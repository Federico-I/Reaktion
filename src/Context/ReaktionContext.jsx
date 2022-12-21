import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ReaktionContext = createContext();

export const ReaktionProvider = ({ children }) => {
  const [Loading, setLoading] = useState(true);
  const { displayData, setDisplayData } = useState([]);
  const [editReaktion, setEditReaktion] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchReaktion();
  }, []);

  // Fetch Feedback
  const fetchReaktion = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&desc"
    );
    const data = await response.json();
    setDisplayData(data);
    setLoading(false);
  };

  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setDisplayData([newFeedback, ...displayData]);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this Item?")) {
      setDisplayData(displayData.filter((item) => item.id !== id));
    }
  };

  //Update feedback Item
  const updateFeedback = (id, updItem) => {
    setDisplayData(
      displayData.map((item) =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );
  };

  // set item to be Updated
  const editFeedback = (item) => {
    setEditReaktion({
      item,
      edit: true,
    });
  };

  return (
    <ReaktionContext.Provider
      value={{
        displayData,
        addFeedback,
        deleteFeedback,
        editFeedback,
        editReaktion,
        updateFeedback,
      }}
    >
      {children}
    </ReaktionContext.Provider>
  );
};

export default ReaktionContext;
