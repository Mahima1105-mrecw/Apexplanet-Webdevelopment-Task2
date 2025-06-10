// Contact Form Validation and Success Message
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const successMsg = document.getElementById("successMsg");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If everything is valid
  successMsg.hidden = false;

  // Optionally clear the form
  this.reset();

  // Hide message after 3 seconds
  setTimeout(() => {
    successMsg.hidden = true;
  }, 3000);
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}