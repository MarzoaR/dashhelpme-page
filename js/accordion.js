var acc = document.getElementsByClassName("accordion");

    for(var i = 0; i < acc.length; i++){
      acc[i].onclick = function() {
        this.classList.toggle("active")

        var panel  = this.nextElementSibling

          console.log(panel.scrollHeight)
        if(panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px"
        }
      }
    }