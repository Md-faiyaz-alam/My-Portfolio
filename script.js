const sideMenu= document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform='translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform='translateX(16rem)';
}
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
      navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
  } else {
      navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
      navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
  }
});

// ---light mode and dark mode---

if(
    localStorage.Theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)){
        document.documentElement.classList.add('dark')

      }else{
        document.documentElement.classList.remove('dark')
      }

      function toggleTheme(){
        document.documentElement.classList.toggle('dark');

        if(document.documentElement.classList.contains('dark')){
            localStorage.theme='dark';
        }else{
           localStorage.theme= 'light';
        }
      }


      // read more or read less

      document.querySelectorAll(".toggle-button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const extraContent = this.previousElementSibling.querySelector(".extra-content");

            if (extraContent.classList.contains("hidden")) {
                extraContent.classList.remove("hidden");
                this.innerHTML = 'Read less <img src="./images/up-arrow.png" alt="" class="w-4">';
            } else {
                extraContent.classList.add("hidden");
                this.innerHTML = 'Read more <img src="./images/right-arrow.png" alt="" class="w-4">';
            }
        });
    });