function fetchHeader () {
  let header = document.getElementsByTagName("header")
  
  fetch('./header.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById("header").innerHTML += data; 
  })
}
console.log(header);
function fetchFooter() {
  let footer = document.getElementsByTagName("footer")
  
  fetch('./footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer").innerHTML += data;
      })
}


fetchHeader()
fetchFooter()