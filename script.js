// Função para gerar um código único de resgate
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
    const numero = "553591416953; // Coloque o número de WhatsApp que vai receber a mensagem (com código de país)
    const mensagem = `Parabéns! Você resgatou o presente "${presente}". Seu código único de resgate é: ${codigo}.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank'); // Abre o WhatsApp em uma nova aba
}

// Associando as funções aos botões de resgate
document.getElementById('resgatar-jogo').onclick = function() {
    enviarWhatsApp('Bora jogar para eu te carregar');
};

document.getElementById('resgatar-filme').onclick = function() {
    enviarWhatsApp('Filme Juntos');
};

document.getElementById('resgatar-video').onclick = function() {
    enviarWhatsApp('Video Especial');
};

document.getElementById('resgatar-surpresa').onclick = function() {
    enviarWhatsApp('Surpresa');
};