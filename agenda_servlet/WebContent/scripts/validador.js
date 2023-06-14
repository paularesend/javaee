/**
 *  Validação de formulario
 *  @author: Paula
 */

function validar(){
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === ""){
		alert('Preencha o campo Nome')
		frmContao.nome.focus()
		return false
	} else if (fone === "") {
		alert('Preencha o campo Fone')
		frmContao.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}