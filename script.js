// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.


let imageUrls = [
"https://th.bing.com/th/id/R.9e70512ff20119075fcfbfeb9a82a108?rik=%2bvPtQGRCl3MOdA&riu=http%3a%2f%2fring.cdandlp.com%2fsafir%2fphoto_grande%2f114127881.jpg&ehk=iWaASdGvtYrN2PntfwUtX41fgZmoPZsYucmJtWkIX4M%3d&risl=&pid=ImgRaw&r=0", 

"https://i1.sndcdn.com/artworks-kCdeunpqVz0P-0-t500x500.png",

"https://www.bing.com/th?id=OIP.38EMlDfNjwJBFGYTwJVg9wHaHa&w=185&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",

"https://th.bing.com/th/id/OIP.YF4__08ZbrMpcHBBLUJkpgAAAA?rs=1&pid=ImgDetMain",
  
"https://images.genius.com/b04885d4d7ebc1ddd46038c43bf5f375.1000x1000x1.jpg"
];

let songList = ["Tequila","No Diddy", "Times We Had","Forever", "Oh Bumbo klaat"]; 

let artistList = ["The Champs", "Yeabsra","Barlito","Lebron","Peter Tosh"];

let linksList = [
  "https://www.youtube.com/watch?v=4hswHOEQfj8", 
"https://www.youtube.com/watch?v=8k3TNYCXydo", 
"https://www.youtube.com/watch?v=fGbIrmC-L9o", 
"https://www.youtube.com/watch?v=tYDfqIhPxCw",
"https://www.youtube.com/watch?v=8k3TNYCXydo"
  ]; 

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let tequila = {
  name:"Tequila",
image:"https://images.app.goo.gl/3rNLpCirwpxzZhFX8",
  artist: "The Champs",
link:"https://www.youtube.com/watch?v=4hswHOEQfj8"
}

let noDiddy = {
  name:"No Diddy",
image:"https://images.app.goo.gl/dWRqiuc5tYRc931u5",
  artist: "Yeabsra",
link:"https://www.youtube.com/watch?v=8k3TNYCXydo"
}

let timesWeHad = {
  name:"Times We Had",
image:"https://images.app.goo.gl/Kx8mgf8D8dtAd6Mu9",
  artist:"Barlito",
link:"https://www.youtube.com/watch?v=akNqWvrq4Yc"
}

let lebron = {
  name:"Forever",
image:"https://images.app.goo.gl/Kx8mgf8D8dtAd6Mu9",
  artist:"Lebron",
link:"https://www.youtube.com/watch?v=fGbIrmC-L9o"
}

let ohBumbo = {
  name:"Oh Bumbo Klaat",
image:"https://images.app.goo.gl/uDkoFPsAEgAEMZKa8",
  artist:"Peter Tosh",
link:"https://www.youtube.com/watch?v=tYDfqIhPxCw"
}

let all = [tequila,noDiddy,timesWeHad,lebron,ohBumbo]

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.






function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

let imageUrls = image.value;
let songName = song-name.value;
let artists = artist.value;
let songLink= song-link.value;


// task 10: use `.push()` to add each input value to the correct array.

image.push(imageUrls)
songList.push(songName)
artistList.push(artists)
linksList.push(songLink)

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = ".image";
  displaySong.innerHTML = ".song-name";
  displayArtist.innerHTML = ".artist";
  displayLink.innerHTML = ".song-link";
}


function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.


 for(let i=0; i<imageUrls.length; i++){ 
   displayImage.insertAdjacentHTML("afterbegin", `<img src= ${imageUrls[i]}>`)
}
  
for(let i=0; i<songList.length; i++){
displaySong.insertAdjacentHTML("afterbegin", `<p> ~${songList[i]}</p>`)
}
  
for(let i=0; i<artistList.length; i++){ displayArtist.insertAdjacentHTML("afterbegin", `<p> ~${artistList[i]}</p>`)
}
  
 for(let i=0; i<linksList.length; i++){ displayLink.insertAdjacentHTML("afterbegin", `<a> ~${linksList[i]}</p>`)
}  
}

// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();


