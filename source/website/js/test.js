

window.horde = gremlins.createHorde();
window.horde.gremlin(gremlins.species.clicker())
    .gremlin(gremlins.species.formFiller())
    .gremlin(gremlins.species.typer());

window.start = function (logout = true) {
    logout = document.getElementById('logout');
    if (logout) logout.hidden = logout;
    window.horde.unleash();
};
