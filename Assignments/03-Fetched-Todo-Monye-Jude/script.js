const container = document.querySelector(".container");
const loader = document.querySelector(".loader-container");

const url = "https://jsonplaceholder.typicode.com/todos";

function setLoading(state) {
  if (state) {
    loader.classList.add("show");
  } else {
    loader.classList.remove("show");
  }
}

async function fetchTodos() {
  setLoading(true);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      // returning the fetched data
      return await response.json();
    } else {
      let responseText = "";
      // handling error based on status code
      if (response.status == 404) {
        responseText = response.statusText || "Todos not found";
      } else if (response.status >= 400 && response.status <= 499) {
        responseText = response.statusText || "Client error";
      } else if (response.status == 500) {
        responseText = response.statusText || "Internal server error";
      } else if (response.status >= 500 && response.status <= 599) {
        responseText = response.statusText || "Server error";
      }
      console.log(responseText);
      alert(responseText);
    }
  } catch (error) {
    console.log("Error getting data:", error);
    alert("Error getting data: " + error.message);
  } finally {
    setLoading(false);
  }
}

async function displayTodos() {
  const data = await fetchTodos();
  console.log("data:", data);
  // Grouping tasks by userId using a forEach loop
  const groupedByUser = {};

  data.forEach((todo) => {
    if (!groupedByUser[todo.userId]) {
      groupedByUser[todo.userId] = [];
    }
    groupedByUser[todo.userId].push(todo);
  });

  // Rendering the users individually as cards in the UI
  for (const userId in groupedByUser) {
    const card = document.createElement("section");
    card.className = "card";

    card.innerHTML = `
          <h3>User ${userId}</h3>
          ${groupedByUser[userId]
            .map(
              (todo) => `
            <article class="task">
              <div class="title">${todo.title}</div>
              <span class="status ${todo.completed ? "completed" : "pending"}">
              ${todo.completed ? "Completed" : "Pending"}
              </span>
            </article>
          `
            )
            .join("")}
  `;
    container.appendChild(card);
  }
}

displayTodos();
