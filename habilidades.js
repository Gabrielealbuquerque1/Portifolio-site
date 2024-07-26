var icones = document.querySelectorAll(".hab-icon");
var descricao = document.querySelector(".hab-desc");
for (var i = 0; i<icones.length; i++) {
        icones[i].addEventListener("mouseover", function () {
        var iconeAtual = this.id;
        switch(iconeAtual) {
            case "javascript":
                descricao.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
                break;
            
            case "html":
                descricao.innerHTML = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores."
                break;
            
            case "css":
                descricao.innerHTML = "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web."
                break;
                
            case "git":
                descricao.innerHTML = "o Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
                break;

            case "Canva":
                descricao.innerHTML = "Canva é uma plataforma de design gráfico que permite aos usuários criar gráficos de mídia social, apresentações, infográficos, pôsteres e outros conteúdos visuais."
                break;

            case "Adobe PS":
                descricao.innerHTML = "O Adobe Photoshop é um software de edição de imagens bidimensionais,usado para edição de imagens, criação de arte digital, design gráfico e animações."
                break;
                
        }
    })
}
