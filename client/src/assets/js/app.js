window.onload = function(){
    setTimeout(function(){
        document.querySelector('.game2').classList.add('hovered');
    

        document.querySelectorAll(".fs-games__item").forEach(function(e){
            let enlarge = false;
            e.querySelector('img').addEventListener("click", function(){
                if(enlarge == false){
                    e.classList.toggle("active");
                    document.querySelectorAll(".fs-games__item").forEach(function(element){
                        if(element.classList.contains("active")){
                            element.classList.remove("hovered");
                            setTimeout(function(){
                                element.querySelector(".fs-games__item__close").style.display = "block";
                            }, 200);
                            element.classList.add('large');
                            enlarge = true;
                        }else{
                            element.classList.add("mobile");
                            element.style.opacity = "0";
                        }
                        document.querySelector(".fs-games").classList.add('enlarged');
                    });
                }
            })
            e.querySelector(".fs-games__item__close").addEventListener('click', function(){
                document.querySelectorAll(".fs-games__item").forEach(function(element){
                    if(element.classList.contains("active")){
                        document.querySelector(".fs-games").classList.remove("enlarged");
                        element.querySelector(".fs-games__item__close").style.display = "none";
                        element.classList.remove("large");
                        element.classList.remove("active");
                        element.classList.add("hovered");
                    }else{
                        enlarge = false;
                        element.style.opacity = "1";
                        element.classList.remove("mobile");
                    }
                });
            });
            e.addEventListener("mouseenter", function(){
                if(!e.classList.contains("active")){
                    // if(e.classList.contains("game1")){
                    //     document.querySelector(".fs-games").style.transform = "translate(-7%)"
                    // }
                    // else if(e.classList.contains("game2")){
                    //     document.querySelector(".fs-games").style.transform = "translate(-8.5%)"
                    // }
                    // else if(e.classList.contains("game4")){
                    //     document.querySelector(".fs-games").style.transform = "translate(-12.5%)"
                    // }
                    // else if(e.classList.contains("game5")){
                    //     document.querySelector(".fs-games").style.transform = "translate(-15%)"
                    // }
                    document.querySelectorAll(".fs-games__item").forEach(function(el){
                        el.classList.remove("hovered");
                        // document.querySelector(".fs-games").style.transform = "translate(-10%)"
                    });
                    e.classList.add("hovered");
                }
            })
            
        })
    }, 100);
};