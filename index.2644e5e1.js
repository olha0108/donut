document.querySelector(".to-top").addEventListener("click",(()=>{window.scrollTo(0,0)}));const e=document.querySelector(".to-top");window.onscroll=()=>{window.scrollY>700?e.classList.remove("to-top--hide"):window.scrollY<700&&e.classList.add("to-top--hide")};const o=document.querySelectorAll(".contact-form, .registration-form"),t=document.querySelector(".pop-up");o.forEach((e=>{e.addEventListener("submit",(o=>{o.preventDefault(),function(e){let o="",r=0;e.querySelectorAll("input").forEach((e=>{r+=""!=e.value?1:0})),"contact-form"===e.classList[0]&&2==r?o="Your question has been sent!":"registration-form"===e.classList[0]&&3==r?o=e.querySelector('input[type="text"]').value+", you are registered!":(o="Please fill out all fields!",t.classList.add("pop-up--error"));e.querySelectorAll("input").forEach((e=>{e.value=""})),t.innerHTML=o,t.classList.remove("pop-up--hide")}(e),setTimeout((()=>{t.classList.add("pop-up--hide"),t.classList.remove("pop-up--error")}),2e3)}))}));
//# sourceMappingURL=index.2644e5e1.js.map
