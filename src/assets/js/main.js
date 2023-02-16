function exibircadastro(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_benef").value + '<b style="color: #186861;"> solicita agendamento para: </b>' + document.getElementById("dtagen_benef").value + '; </br>' +
      '<b style="color: #186861;">Consultas/exames/procedimentos: </b>' + document.getElementById("consulta_benef").value + '; </br>' +
      '<b style="color: #186861;">Agendado em: </b>' + document.getElementById("dtageem_benef").value + '; </br>' +
      '<b style="color: #186861;">Bairro/cidade/estado/município: </b>' + document.getElementById("bairro_benef").value + '; </br>' +
      '<b style="color: #186861;">Enviado para (e-mail/telefone/sms): </b>' + document.getElementById("envio_benef").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento (se necessário): </b>' + document.getElementById("obs_benef").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 700
  })

  return resultado
}

function exibirdirecionamento(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_direcionamento").value + '<b style="color: #186861;"> solicita agendamento para: </b>' + document.getElementById("dtagen_direcionamento").value + '; </br>' +
      '<b style="color: #186861;">Consultas(especialidade)/exames/procedimentos: </b>' + document.getElementById("consulta_direcionamento").value + '; </br>' +
      '<b style="color: #186861;">Locais informados: </b>' + document.getElementById("locais_direcionamento").value + '; </br>' +
      '<b style="color: #186861;">Cidade/estado: </b>' + document.getElementById("cidade_direcionamento").value + '; </br>' +
      '<b style="color: #186861;">Enviado para (e-mail/telefone/sms): </b>' + document.getElementById("envio_direcionamento").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento (se necessário): </b>' + document.getElementById("obs_direcionamento").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 700
  })

  return resultado
}
