$(document).ready(function() {
    console.log('#developed by brunogallotte')
    // Git search captura do @user

    $('#btn').click(function() {
        const githubId = $('#githubid').val();

        // Verificação básica de input
        if (githubId.length > 0) {
            const endpoint = `https://api.github.com/users/${githubId}`;
    
            fetch(endpoint).then(function(resposta) {
                return resposta.json();
            }).then(function(json) {
                const avatarimg = json.avatar_url;
                const name = json.name;
                const login = json.login;
                const followers = json.followers;
                const following = json.following;
                const repositories = json.public_repos;
                const bio = json.bio;
                const uservalid = json.message;
        
                // Modificando html e subindo para o LocalStorage
                
                localStorage.setItem('avatarimg', avatarimg);
                localStorage.setItem('name', name);
                localStorage.setItem('login', login);
                localStorage.setItem('followers', followers);
                localStorage.setItem('following', following);
                localStorage.setItem('repositories', repositories);
                localStorage.setItem('bio', bio);
                
                if (uservalid === 'Not Found') {
                    alert('O usuário solicitado não foi encontrado no banco de dados do GitHub, por favor tente novamente!')
                } else {
                    window.location.href = 'gitsearch.html';
                }
            })
        } else {
            alert('Preencha um usuário válido no campo de pesquisa');
        }
    })    
})