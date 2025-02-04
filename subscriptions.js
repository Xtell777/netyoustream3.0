
    <script>
        // Uma função para cancelar a inscrição de um canal
        function unsubscribe(channelName) {
            // Enviar uma requisição ao servidor para remover o canal da lista de inscrições do usuário
            // Mostrar uma mensagem de confirmação ao usuário
            alert("Você cancelou a inscrição do canal " + channelName);
            // Atualizar a página para remover o cartão do canal
            location.reload();
        }
    </script>