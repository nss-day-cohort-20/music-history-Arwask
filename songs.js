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

songs.push("Cheap thrills by Sia");
songs.unshift("Closer by The Chain Smokers");

for(var i=0; i<songs.length; i++)
{
	songs[i]
}
console.log(songs);