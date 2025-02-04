<script>
// Referenciar elementos HTML
const uploadForm = document.getElementById('uploadForm');
const videoList = document.getElementById('videoList');

// Função para exibir o vídeo enviado junto com as informações
function displayUploadedVideo(videoPath, title, category, duration) {
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-item';

    // Criar elemento de vídeo
    const videoElement = document.createElement('video');
    videoElement.src = videoPath;
    videoElement.controls = true;
    videoElement.width = 320;

    // Criar elementos de informações
    const videoTitle = document.createElement('p');
    videoTitle.textContent = `Título: ${title}`;

    const videoCategory = document.createElement('p');
    videoCategory.textContent = `Categoria: ${category}`;

    const videoDuration = document.createElement('p');
    videoDuration.textContent = `Duração: ${duration}`;

    // Adicionar informações ao container
    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(videoTitle);
    videoContainer.appendChild(videoCategory);
    videoContainer.appendChild(videoDuration);

    // Adicionar o container ao vídeo list
    videoList.prepend(videoContainer); // Adicionar o vídeo no início da lista
}

// Interceptar o envio do formulário para exibir o vídeo enviado e processar duração
uploadForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(uploadForm);

    // Adicionar a duração do vídeo
    const durationInput = document.getElementById('duration').value;
    formData.append('duration', durationInput);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'processa_uploads.php', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Exibir o vídeo enviado com as informações
                    displayUploadedVideo(
                        response.filePath,
                        response.title,
                        response.category,
                        response.duration
                    );
                } else {
                    alert(`Erro: ${response.message}`);
                }
            } catch (error) {
                console.error('Erro ao processar a resposta do servidor.', error);
                alert('Erro ao enviar o arquivo.');
            }
        } else {
            alert('Erro no upload. Tente novamente.');
        }
    };

    xhr.onerror = function () {
        alert('Erro na conexão. Verifique sua internet.');
    };

    xhr.send(formData);
});

// Função para enviar URL de vídeo
uploadUrlButton.addEventListener('click', function () {
    const videoUrl = videoUrlInput.value;

    if (videoUrl.trim() === '') {
        alert('Por favor, insira uma URL de vídeo.');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'processa_uploads.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('URL enviada com sucesso!');
            videoUrlInput.value = '';
        } else {
            alert('Erro ao enviar a URL. Tente novamente.');
        }
    };

    xhr.onerror = function () {
        alert('Erro na conexão. Verifique sua internet.');
    };

    // Enviar URL como JSON
    xhr.send(JSON.stringify({ video_url: videoUrl }));
});

</script>