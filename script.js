// Função para gerar um código único de resgate
// Função para gerar um código único
function gerarCodigo() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 8; i++) {
        codigo += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return codigo;
}

// Função para enviar a mensagem para o WhatsApp
function enviarWhatsApp(presente) {
    const codigo = gerarCodigo();
    const numero = "553591416953"; // Coloque o número de WhatsApp que vai receber a mensagem (com código de país)
    const mensagem = `Parabéns! Você resgatou o presente "${presente}". Seu código único de resgate é: ${codigo}.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank'); // Abre o WhatsApp em uma nova aba
}

// Função para associar os eventos aos botões de resgate
function associarResgates() {
    const botoes = {
        'resgatar-jogo': 'Bora jogar para eu te carregar',
        'resgatar-filme': 'Filme Juntos',
        'resgatar-video': 'Video Especial',
        'resgatar-surpresa': 'Surpresa'
    };

    for (const [id, presente] of Object.entries(botoes)) {
        const botao = document.getElementById(id);
        if (botao) {
            botao.onclick = function() {
                enviarWhatsApp(presente);
            };
        } else {
            console.warn(`Botão com ID ${id} não encontrado.`);
        }
    }
}

// Executa a função para associar os eventos ao carregar a página
window.onload = associarResgates;