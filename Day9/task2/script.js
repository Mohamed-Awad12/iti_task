function showPreview(img) {
    const main = document.getElementById("mainImage");
    console.log(img)
    main.src = img;
}
function resetPreview() {
    document.getElementById("mainImage").src = "./download.png";
}