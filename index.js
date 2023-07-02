var musicListElement = document.getElementById("play");

var musicList = [
  { title: "Song 1", artist: "Artist 1", duration: "3:30", link: "https://www.example.com/song1" },
  { title: "Song 2", artist: "Artist 2", duration: "4:15", link: "https://www.example.com/song2" },
  { title: "Song 3", artist: "Artist 3", duration: "3:55", link: "https://www.example.com/song3" },
  // Add more songs here...
];

for (var i = 0; i < musicList.length; i++) {
  var song = musicList[i];

  var listItem = document.createElement("li");
  var link = document.createElement("a");
  link.href = song.link;
  link.textContent = song.title + " - " + song.artist + " (" + song.duration + ")";
  
  listItem.appendChild(link);
  musicListElement.appendChild(listItem);
}
