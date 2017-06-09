var songs = [];

function songMaker(artist, album, genre)
{
	songMaker.artist = artist;
	songMaker.album = album;
	songMaker.genre = genre;

	return songMaker;
}

var song1 = songMaker("Ariana Grande", "Dangerous Woman", "Rock");
var song2 = songMaker("The Chainsmokers", "Closer", "Classical");
var song3 = songMaker("Ed Sheeran", "Song I wrote with Amy", "Pop");
var song4 = songMaker("Above and Beyond", "Group Therapy", "Jazz");
var song5 = songMaker("Sia", "Cheap Thrills", "Blues");

songList = [song1, song2, song3, song4, song5];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.push("Cheap thrills by Sia");
// songs.unshift("Closer by The Chain Smokers");
var msg = ""
var temp;
function songCreator()
{
	for(var i=0; i<songs.length; i++)
	{
		msg += "<section class = 'inline'><header><h3>";
		songs[i] = songs[i].replace(/[*@()!]/g,"");
		// console.log("1. ",songs[i]);	
		songs[i] = songs[i].replace(/ > by /g,"-");
		// console.log("2. ",songs[i]);	
		songs[i] = songs[i].replace(/-/g,'</h3></header><ul><li>');
		// console.log("3. ",songs[i]);	
		songs[i] = songs[i].replace(/ on the album /g,'</li><li>');
		// console.log("4. ",songs[i]);	
		temp = '</li></ul></section>';
		// console.log("5. ",songs[i]);	
		msg = msg + songs[i] + temp;
		// console.log(msg);
	}
	return msg;
}

getDiv = document.getElementById('display');
getDiv.innerHTML = songCreator();

// Add each string to the DOM in index.html in the main content area.
// functio

// function createMusicBlock(songs[i])
// {
// 	var text = `<section class="inline">
// 					<header><h1>${}`


// }

// createMusicBlock();