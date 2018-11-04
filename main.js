

function listsongs(url) {
  $.ajax({
    url: url,
    type: 'GET',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer BQBu9FK9r4KBLfn7aflGPJB7Ie8nWX5mWx9XelodcY_2iQJ9V8d8tHGUDPY1MWS3fW7CPWESjBTMFFIptvvk1XQ9BzgCIrQ14k0rpCHm_hBFNCuKRUfXKaL-ue1hpBF97m-YRBBthwNe5V8');
    },
    data: {},
    success: function (result) {
        output = "<ul>"
        for (i=0; i<result.tracks.length; i++)
        {
          output += "<li>"
          output += result.tracks[i].name
          output += "</li>"

        }
        output += "<ul>"
        document.getElementById("hi").innerHTML=output
    },
    error: function () { },
  });

}

function loadsongs(max, min)
{
  var url = "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&market=US&max_tempo=" + max + "&min_tempo=" + min
  listsongs(url)
}
