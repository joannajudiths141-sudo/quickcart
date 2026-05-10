import React from "react";

function DisplayListOfItems({ listOfItems, handleDelete, handleUpdate }) {
  return (
    <div>
      {listOfItems.map((item) => (
        <div key={item.key}>
          <input
            type="text"
            value={item.itemDescription}
            onChange={(e) => handleUpdate(e.target.value, item.key)}
          />
          <button onClick={() => handleDelete(item.key)}>
            Delete Item
          </button>
        </div>
      ))}
    </div>
  );
}

export default DisplayListOfItems;