    function navigateTo(url) {
      // Verwijder .html-extensie uit de URL
      url = url.replace('.html', '');

      // Navigeer naar de nieuwe URL zonder de pagina opnieuw te laden
      history.pushState({}, null, url);

      // Laad inhoud van de nieuwe URL
      loadContent(url);
    }

    function loadContent(url) {
      // Simuleer het laden van inhoud (vervang dit door je eigen code om inhoud te laden)
      document.getElementById('content').innerHTML = `<p>Loading content for ${url}...</p>`;
    }

    // Laad de inhoud voor de huidige URL bij het laden van de pagina
    window.onload = function() {
      loadContent(window.location.pathname);
    };
