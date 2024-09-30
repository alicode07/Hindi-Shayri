let demo = document.querySelector("#demo");
let demo12 = document.querySelector("#demo12");
let imgLogo=document.querySelector(".imgLogo")

function demo123(){
  location.reload();  
}
demo12.addEventListener("click", () => {
  demo123();  
})

// Fetch data from the API
fetch('https://hindi-quotes.vercel.app/random')
  .then(function(response) {
    return response.json();  
  })
  .then(function(data) {
    console.log("Here is your data:", data.quote); 
    imgLogo.style.display="flex";
    demo.innerText = data.quote;  
  })
  .catch(function(error) {
    console.log("Something went wrong:", error);  
  });
