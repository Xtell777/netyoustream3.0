
    <script>
        // Função de validação para o nome de usuário
        function validateUsername(username) {
            const usernameRegex = /^@[a-zA-Z0-9_]{3,20}$/;
            return usernameRegex.test(username);
        }

        // Função de validação para o e-mail
        function validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailRegex.test(email) && email.length <= 254;
        }

        // Função de validação para a senha
        function validatePassword(password) {
            return password.length >= 8 && password.length <= 20;
        }

        // Função para verificar se o usuário é maior de idade (18 anos)
        function validateAge(dob) {
            const today = new Date();
            const birthDate = new Date(dob);
            const age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                return age - 1;
            }
            return age;
        }

        // Validação do formulário de registro
        document.getElementById("register-form").addEventListener("submit", function(event) {
            event.preventDefault();

            var fullName = document.getElementById("full-name").value;
            var email = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var dob = document.getElementById("dob").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirm-password").value;

            // Limpar mensagens de erro
            document.getElementById("username-error").textContent = "";
            document.getElementById("dob-error").textContent = "";
            document.getElementById("password-error").textContent = "";
            document.getElementById("confirm-password-error").textContent = "";

            // Validação do Nome de Usuário
            if (!validateUsername(username)) {
                document.getElementById("username-error").textContent = "O nome de usuário deve começar com '@' e ter entre 3 a 20 caracteres.";
                return;
            }

            // Validação do E-mail
            if (!validateEmail(email)) {
                alert("Por favor, insira um e-mail válido com até 254 caracteres.");
                return;
            }

            // Validação da Data de Nascimento (Maior de Idade)
            if (!dob) {
                document.getElementById("dob-error").textContent = "Por favor, insira sua data de nascimento.";
                return;
            }
            if (validateAge(dob) < 18) {
                document.getElementById("dob-error").textContent = "Você precisa ser maior de 18 anos para se registrar.";
                return;
            }

            // Validação da Senha
            if (!validatePassword(password)) {
                document.getElementById("password-error").textContent = "A senha deve ter entre 8 a 20 caracteres.";
                return;
            }

            // Verificar se as senhas coincidem
            if (password !== confirmPassword) {
                document.getElementById("confirm-password-error").textContent = "As senhas não coincidem!";
                return;
            }

            // Aqui você pode adicionar lógica para enviar os dados para o servidor (como uma requisição AJAX)

            alert("Conta criada com sucesso!");
            window.location.href = "login.html"; // Redireciona para a página de login após registro
        });
    </script>