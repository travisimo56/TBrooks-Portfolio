//Requirements to Actually Submit
document.querySelector("form").addEventListener("submit", function (event)
{
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const messageError = document.querySelector("#message-error");

  let hasError = false;

//Remove Error Message & Colors When Text is Input
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  name.classList.remove("input-error");
  email.classList.remove("input-error");
  message.classList.remove("input-error");

// Validate All Required Fields
  if (name.value.trim() === "")
  {
    nameError.textContent = "Required";
    name.classList.add("input-error");
    hasError = true;
  }

  if (email.value.trim() === "")
  {
    emailError.textContent = "Required";
    email.classList.add("input-error");
    hasError = true;
  }
  else if (!email.value.includes("@"))
  {
    emailError.textContent = "Invalid email";
    email.classList.add("input-error");
    hasError = true;
  }

  if (message.value.trim() === "")
  {
    messageError.textContent = "Required";
    message.classList.add("input-error");
    hasError = true;
  }

  if (hasError)
  {
    event.preventDefault(); // Stop form submission
  }
});

// Function to clear error on input
  function clearErrorOnInput(fieldId, errorId)
  {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    field.addEventListener('input', () =>
    {
      if (field.value.trim() !== '')
      {
        error.textContent = '';
        field.classList.remove('input-error');
      }
    });
  }

  clearErrorOnInput('name', 'name-error');
  clearErrorOnInput('email', 'email-error');
  clearErrorOnInput('message', 'message-error');

//Add text box for referral "other" selection
  const referralSelect = document.getElementById("referral");
  const otherContainer = document.getElementById("other-container");
  const otherInput = document.getElementById("referral-other");

  referralSelect.addEventListener("change", function ()
  {
    if (referralSelect.value === "other")
    {
      otherContainer.style.display = "block";
      otherInput.setAttribute("required", "true");
    }
    else
    {
      otherContainer.style.display = "none";
      otherInput.removeAttribute("required");
      otherInput.value = ""; // Clear if switching back
    }
  });

//Mobile Menu Function
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () =>
{
  nav.classList.toggle('active');
});
