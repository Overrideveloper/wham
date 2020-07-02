var toVersusCOM = function() {
    if (Turbolinks.supported) {
        Turbolinks.visit('/VersusCOM', { action: 'advance' });
    } else {
        window.location.pathname = 'VersusCOM';
    }
}

var toHelp = function() {
    if (Turbolinks.supported) {
        Turbolinks.visit('/Home/Help', { action: 'advance' });
    } else {
        window.location.pathname = 'Home/Help';
    }
}
