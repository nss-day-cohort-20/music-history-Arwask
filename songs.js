{
var songsArray = [];
let request = new XMLHttpRequest;
let requestAgain = new XMLHttpRequest;
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

getDiv = document.getElementById('display');
let lastChild = document.getElementById('lastChild');
// getDiv.innerHTML = songCreator();

let addMusicDiv = document.getElementById('add-music');
let addMusicLink = document.getElementById('addMusicLink');
let listMusicDiv = document.getElementById('list-music');
let listMusicLink = document.getElementById('listMusicLink');
let addButton = document.getElementById('addButton');

addMusicLink.addEventListener('click', function()
{
	addMusicLink.classList.add('selected');
	addMusicLink.classList.remove('clickable');
	listMusicDiv.classList.toggle('isHidden');
	addMusicDiv.classList.toggle('isHidden');
	listMusicLink.classList.remove('selected');
	listMusicLink.classList.add('clickable');
})

listMusicLink.addEventListener('click', function()
{
	addMusicLink.classList.remove('selected');
	addMusicLink.classList.add('clickable');
	listMusicDiv.classList.toggle('isHidden');
	addMusicDiv.classList.toggle('isHidden');
	listMusicLink.classList.remove('clickable');
	listMusicLink.classList.add('selected')
})

addButton.addEventListener('click', function()
{
	let song = document.getElementById('songName').value;
	let artist = document.getElementById('artistName').value;
	console.log(artist);
	let album = document.getElementById('albumName').value;
	console.log(album);
	addSong(song, artist, album);
})

function addSong(song, artist, album)
{
	let section = document.createElement('section');
	section.setAttribute('class','inline');
	getDiv.insertBefore(section, lastChild);
	let header = document.createElement('header');
	section.appendChild(header);
	let h3 = document.createElement('h3');
	header.appendChild(h3);
	h3.innerHTML = song;
	let ul = document.createElement('ul');
	section.appendChild(ul);
	let li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML = artist;
	let li2 = document.createElement('li');
	ul.appendChild(li2);
	li2.innerHTML = album;
	let deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = "Delete";
	section.appendChild(deleteBtn);
		deleteBtn.addEventListener('click',function()
		{
			getDiv.removeChild(section);
		})
}

let loadMusic = function()
{
	let data = JSON.parse(event.target.responseText);
	songsArray = data.songs;
	// console.log(songsArray);
	printOnDOM(songsArray);
}
let printOnDOM = function(songsArray)
{
songsArray.forEach(function(song)
	{
		addSong(song.name, song.artist, song.album);
	})	
}
request.open("GET", "music.json");
request.send();
request.addEventListener('load', loadMusic);

let loadMoreMusic = function()
{
	let data = JSON.parse(event.target.responseText);
	data.songs2.forEach(function(song)
	{
		songsArray.push(song);
	})
	printOnDOM(songsArray);
	lastChild.classList.add('isHidden');
}
let getStarted = function()
{
	event.preventDefault();
	for(let i=0; i<=getDiv.childElementCount; i++)
	{
		getDiv.removeChild(getDiv.childNodes[0]);
	}
	requestAgain.open("GET", "music2.json");
	requestAgain.send();
}
requestAgain.addEventListener('load', loadMoreMusic);
requestAgain.addEventListener('error', function()
{
	console.log("Error in loading file");
})
lastChild.addEventListener('click', getStarted);

window.globalMusic = window.globalMusic || {};
globalMusic.songsArray = songsArray;
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.push("Cheap thrills by Sia");
// songs.unshift("Closer by The Chain Smokers");
// var msg = ""
// var temp;
// function songCreator()
// {
// 	for(var i=0; i<songs.length; i++)
// 	{
// 		msg += "<section class = 'inline'><header><h3>";
// 		songs[i] = songs[i].replace(/[*@()!]/g,"");	
// 		songs[i] = songs[i].replace(/ > by /g,"-");
// 		songs[i] = songs[i].replace(/-/g,'</h3></header><ul><li>');
// 		songs[i] = songs[i].replace(/ on the album /g,'</li><li>');
// 		temp = '</li></ul></section>';
// 		msg = msg + songs[i] + temp;
// 	}
// 	return msg;
// }
}