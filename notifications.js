 <script>
        <script>
    // Função para marcar uma notificação como lida
    function markAsRead(button) {
        // Encontrar o elemento pai da notificação
        var notification = button.closest('.notification');
        
        // Adicionar a classe 'read' à notificação
        notification.classList.add('read');
    }

    // Adicionar evento de clique aos botões de "Marcar como lida"
    var markButtons = document.querySelectorAll('.mark-as-read');
    markButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            markAsRead(this);
        });
    });

    // Função para exibir a hora de forma legível
    function timeAgo(date) {
        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " anos atrás";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " meses atrás";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " dias atrás";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " horas atrás";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutos atrás";
        }
        return Math.floor(seconds) + " segundos atrás";
    }

    // Converter os timestamps em strings legíveis
    var timeAgoElements = document.querySelectorAll('.time-ago');
    timeAgoElements.forEach(function(element) {
        var timestamp = new Date(element.getAttribute('data-timestamp'));
        element.innerText = timeAgo(timestamp);
    });

    // Função para inscrever-se em um canal
    function subscribeChannel(button) {
        // Encontrar o elemento pai da notificação
        var channelInfo = button.closest('.channel-info');
        
        // Alterar o texto do botão
        var buttonText = channelInfo.querySelector('.subscribe-button span');
        if (buttonText.innerText === 'Inscreva-se') {
            buttonText.innerText = 'Inscrito';
        } else {
            buttonText.innerText = 'Inscreva-se';
        }

        // Adicionar ou remover a classe 'subscribed' ao elemento pai da notificação
        channelInfo.classList.toggle('subscribed');
    }

    // Adicionar evento de clique aos botões de inscrição
    var subscribeButtons = document.querySelectorAll('.subscribe-button');
    subscribeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            subscribeChannel(this);
        });
    });
</script>

