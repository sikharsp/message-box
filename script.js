const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const submittedMessage = document.getElementById('submittedMessage');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  submitBtn.disabled = true;
  btnText.textContent = "Sending...";

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    _honey: "",
    _captcha: "false"
  };

  try {
    const response = await fetch("https://formsubmit.co/ajax/psikhar74@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      form.reset();
      form.classList.add('hidden');
      submittedMessage.classList.remove('hidden');
    } else {
      alert("Failed to send message. Please try again later.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Error sending message. Please try again later.");
  } finally {
    btnText.textContent = "Send Message";
    submitBtn.disabled = false;
  }
});

function resetForm() {
  submittedMessage.classList.add('hidden');
  form.classList.remove('hidden');
}
