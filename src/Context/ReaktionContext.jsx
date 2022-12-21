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
    const response = await fetch("/feedback?_sort=id&desc");
    const data = await response.json();
    setDisplayData(data);
    setLoading(false);
  };

  // Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    newFeedback.id = uuidv4();
    setDisplayData([data, ...displayData]);
  };

  // Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete this Item?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      setDisplayData(displayData.filter((item) => item.id !== id));
    }
  };

  //Update feedback Item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "aplication/json",
        body: JSON.stringify(updItem),
      },
    });

    const updatedData = await response.json();

    setDisplayData(
      displayData.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
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
