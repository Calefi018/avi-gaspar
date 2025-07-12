//      -------------------------- Botão copiar chave pix

document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona os elementos do HTML pelos seus IDs
    const copyButton = document.getElementById('copy-button');
    const pixKeyInput = document.getElementById('pix-key');
    const feedbackMessage = document.getElementById('copy-feedback');

    // Garante que os elementos existem na página antes de continuar
    if (copyButton && pixKeyInput && feedbackMessage) {
        
        // 2. Adiciona um "ouvinte" de evento de clique no botão
        copyButton.addEventListener('click', () => {
            
            // 3. Pega o valor (o texto) de dentro do campo de input
            const pixKey = pixKeyInput.value;

            // 4. Usa a API do navegador para copiar o texto para a área de transferência
            navigator.clipboard.writeText(pixKey).then(() => {
                
                // 5. Se a cópia for bem-sucedida, mostra a mensagem de feedback
                feedbackMessage.textContent = 'Chave copiada com sucesso!';
                copyButton.textContent = 'Copiado!'; // Muda o texto do botão temporariamente

                // 6. Limpa a mensagem e restaura o texto do botão após 3 segundos
                setTimeout(() => {
                    feedbackMessage.textContent = '';
                    copyButton.textContent = 'Copiar';
                }, 3000); // 3000 milissegundos = 3 segundos
                
            }).catch(err => {
                // Se ocorrer um erro (raro, mas bom ter)
                feedbackMessage.textContent = 'Erro ao copiar a chave.';
                console.error('Erro ao copiar a chave Pix: ', err);
            });
        });
    }
});