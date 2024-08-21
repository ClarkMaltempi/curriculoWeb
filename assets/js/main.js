function Ativar() {
    var tag_li = document.getElementById('ini');
    tag_li.style.backgroundColor = "red";
    tag_li.click();
}

$('.DB_Timeline__item').on('click', function() {
    $('#tabs > div:visible').hide();
    $('#tab-' + $.trim($(this).text())).show();
});

function mostrarAtivo(tag) {
    var tag_li = document.getElementById('lista_menu');
    var tag_a = tag_li.getElementsByTagName('span');
    for (i = 0; i < tag_a.length; i++) {
        //tag_a[i].style.color = "";
        tag_a[i].style.backgroundColor = "";
    }
    //tag.style.color = "orange";
    tag.style.backgroundColor = "red";

}
//Botão de seleção

  // Array de Empregos Descrição
  var produtos = [{
    titulo: "Líder Analista de Processos e Suporte T.I.",
    descricao: "Função atual",
    tipoContrato: "CLT",
    remuneracao: 3150.00,
    periodo: "10/06/2021 - Aberto"
}, {
    titulo: "Analista de Suporte T.I.",
    descricao: "Função inicial",
    tipoContrato: "CLT",
    remuneracao: 2500.00,
    periodo: "10/06/2021 - 03/01/2022"
}, {
    titulo: "Analista de Suporte e Infraestrutura T.I.",
    descricao: "Freelance",
    tipoContrato: "PJ",
    remuneracao: 5000.00,
    periodo: "01/05/2021 - 31/05/2021"
}, {
    titulo: "Técnico Eletrônico Senior",
    descricao: "Contrato Temporário",
    tipoContrato: "CLT",
    remuneracao: 2467.53,
    periodo: "07/01/2021 - 20/04/2021"
}, {
    titulo: "Técnico Sistema Senior",
    descricao: "Ultima função",
    tipoContrato: "CLT",
    remuneracao: 3444.37,
    periodo: "24/03/2016 - 22/04/2020"
}, {
    titulo: "Técnico Sistema Pleno I",
    descricao: "função inicial",
    tipoContrato: "CLT",
    remuneracao: 2147.54,
    periodo: "24/03/2016 - 22/04/2020"
}, {
    titulo: "Técnico em Instalação e Manutenção Pleno",
    descricao: "Ultima função",
    tipoContrato: "CLT",
    remuneracao: 2692.53,
    periodo: "01/04/2015 - 11/01/2016"
}, {
    titulo: "Técnico Eletrônico",
    descricao: "Ultima função",
    tipoContrato: "CLT",
    remuneracao: 1762.60,
    periodo: "11/04/2013 - 11/11/2014"
}, {
    titulo: "Técnico Eletrônico",
    descricao: "Ultima função",
    tipoContrato: "CLT",
    remuneracao: 1596.64,
    periodo: "16/02/2011 - 21/02/2013"
}, {
    titulo: "Técnico Eletrônico",
    descricao: "Ultima função",
    tipoContrato: "CLT",
    remuneracao: 1596.64,
    periodo: "11/11/2010 - 10/01/2011"
}, {
    titulo: "Técnico Eletrônico Elevadores e Escada Rolante",
    descricao: "Ultima função",
    tipoContrato: "CLT",
    remuneracao: 1227.30,
    periodo: "03/08/2009 - 01/06/2010"
}, {
    titulo: "Analista de Transporte em Comercio Exterior",
    descricao: "Ultima função",
    tipoContrato: "CLT",
    remuneracao: 737.45,
    periodo: "05/11/2008 - 25/03/2009"
}



];

// Função para exibir o modal com as informações do produto
function exibirModal(index) {
var modal = document.getElementById("modal");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");
var modalContract = document.getElementById("modal-contract");
var modalSalary = document.getElementById("modal-salary");
var modalPeriod = document.getElementById("modal-period");

var produto = produtos[index];
modalTitle.textContent = produto.titulo;
modalDescription.textContent = produto.descricao;
modalContract.textContent = "Tipo de contrato: " + produto.tipoContrato;
modalSalary.textContent = "Remuneração: R$ " + produto.remuneracao.toFixed(2);
modalPeriod.textContent = "Período: " + produto.periodo;

modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
var modal = document.getElementById("modal");
modal.style.display = "none";
}