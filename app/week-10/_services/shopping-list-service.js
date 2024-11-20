import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The ID of the user whose items to fetch.
 * @returns {Promise<Array>} A promise resolving to an array of items.
 */
export async function getItems(userId) {
  try {
    // Reference the user's items subcollection
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);

    // Fetch the documents in the subcollection
    const querySnapshot = await getDocs(q);

    // Create an array of items
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw new Error("Could not fetch items.");
  }
}

/**
 * Adds a new item to a specific user's list of items in Firestore.
 * @param {string} userId - The ID of the user to add the item for.
 * @param {Object} item - The item to add.
 * @returns {Promise<string>} A promise resolving to the ID of the new document.
 */
export async function addItem(userId, item) {
  try {
    // Reference the user's items subcollection
    const itemsRef = collection(db, "users", userId, "items");

    // Add the new item to Firestore
    const docRef = await addDoc(itemsRef, item);

    return docRef.id; // Return the ID of the new document
  } catch (error) {
    console.error("Error adding item:", error);
    throw new Error("Could not add item.");
  }
}
