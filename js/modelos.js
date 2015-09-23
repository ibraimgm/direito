
$(document).ready( function () {
  $('#modelos-download').DataTable({
    /* dados */
    "data":[
      {"titulo":"ABNT Simplificado", "anchor":"#abnt-simplificado", "odt":"../files/modelos/ModeloABNT_Simples.odt", "doc":"../files/modelos/ModeloABNT_Simples.doc", "docx":"../files/modelos/ModeloABNT_Simples.docx"},
      {"titulo":"ABNT Artigo", "anchor":"#abnt-artigo", "odt":"../files/modelos/ModeloABNT_Artigo.odt", "doc":"../files/modelos/ModeloABNT_Artigo.doc", "docx":"../files/modelos/ModeloABNT_Artigo.docx"},
      {"titulo":"ABNT Fichamento", "anchor":"#abnt-fichamento", "odt":"../files/modelos/ModeloABNT_Fichamento.odt", "doc":"../files/modelos/ModeloABNT_Fichamento.doc", "docx":"../files/modelos/ModeloABNT_Fichamento.docx"},
      {"titulo":"ABNT Palestra", "anchor":"#abnt-palestra", "odt":"../files/modelos/ModeloABNT_Palestra.odt", "doc":"../files/modelos/ModeloABNT_Palestra.doc", "docx":"../files/modelos/ModeloABNT_Palestra.docx"}
    ],
    /* config. colunas */
    "columns": [
      {"data":"titulo", "title":"Modelo", "className":"dt-left",
       "render": function (data, type, row) {
         if (type === "sort" || type === 'type')
           return data;
         else
           return '<a href="' + row.anchor + '">' + data + '</a>';
       }},
      {"data":"odt", "title":"ODT", "width":"5%", "className":"dt-center",
       "render": function (data, type, row) {
         if (type === "sort" || type === 'type')
           return data;
         else if (data != null)
           return '<a href="' + data + '"><i class="fa fa-download"></i></a>';
         else
           return '<i class="fa fa-ban"></i>';
       }},
      {"data":"doc", "title":"DOC", "width":"5%", "className":"dt-center",
       "render": function (data, type, row) {
         if (type === "sort" || type === 'type')
           return data;
         else if (data != null)
           return '<a href="' + data + '"><i class="fa fa-file-word-o"></i></a>';
         else
           return '<i class="fa fa-ban"></i>';
       }},
      {"data":"docx", "title":"DOCX", "width":"5%", "className":"dt-center",
       "render": function (data, type, row) {
         if (type === "sort" || type === 'type')
           return data;
         else if (data != null)
           return '<a href="' + data + '"><i class="fa fa-windows"></i></a>';
         else
           return '<i class="fa fa-ban"></i>';
       }}
    ],
    /* feats. */
    "lengthChange": false,
    "pageLength": 25,
    "searching":false,
    "ordering":false,
    /* i18n */
    "language": {
      "url":"../js/Portuguese-Brazil.lang"
    }
  });
});
