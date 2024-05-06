$(window).on("load",function(){
    // Check if the cookie indicating whether to show the loader exists
    var showLoader = getCookie("loader");

    // If the cookie doesn't exist or is not set to "true", remove the loader
    if(showLoader !== "true") {
        $(".loader").remove();
    } else {
        // If the cookie exists and is set to "true", fade out the loader after 1 second
        setTimeout(function(){
            $(".loader").fadeOut("slow", function() {
                // After fading out, delete the "loader" cookie
                document.cookie = "loader=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            });
        }, 1000); // 1000 milliseconds = 1 second
    }

    // Function to get cookie value
    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for(var i=0;i < cookies.length;i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
            if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length,cookie.length);
        }
        return null;
    }
});