// Function to toggle tag selection and filter comics
function toggleTag(tag) {
    var tagElement = document.querySelector(`.tag-list a[onclick*="'${tag}'"]`);

    if (!tagElement) {
        console.error(`Tag element not found for tag: ${tag}`);
        return;
    }

    if (tagElement.classList.contains('selected')) {
        tagElement.classList.remove('selected');
    } else {
        tagElement.classList.add('selected');
    }

    filterComics();
}

// Function to toggle the display of the tag selection popup
function toggleTagPopup() {
    var popup = document.getElementById('tagsPopup');
    
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

// Function to filter comics based on selected tags
function filterComics() {
    var selectedTags = [];
    var tagElements = document.querySelectorAll('.tag-list a.selected');

    tagElements.forEach(function(tagElement) {
        var tag = tagElement.getAttribute('onclick').split("'")[1];
        selectedTags.push(tag);
    });

    var comicSections = document.querySelectorAll('.comic-section');

    comicSections.forEach(function(section) {
        var tags = section.getAttribute('data-tags').split(',').map(tag => tag.trim());

        // Check if any selected tag matches the tags of the comic
        var show = selectedTags.some(function(tag) {
            return tags.includes(tag);
        });
        
        if (show || selectedTags.length === 0) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Initialize by showing all comics initially and hiding the popup
document.addEventListener("DOMContentLoaded", function() {
    filterComics();
    var popup = document.getElementById('tagsPopup');
    if (popup) {
        popup.style.display = 'none';
    }
});

// Close the tag popup if clicked outside of it
window.onclick = function(event) {
    var popup = document.getElementById('tagsPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}