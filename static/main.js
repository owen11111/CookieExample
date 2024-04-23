function getCookie(cookieName){
    let cookies = document.cookie.split(";");
    let cookieDict = {};
    cookies.forEach(cookie => {
        let cookieKV = cookie.trim().split("=");
        cookieDict[cookieKV[0]] = cookieKV[1];
    });
    
    if (cookieName in cookieDict){
        return cookieDict[cookieName];
    }else{
        return null;
    }
}

function swapCSS(){
    curStyle = document.getElementById("style").getAttribute("href");
    console.log(curStyle)
    if (curStyle === lightCSSUrl){
        document.getElementById("style").setAttribute("href", darkCSSUrl);
        document.cookie = "style_pref=dark; expires=0; path=/";
    }else{
        document.getElementById("style").setAttribute("href", lightCSSUrl);
        document.cookie = "style_pref=light; expires=0; path=/";
    }
}

console.log(getCookie("style_pref"))