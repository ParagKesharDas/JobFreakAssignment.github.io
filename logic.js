function displayContent(component) {
    var content = document.getElementById('content');

    var divs = content.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    var selectedContent = document.getElementById(component);

    if (selectedContent) {
        selectedContent.style.display = 'block';
    } else {
        content.innerHTML = '<h2>404 Not Found</h2><p>The requested page was not found.</p>';
    }
}
