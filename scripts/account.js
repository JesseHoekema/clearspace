export async function setBanner(username) {

    // List of predefined colors
    var colors = ['#ff6b6b', '#ffa8a8', '#6bff6b', '#a8ffa8', '#6b6bff', '#a8a8ff'];


    // Function to generate a consistent index based on the username
    function getUsernameIndex(username, max) {
        // Simple hashing function
        var hash = 0;
        for (var i = 0; i < username.length; i++) {
            hash = username.charCodeAt(i) + ((hash << 5) - hash);
        }
        // Ensure the index is within the range of colors array
        return Math.abs(hash % max);
    }

    // Get the banner element
    var banner = document.querySelector('.banner');

    // Generate two indices to select colors from the list based on the username
    var index1 = getUsernameIndex(username, colors.length);
    var index2 = getUsernameIndex(username + "2", colors.length); // Add something to make it different from the first index

    // Apply gradient background using the colors selected from the list based on the username
    banner.style.background = 'linear-gradient(to right, ' + colors[index1] + ', ' + colors[index2] + ')';
}
