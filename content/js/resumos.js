/* -*- coding:utf-8-unix -*- */

$(document).ready( function () {
  $('#table_id').DataTable({
    /* dados */
    "data":[
      {"data":new Date('2013/09/21'), "versao":"N/A", "categoria":"Constitucional", "titulo":"Direito Constitucional I", "url":"../files/resumos/constitucional-1.pdf"},
      {"data":new Date('2014/09/20'), "versao":"1.0", "categoria":"Constitucional", "titulo":"Constituição Econômica", "url":"../files/resumos/constituicao-economica.pdf"},
      {"data":new Date('2014/05/10'), "versao":"1.0", "categoria":"Constitucional", "titulo":"Interesses Difusos e Coletivos", "url":"../files/resumos/int-difusos-coletivos.pdf"},

      {"data":new Date('2015/04/26'), "versao":"1.1", "categoria":"Civil", "titulo":"Direito dos Contratos", "url":"../files/resumos/direito-contratos.pdf"},
      {"data":new Date('2015/06/20'), "versao":"1.1", "categoria":"Civil", "titulo":"Direito das Obrigações", "url":"../files/resumos/direito-obrigacoes.pdf"},
      {"data":new Date('2014/06/08'), "versao":"1.3", "categoria":"Civil", "titulo":"Negócios Jurídicos", "url":"../files/resumos/negocios-juridicos.pdf"},
      {"data":new Date('2015/09/26'), "versao":"1.1", "categoria":"Civil", "titulo":"Responsabilidade Civil", "url":"../files/resumos/resp-civil.pdf"},
      {"data":new Date('2017/09/23'), "versao":"1.1", "categoria":"Civil", "titulo":"Direito do Consumidor", "url":"../files/resumos/direito-consumidor.pdf"},
      {"data":new Date('2017/10/14'), "versao":"1.1", "categoria":"Civil", "titulo":"Direito de Propriedade", "url":"../files/resumos/direito-propriedade.pdf"},

      {"data":new Date('2016/06/12'), "versao":"1.1", "categoria":"Empresarial", "titulo":"Direito Empresarial I", "url":"../files/resumos/dir-empresarial-1.pdf"},
      {"data":new Date('2018/09/22'), "versao":"1.0", "categoria":"Empresarial", "titulo":"Falência e Recuperação Judicial", "url":"../files/resumos/falencia-rec-judicial.pdf"},

      {"data":new Date('2013/09/15'), "versao":"N/A", "categoria":"Outros", "titulo":"Direito Internacional Público", "url":"../files/resumos/direito-internacional.pdf"},
      {"data":new Date('2013/09/15'), "versao":"N.A", "categoria":"Outros", "titulo":"Introdução ao Direito", "url":"../files/resumos/introducao-direito.pdf"},

      {"data":new Date('2014/06/01'), "versao":"1.3", "categoria":"Penal", "titulo":"Direito Penal I", "url":"../files/resumos/direito-penal-1.pdf"},
      {"data":new Date('2015/06/13'), "versao":"1.1", "categoria":"Penal", "titulo":"Crimes no Código Penal", "url":"../files/resumos/penal-crimes-comuns.pdf"},
      {"data":new Date('2015/06/13'), "versao":"1.1", "categoria":"Penal", "titulo":"Crimes Especiais no Código Penal", "url":"../files/resumos/penal-crimes-especiais.pdf"},
      {"data":new Date('2014/11/10'), "versao":"1.0", "categoria":"Penal", "titulo":"Teoria da Pena", "url":"../files/resumos/teoria-pena.pdf"},

      {"data":new Date('2015/11/07'), "versao":"1.1", "categoria":"Trabalho", "titulo":"Introdução ao Direito do Trabalho", "url":"../files/resumos/intr-direito-trabalho.pdf"},
      {"data":new Date('2015/11/02'), "versao":"1.1", "categoria":"Trabalho", "titulo":"Relações de Trabalho", "url":"../files/resumos/relacoes-trabalho.pdf"},

      {"data":new Date('2016/11/06'), "versao":"1.1", "categoria":"Administrativo", "titulo":"Introdução ao Direito Administrativo", "url":"../files/resumos/introducao-dir-adm.pdf"},

      {"data":new Date('2014/11/14'), "versao":"1.1", "categoria":"Processo", "titulo":"Processo Civil I", "url":"../files/resumos/processo-civil-1.pdf"},
      {"data":new Date('2015/06/02'), "versao":"1.1", "categoria":"Processo", "titulo":"Processo Civil II", "url":"../files/resumos/processo-civil-2.pdf"},
      {"data":new Date('2016/06/05'), "versao":"1.1", "categoria":"Processo", "titulo":"Processo Civil III", "url":"../files/resumos/processo-civil-3.pdf"},
      {"data":new Date('2016/11/06'), "versao":"1.1", "categoria":"Processo", "titulo":"Execução Civil", "url":"../files/resumos/execucao-civil.pdf"},
      {"data":new Date('2014/08/11'), "versao":"1.1", "categoria":"Processo", "titulo":"Processo Penal I", "url":"../files/resumos/processo-penal-1.pdf"},
      {"data":new Date('2015/11/15'), "versao":"1.1", "categoria":"Processo", "titulo":"Processo Penal II", "url":"../files/resumos/processo-penal-2.pdf"},
      {"data":new Date('2016/06/12'), "versao":"1.1", "categoria":"Processo", "titulo":"Processo Penal III", "url":"../files/resumos/processo-penal-3.pdf"},
      {"data":new Date('2016/04/17'), "versao":"1.0", "categoria":"Processo", "titulo":"Processo do Trabalho I", "url":"../files/resumos/processo-trabalho-1.pdf"},
      {"data":new Date('2017/04/21'), "versao":"1.0", "categoria":"Processo", "titulo":"Processo do Trabalho II", "url":"../files/resumos/processo-trabalho-2.pdf"},
      {"data":new Date('2017/06/24'), "versao":"1.1", "categoria":"Processo", "titulo":"Tutelas de Urgência e Evidência", "url":"../files/resumos/tutelas-urgencia.pdf"},
      {"data":new Date('2014/06/15'), "versao":"1.4", "categoria":"Processo", "titulo":"Teoria Geral do Processo", "url":"../files/resumos/tgp.pdf"}
    ],
    /* config. colunas */
    "columns": [
      {"data":"data", "title":"Data", "type":"date", "width":"10%", "className":"dt-center",
       "render": function (data, type, row) {
         if (type === "sort" || type === 'type')
           return data;
         else
           return (data.getDate() < 10 ? "0" : "") + data.getDate() + "/"
           + (data.getMonth() < 9 ? "0" : "") + (data.getMonth() + 1) + "/"
           + data.getFullYear();
       }},
      {"data":"versao", "title": "Versão", "width":"10%", "className":"dt-center"},
      {"data":"titulo", "title":"Matéria",
       "render": function (data, type, row) {
         if (type === "sort" || type === 'type')
           return data;
         else
           return '<a href="' + row.url + '">' + data + "</a>";
       }},
      {"data":"categoria", "title":"Categoria", "width":"20%", "className":"dt-center"}

    ],
    /* ordenacao padrao*/
    "order": [[0, 'desc']],
    /* feats. */
    "lengthChange": false,
    "pageLength": 25,
    /* i18n */
    "language": {
      "url":"../js/Portuguese-Brazil.lang"
    }
  });
});
