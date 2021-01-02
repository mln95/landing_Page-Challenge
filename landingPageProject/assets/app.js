window.onload = function() {
    // Navigation created dynamically
    const main = document.getElementById('main');
    const header = document.createElement('header');
    const head = document.createElement('nav');
    const unorderedList = document.createElement('ul');
    main.insertAdjacentElement("afterbegin", header);
    const getHead = document.getElementsByTagName('header')[0];
    getHead.appendChild(head);
    const getNav = document.getElementsByTagName('nav')[0];
    getNav.appendChild(unorderedList);

    for (var i = 0; i < 5; i++) {
        const arrNavigation = ["Home", "About", "Services", "Contact", "Get Started"];
        const arrNameOfLink = ["Home", "About", "Services", "Contact", "Services"];
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        unorderedList.appendChild(listItem);
        document.getElementsByTagName('li')[i].appendChild(link);
        document.getElementsByTagName('a')[i].innerHTML = arrNavigation[i];
        document.getElementsByTagName('a')[i].setAttribute('href', "#" + arrNameOfLink[i].toLowerCase());
    }

    document.getElementsByTagName('a')[4].className = "start position";

    // This function is used for the menu adaptation while scrolling.
    document.onscroll = function() {
        document.getElementsByTagName('header')[0].style.backgroundColor = "rgba(34, 73, 134, 0.7)"
        document.getElementsByTagName('ul')[0].style.padding = "20px";
        document.getElementsByTagName('li')[4].style.display = "none";
        for (let i = 0; i < 5; i++) {
            document.getElementsByTagName('a')[i].style.color = "#FFFFFF";
        }

        if (window.pageYOffset < 352) {
            document.getElementsByTagName('li')[3].style.textDecoration = "none";
            document.getElementsByTagName('li')[2].style.textDecoration = "none";
            document.getElementsByTagName('li')[1].style.textDecoration = "none";
            document.getElementsByTagName('li')[0].style.textDecoration = "underline";
        }
        if (window.pageYOffset >= 352) {
            document.getElementsByTagName('li')[1].style.textDecoration = "underline";
            document.getElementsByTagName('li')[0].style.textDecoration = "none";
            document.getElementsByTagName('li')[2].style.textDecoration = "none";
            document.getElementsByTagName('li')[3].style.textDecoration = "none";
        }
        if (window.pageYOffset >= 769) {
            document.getElementsByTagName('li')[2].style.textDecoration = "underline";
            document.getElementsByTagName('li')[1].style.textDecoration = "none";
            document.getElementsByTagName('li')[3].style.textDecoration = "none";
            document.getElementsByTagName('li')[0].style.textDecoration = "none";
        }
        if (window.pageYOffset >= 1180) {
            document.getElementsByTagName('li')[3].style.textDecoration = "underline";
            document.getElementsByTagName('li')[2].style.textDecoration = "none";
            document.getElementsByTagName('li')[1].style.textDecoration = "none";
            document.getElementsByTagName('li')[0].style.textDecoration = "none";
        }
    }

    var timer = null;
    window.addEventListener('scroll', function() {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            document.getElementsByTagName('header')[0].style.backgroundColor = "rgba(34, 73, 134, 0.7)";
            document.getElementsByTagName('ul')[0].style.padding = "20px";
            document.getElementsByTagName('li')[4].style.display = "none";

            if (window.scrollY === 0) {
                document.getElementsByTagName('li')[4].style.display = "block";
                document.getElementsByTagName('ul')[0].style.padding = "";
                document.getElementsByTagName('header')[0].style.backgroundColor = "";
            }
        }, 500);
    }, false);
};
// This fonction is used for the menu toggle in responsive design. Outside onload because while HTML elements are loaded the 
// clickMenu div do not exist so the function myFunction can not work. 
function myFunction(x) {
    x.classList.toggle("change");

}
