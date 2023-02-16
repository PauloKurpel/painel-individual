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


function exibirservico(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_servico").value + '<b style="color: #186861;"> solicita agendamento para: </b>' + document.getElementById("dtagen_servico").value + '<b style="color: #186861;">, mas não foi localizado a especialidade/procedimento desejado. Ciente da abertura desta demanda.</b>' + '</br>' +
      '<b style="color: #186861;">Consultas(especialidade)/exames/procedimentos: </b>' + document.getElementById("consulta_servico").value + '; </br>' +
      '<b style="color: #186861;">Cidade/estado: </b>' + document.getElementById("cidade_servico").value + '; </br>' +
      '<b style="color: #186861;">Enviado para (e-mail/telefone/sms): </b>' + document.getElementById("envio_servico").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento (se necessário): </b>' + document.getElementById("obs_servico").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 700
  })

  return resultado
}

function exibirflowrn(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_flowrn").value + '<b style="color: #186861;"> solicita agendamento para: </b>' + document.getElementById("dtagen_flowrn").value + '<b style="color: #186861;">, mas não haviam agendas disponíveis em agendamento e direcionamento conforme informado pelo beneficiário. Ciente da abertura desta demanda.</b>' + '</br>' +
      '<b style="color: #186861;">Consultas(especialidade)/exames/procedimentos: </b>' + document.getElementById("consulta_flowrn").value + '; </br>' +
      '<b style="color: #186861;">Cidade/estado: </b>' + document.getElementById("cidade_flowrn").value + '; </br>' +
      '<b style="color: #186861;">Enviado para (e-mail/telefone/sms): </b>' + document.getElementById("envio_flowrn").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento (se necessário): </b>' + document.getElementById("obs_flowrn").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 700
  })

  return resultado
}

function exibirfinanceiroinfo(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_financeiroinfo").value + '<b style="color: #186861;"> solicita informações sobre seu(s) boleto(s).</b> </br>' +
      '<b style="color: #186861;">Mês: </b>' + document.getElementById("mes_financeiroinfo").value + '; </br>' +
      '<b style="color: #186861;">Vencimento: </b>' + document.getElementById("vcto_financeiroinfo").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento: </b>' + document.getElementById("obs_financeiroinfo").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 700
  })

  return resultado
}

function exibirfinanceiroboleto(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_financeiroboleto").value + '<b style="color: #186861;"> solicita informações sobre seu(s) boleto(s).</b> </br>' +
      '<b style="color: #186861;">Mês: </b>' + document.getElementById("mes_financeiroboleto").value + '; </br>' +
      '<b style="color: #186861;">Vencimento: </b>' + document.getElementById("vcto_financeiroboleto").value + '; </br>' +
      '<b style="color: #186861;">Enviado para (e-mail/telefone/sms): </b>' + document.getElementById("envio_financeiroboleto").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento: </b>' + document.getElementById("obs_financeiroboleto").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 700
  })

  return resultado
}

function exibirreembolso(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_reembolso").value + '<b style="color: #186861;"> solicita informações sobre reembolso.</b> </br>' +
      '<b style="color: #186861;">Mês: </b>' + document.getElementById("mes_reembolso").value + '; </br>' +
      '<b style="color: #186861;">Protocolo: </b>' + document.getElementById("protocolo_reembolso").value + '; </br>' +
      '<b style="color: #186861;">Status: </b>' + document.getElementById("status_reembolso").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento: </b>' + document.getElementById("obs_reembolso").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 700
  })

  return resultado
}

function exibirghi(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_ghi").value + '<b style="color: #186861;"> solicita informações sobre GHI.</b> </br>' +
      '<b style="color: #186861;">Data de solicitação: </b>' + document.getElementById("dtsoli_ghi").value + '; </br>' +
      '<b style="color: #186861;">Consultas/exames/procedimentos: </b>' + document.getElementById("consulta_ghi").value + '; </br>' +
      '<b style="color: #186861;">Status: </b>' + document.getElementById("status_ghi").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento: </b>' + document.getElementById("obs_ghi").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 700
  })

  return resultado
}

function exibirtoken(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_token").value + '<b style="color: #186861;"> n° do token informado </b>' + document.getElementById("token_token").value + '<b style="color: #186861;">.Realizado o envio após as 3 confirmações.</b>' + '; </br>' +
      '<b style="color: #186861;">CPF: </b>' + document.getElementById("cpf_token").value + '; </br>' +
      '<b style="color: #186861;">Nome da mãe: </b>' + document.getElementById("mae_token").value + '; </br>' +
      '<b style="color: #186861;">Data de nascimento: </b>' + document.getElementById("nasc_token").value + '; </br>' +
      '<b style="color: #186861;">Telefone: </b>' + document.getElementById("telefone_token").value + '; </br>' +
      '<b style="color: #186861;">E-mail: </b>' + document.getElementById("email_token").value + '; </br>' +
      '<b style="color: #186861;">Obs. do atendimento (se necessário): </b>' + document.getElementById("obs_token").value + '; </br>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 900
  })

  return resultado
}
