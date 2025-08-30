
import React from "react";

const descriptions = {
  bubble: {
    title: "Bubble Sort",
    text : "Compares adjacent elements and swaps them if they’re in the wrong order, repeating until sorted. Time: O(n²) worst/average, O(n) best (if already sorted)."
  },
  selection: {
    title: "Selection Sort",
    text: "Repeatedly finds the smallest element from the unsorted part and puts it in its correct position. Time: O(n²) worst/average/best."
  },
  insertion: {
    title: "Insertion Sort",
    text: "Builds a sorted section by repeatedly inserting the next element into its correct spot. Time: O(n²) worst/average, O(n) best (if nearly sorted)."
  },
  quick: {
    title: "Quick Sort",
    text: "Quick Sort picks a pivot, partitions the array into smaller and larger elements, and recursively sorts each side. It’s usually O(n log n) but can be O(n²) in the worst case."
  }
};



function DescriptionCard({algorithm}) {
  return (
    <div className="description-card">
        <h2>{descriptions[algorithm].title}</h2>
        <p>{descriptions[algorithm].text}</p>
    </div>
  );
}
export default DescriptionCard;