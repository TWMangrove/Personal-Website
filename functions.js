function toggleStyleSheet(){
    var path = window. location. pathname;
    var page = path. split("/"). pop(); 
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
            var currBodStyle= document.getElementById("mainStyleSheet");
            var currHeadStyle= document.getElementById("headerStyleSheet");  
            var currPortStyle= document.getElementById("portStyleSheet");
            var currQualStyle= document.getElementById("qualStyleSheet");                    
            var currServStyle= document.getElementById("servStyleSheet");                
            // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
            bodHref= currBodStyle.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
            var newBodStyle, newHeadStyle, newPortStyle, newQualStyle, newServStyle;
            if (bodHref == "styles/body-alt.css"){
                newBodStyle = "styles/body.css";
                newHeadStyle = "styles/header.css";   
                newPortStyle = "styles/portfolio.css";
                newQualStyle = "styles/qualifications.css";
                newServStyle = "styles/services.css";
            }
            else{
                newBodStyle = "styles/body-alt.css";
                newHeadStyle = "styles/header-alt.css";   
                newPortStyle = "styles/portfolio-alt.css";
                newQualStyle = "styles/qualifications-alt.css";
                newServStyle = "styles/services-alt.css";
            }
            currBodStyle.setAttribute("href", newBodStyle); 
            currHeadStyle.setAttribute("href", newHeadStyle); 
            if (page == "portfolio.html"){
                currPortStyle.setAttribute("href", newPortStyle);
            }
            if (page == "qualifications.html"){
                currQualStyle.setAttribute("href", newQualStyle);                
            }
            if (page == "services.html"){
                currServStyle.setAttribute("href", newServStyle);                
            }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)

    // TASK
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
        localStorage.setItem("bodyStyle", newBodStyle);
        localStorage.setItem("headStyle", newHeadStyle);
        localStorage.setItem("portStyle", newPortStyle);    
        localStorage.setItem("qualStyle", newQualStyle);
        localStorage.setItem("servStyle", newServStyle);
    }

window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    var path = window. location. pathname;
    var page = path. split("/"). pop();    
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
        var currBodName = localStorage.getItem("bodyStyle");
        var currBodStyle = document.getElementById("mainStyleSheet");
        currBodStyle.setAttribute("href", currBodName);
        
        var currHeadName = localStorage.getItem("headStyle");
        var currHeadStyle = document.getElementById("headerStyleSheet");
        currHeadStyle.setAttribute("href", currHeadName);

        if (page == "portfolio.html"){
            var currPortName = localStorage.getItem("portStyle");
            var currPortStyle = document.getElementById("portStyleSheet");
            currPortStyle.setAttribute("href", currPortName);
        }

        if (page == "qualifications.html"){
            var currQualName = localStorage.getItem("qualStyle");
            var currQualStyle = document.getElementById("qualStyleSheet");
            currQualStyle.setAttribute("href", currQualName);
        }

        if (page == "services.html"){
            var currServName = localStorage.getItem("servStyle");
            var currServStyle = document.getElementById("servStyleSheet");
            currServStyle.setAttribute("href", currServName);
        }
}
