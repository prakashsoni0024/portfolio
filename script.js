(function () {
  emailjs.init("zbTZdGx_BpHPdE63s"); // replace this with your public key
})();

// Send form on submit
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const submitBtn = e.target.querySelector("button[type='submit']");
  submitBtn.disabled = true;

  emailjs
    .sendForm("service_gfwm94d", "template_pyap9xv", e.target)
    .then(
      () => {
        // alert("✅ Message sent successfully!");
        Toastify({
          text: "✅ Message sent successfully!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#4CAF50",
          className: "toast-success",
        }).showToast();
        e.target.reset();
      },
      (error) => {
        // alert("❌ Message failed. Check console.");
        Toastify({
          text: "❌ Message failed. Check console.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#f44336",
          className: "toast-error",
        }).showToast(error);
        console.error("EmailJS Error:", error);
      }
    )
    .finally(() => {
      submitBtn.disabled = false;
    });
});

document.body.style.overflow = "hidden"; // Prevent scroll during loader

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("preloader");
    loader.style.opacity = 0;
    loader.style.pointerEvents = "none";
    document.body.style.overflow = "auto"; // Re-enable scroll

    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Wait for fade-out
  }, 1000); // Show loader for 1 sec even if page is loaded
});

const submitBtn = document.getElementById("submit-btn");
let isIcon = false;

submitBtn.addEventListener("click", function () {
  if (isIcon) {
    submitBtn.innerHTML = "Send";
  } else {
    submitBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
  }
  isIcon = !isIcon;
});
