function openOnglet(evt, name) {
    let i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.querySelectorAll('.tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the "active" class from all tab links
    tablinks = document.querySelectorAll('.tablinks'); // Corrected selector
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab content
    document.getElementById(name).style.display = "block";

    // Add the "active" class to the button that opened the tab
    evt.currentTarget.className += " active";
}