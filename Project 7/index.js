const testimonial = [
  {
    name: "Cherise G",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  {
    name: "Toney K",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  {
    name: "Ravi R",
    photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonial[idx];
  imgEl.src = photoUrl;
  textEl.innerHTML = text; // corrected variable name
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonial.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
