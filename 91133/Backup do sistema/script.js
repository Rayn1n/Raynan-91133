document.getElementById("loginFrom").addEventListener("submit", function(event){
    event.preventDefault(); //! Impede o envio do formulário
    
    const username = document.getElementById("username").value; //! Obter o valor do elemento
    const password = document.getElementById("password").value;
    
    //! Validação dos campos
        if(!username || !password){
            alert("Por favor, preencha todos os campos.");
            return;
        }
        else if(password.length < 8){
            alert("A senha deve ter pelo menos 8 cracateres.");
            return;
        }
    
        //! Salva o nome de usuário no localStorage
        localStorage.setItem("username", username)
    
        
        alert("Login bem sucedido!");
        window.location.href("cadastro.html");
    
    });