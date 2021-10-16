document.getElementById('movie_player').addEventListener('keydown', (e) => {
    if (e.code !== 'Escape') {
        return;
    }

    console.log("yt-ad-skip");
    [document.querySelector('.ytp-ad-skip-button'), ...document.querySelectorAll('.ytp-ad-overlay-close-button')].filter(btn => !!btn).forEach(btn => btn.click());
});
