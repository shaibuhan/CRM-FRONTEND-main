import axios from "axios";

// const BASE_URL = "http://localhost:8000"

export async function fetchTicket() {
  return await axios.get(
    `https://shaibuhan-crm-capstone-guvi-in-ie6l.onrender.com/crm/api/v1/tickets/`,
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

// Post api :

export async function ticketCreation(data) {
  return await axios.post(
    `https://shaibuhan-crm-capstone-guvi-in-ie6l.onrender.com/crm/api/v1/tickets/`,data,
    {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }
  );
}

// PUT API : passing the id of the ticket and the new updated data

export async function ticketUpdation(id, selectedCurrTicket) {
  return await axios.put(
    `https://shaibuhan-crm-capstone-guvi-in-ie6l.onrender.com/crm/api/v1/tickets/${id}`,
    selectedCurrTicket,
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
