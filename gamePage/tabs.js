var _bggUrl ="";
	
var kickstarterRootURL = "https://www.kickstarter.com/projects/laboratory/";
var boardGameGeekRootURL = "https://boardgamegeek.com/boardgame/";

function setupTabs(kickstarterURL, boardGameGeekURL)
{
	if (kickstarterURL != null) setKickstarterURL(kickstarterRootURL+kickstarterURL);

	if (boardGameGeekURL != null) setBoardGameGeekURL(((boardGameGeekURL.indexOf("http") == -1) ? (boardGameGeekRootURL+boardGameGeekURL): boardGameGeekURL), ((kickstarterURL != null) ? 99 : 52));
}		

function setKickstarterURL(_url)
{
	_ksUrl = _url;
	document.getElementById("ksLogo").style.visibility = 'visible';
}

function ksButton()
{
    window.location = _ksUrl;
}

function setBoardGameGeekURL(_url, _top)
{
	_bggUrl = _url;
	document.getElementById("bggLogo").style.visibility = 'visible';
	document.getElementById("bggLogo").style.top = _top;
}

function bggButton()
{
    window.location = _bggUrl;
}