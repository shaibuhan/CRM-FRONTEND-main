import axios from "axios";

const BASE_URL = "https://shaibuhan-crm-capstone-guvi-in-ie6l.onrender.com"
export async function getAllUser(userId) {
  return await axios.get(
    `${BASE_URL}/crm/api/v1/users/${userId}`,
    {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    },
    {
      userId: localStorage.getItem("userId"),
    }
  );
}

export async function updateUserData(userId, selectedCurrUser) {
  return await axios.put(
    `${BASE_URL}/crm/api/v1/users/${userId} `,
    selectedCurrUser,
    {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    },
    {
      userId: localStorage.getItem("userId"),
    }
  );
}
