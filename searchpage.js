$(document).ready(function() {
    const avatarimg = localStorage.getItem('avatarimg');
    const name = localStorage.getItem('name');
    const login = localStorage.getItem('login');
    const followers = localStorage.getItem('followers');
    const following = localStorage.getItem('following');
    const repositories = localStorage.getItem('repositories');
    const bio = localStorage.getItem('bio');
    
    $('#name').text(`${name}`);
    $('#login').text(`@${login}`);
    $('#repositories').text(`${repositories}`);
    $('#followers').text(`${followers}`);
    $('#following').text(`${following}`);
    $('#profile-avatar').attr('src', `${avatarimg}`);
    $('.bio').text(`${bio}`);
    
    // Validação de bio
    
    let biocount = $('.bio').text();
    let namecount = $('#name').text();

    if (biocount === 'null'){
        $('.bio').text('Não há bio disponível...');
    }

    if (namecount === 'null'){
        $('#name').text('Usuário sem nome definido...');
    }

    $('#btn').click(function() {
        window.open(`http://www.github.com/${login}`, '_blank');
    })
})
