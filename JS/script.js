
    let theme = document.getElementById("theme");

    function cambiarColorOscuro(){
        theme.href = "css/modoOscuro.css"
        document.getElementById("tw").src="IMG/twitter.svg";
        document.getElementById("gh").src="IMG/github.svg";
        document.getElementById("li").src="IMG/linkedin.svg";
        
        
    }

    function cambiarColorClaro(){
        theme.href= "css/modoClaro.css"
        document.getElementById("tw").src="IMG/twitter-white.svg";
        document.getElementById("gh").src="IMG/github-white.svg";
        document.getElementById("li").src="IMG/linkedin-white.svg";
        
    }

    



