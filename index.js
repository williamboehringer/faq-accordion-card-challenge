
const showParagraph = (e) => {
    const title = document.getElementsByName(e)
    const paragraph = document.getElementById(e)
    const arrow = document.querySelector(`img[name=${e}]`)


    arrow.style.transform === '' ? arrow.style.transform = 'rotate(180deg)' :  arrow.style.transform = ''
    title[0].style.fontWeight === '' ?  title[0].style.fontWeight = 'bold' :  title[0].style.fontWeight = ''
    paragraph.style.display === '' ? paragraph.style.display = 'block' : paragraph.style.display = ''
}