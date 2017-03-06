window.addEventListener('keydown', function(ev) {
    const snip = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    /** This is really interesting; so what we're doing here is, upon keydown, we're creating a query selector that
     * references an audio element with a "data-key" of whatever the key code of the button that was pressed. It
     * feels a bit hacky to me, however it's also very clever.
     */
    console.log(snip);
})