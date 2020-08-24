const topBarBtns = document.querySelectorAll('.top-bar__btn');
const dropDownMenus = document.querySelectorAll('.dropdown');

topBarBtns.forEach(topBarBtn => {
    topBarBtn.addEventListener('click', e => {
        let index = Array.from(topBarBtns).indexOf(e.target);
        //console.log(index);
        const opened = document.querySelector(".dropdown");
        if (dropDownMenus[index].classList.contains('toggle')) {
          
            dropDownMenus[index].classList.remove('toggle');
        } else {
            dropDownMenus.forEach(dpmenu => {
                dpmenu.classList.remove('toggle')
            })
            dropDownMenus[index].classList.toggle('toggle');
        }
       
    })

});

window.onclick = function (event) {
    if (!event.target.matches('.top-bar__btn')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('toggle')) {
                openDropdown.classList.remove('toggle');
            }
        }
    }
} 