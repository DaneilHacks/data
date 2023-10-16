function openAnother(selectElement){
    var selectedValue = selectElement.value;

    // Define URLs or paths for the different pages
    var pageURLs = {
        "option1": "basic.php",
        "option2": "landing_page.php",
        "option3": "basic.php",
        "option4": "register.html"
    };

    // Check if the selected value corresponds to a page URL
    if (selectedValue in pageURLs) {
        var selectedPageURL = pageURLs[selectedValue];
        // Redirect the user to the selected page
        window.location.href = selectedPageURL;
    }
}