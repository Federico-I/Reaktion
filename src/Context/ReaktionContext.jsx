import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ReaktionContext = createContext();

export const ReaktionProvider = ({ children }) => {
  const { displayData, setDisplayData } = useState([
    {
      id: 1,
      text: "This is item 1",
      rating: 7,
    },
    {
      id: 2,
      text: "This is item 2",
      rating: 5,
    },
    {
      id: 3,
      text: "This is item 3",
      rating: 10,
    },
  ]);

  const [editReaktion, setEditReaktion] = useState({
    item: {},
    edit: false,
  });

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
