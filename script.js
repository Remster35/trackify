// Modal logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const openModal2 = document.getElementById("openModal2");
const openModal3 = document.getElementById("openModal3");
const closeModal = document.getElementById("closeModal");
const submitEmail = document.getElementById("submitEmail");
const emailInput = document.getElementById("emailInput");

openModal.onclick = () => modal.classList.remove("hidden");
openModal2.onclick = () => modal.classList.remove("hidden");
openModal3.onclick = () => modal.classList.remove("hidden");
closeModal.onclick = () => modal.classList.add("hidden");

submitEmail.onclick = () => {
  const email = emailInput.value.trim();
  if (!email) {
    alert("Enter a valid email.");
    return;
  }
  alert("Thanks! Backend coming soon.");
  modal.classList.add("hidden");
}

// PRO plan button
document.getElementById("proPlan").onclick = () => {
  alert("Add your Stripe link in index.html to activate payments!");
}
