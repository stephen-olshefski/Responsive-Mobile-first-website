// Scroll animation
$('#view-work').on('click', () => {
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
})