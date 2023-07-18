// script.js
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

var player = videojs('my-video');
player.ready(function() {
    var tracks = player.textTracks();

    // function to switch audio tracks
    function switchAudioTrack(lang) {
        for (var i = 0; i < tracks.length; i++) {
            if (tracks[i].language === lang) {
                tracks[i].mode = 'showing';
            } else {
                tracks[i].mode = 'disabled';
            }
        }
    }

    // switch to Spanish track as default
    switchAudioTrack('es');
});
