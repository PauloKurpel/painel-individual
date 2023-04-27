function exibircadastro(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Senhor(a) </b>' + document.getElementById("nome_benef").value + '<b style="color: #186861;"> solicita agendamento para especialidade </b>' + document.getElementById("consulta_benef").value +
      '<b style="color: #186861;">, agendado com o profissional </b>' + document.getElementById("profissional_benef").value +
      '<b style="color: #186861;"> na especialidade </b>' + document.getElementById("consulta_benef").value +
      '<b style="color: #186861;">, data/hora: </b>' + document.getElementById("dtageem_benef").value +
      '<b style="color: #186861;">, procedimento: </b>' + document.getElementById("procedimento_benef").value +
      '<br><b style="color: red;">Necessário comparecer com 15 minutos de antecedência portando máscara, documento de identificação e carteirinha do convênio.</b>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 900
  })

  return resultado
}

function exibirdirecionamento(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Senhor(a) </b>' + document.getElementById("nome_direcionamento").value + '<b style="color: #186861;"> solicita indicação de prestadores, referente a especialidade </b>' + document.getElementById("consulta_direcionamento").value +
      '<b style="color: #186861;"> na região de </b>' + document.getElementById("cidade_direcionamento").value +
      '<b style="color: #186861;">. Realizado indicação. Encaminhado via e-mail/SMS: </b>' + document.getElementById("envio_direcionamento").value +
      '<br><b style="color: red;">Ciente que a rede de atendimento também está disponível via site/app. Ciente também que a validade da guia tem o prazo de 90 dias, precisa ter a indicação clinica ou hipótese diagnóstica.</b>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 900
  })

  return resultado
}


function exibirservico(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_servico").value + '<b style="color: #186861;"> solicita agendamento para: </b>' + document.getElementById("consulta_servico").value + '<b style="color: #186861;">, mas não foi localizado a especialidade/procedimento desejado. Ciente da abertura desta demanda. Prazo para a tratativa do caso (5 dias úteis).</b>' + '</br>' +
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
      '<b style="color: #186861;">Sra(o) </b>' + document.getElementById("nome_flowrn").value + '<b style="color: #186861;"> solicita agendamento para: </b>' + document.getElementById("consulta_flowrn").value + '<b style="color: #186861;">, mas não haviam agendas disponíveis em agendamento e direcionamento conforme informado pelo beneficiário. Ciente da abertura desta demanda.</b>' + '</br>' +
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
      '<b style="color: #186861;">Senhor(a) </b>' + document.getElementById("nome_financeiroinfo").value +
      '<b style="color: #186861;"> solicita informações sobre o valor maior do seu boleto do mês </b>' + document.getElementById("mes_financeiroinfo").value + '. ' +
      '<b style="color: #186861;">Informada que a ANS, definiu que os planos de saúde individuais e familiares médico-hospitalares regulamentados terão reajuste de 15,5%, referente ao percentual definido no ano de 2022.</b>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 1000
  })

  return resultado
}

function exibirfinanceiroboleto(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Senhor(a) </b>' + document.getElementById("nome_financeiroboleto").value +
      '<b style="color: #186861;"> solicita 2ª via do boleto / informação sobre boleto da competência </b>' + document.getElementById("competencia_financeiroboleto").value + '. ' +
      '<b style="color: #186861;">Encaminhado via e-mail/SMS: </b>' + document.getElementById("envio_financeiroboleto").value + '. ' +
      '<b style="color: #186861;">Vencimento no dia </b>' + document.getElementById("vcto_financeiroboleto").value +
      '<br><b style="color: red;">Ciente que segunda via de boleto também está disponível via site/app.</b>',
      showCloseButton: false,
      showConfirmButton: false,
      width: 900
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
      '<b style="color: #186861;">Obs. do atendimento: </b>' + document.getElementById("obs_reembolso").value + '; </br>' +
      '<br><b style="color: red;">Cliente ciente à respeito do processo de análise e prazo de reembolso, conforme clausulas contratuais.</b>',
      showCloseButton: false,
      showConfirmButton: false,
      width: 900
  })

  return resultado
}

function exibirghi(){
  var resultado = Swal.fire({
      icon: 'question',
      html:
      '<b style="color: #186861;">Senhor(a) </b>' + document.getElementById("nome_ghi").value +
      '<b style="color: #186861;"> solicita informações sobre o pedido de GIH </b>' + document.getElementById("consulta_ghi").value +
      '<b style="color: #186861;">, com a data de solicitação: </b>' + document.getElementById("dtsoli_ghi").value + '. ' +
      '<b style="color: #186861;">Oriento que o pedido está em tratativa. Prazo de 21 dias úteis.</b>' ,
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
      '<b style="color: #186861;">Obs. do atendimento (se necessário): </b>' + document.getElementById("obs_token").value + '; </br>' +
      '<b style="color: red;">Beneficiário ciente que o token está disponível também através do site ou do aplicativo.</b>' ,
      showCloseButton: false,
      showConfirmButton: false,
      width: 900
  })

  return resultado
}
