window.addEventListener('keydown', function(ev) {
    const snip = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    /** This is really interesting; so what we're doing here is, upon keydown, we're creating a query selector that
     * references an audio element with a "data-key" of whatever the key code of the button that was pressed. It
     * feels a bit hacky to me, however it's also very clever.
     */
    //console.log(audio);
    if (!snip) return; // if it is not a "snip", return (or terminate)
    snip.currentTime = 0; // each keydown sets the current snip time to zero or "rewinds" it, so that the sounds
        // can be overlaid
    snip.play(); //play the audio item
})