//função para totalizar valor de assinatura mensal
function totaliza() {
    total = 0.00;
    //plano mensal
    if (document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if (document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if (document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if (document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if (document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function vUsuarioSenha() {
    var vUser = document.getElementById("login").value;
    var vSenha = document.getElementById("senha").value;

    var vJson = ' {"user": "Usuario",  "pass":"Abc$123"}';

    var vObJson = JSON.parse(vJson);

    if (vUser == vObJson.user && vSenha == vObJson.pass) {
        return true;
    } else {
        alert("Usuário e/ou Senha não conferem. Usuario / Abc$123");
        return false;
    }
}





function validar_tudo() {
    if (vUsuarioSenha()) {
        if (document.getElementById("butassin").disabled) {
            document.getElementById("butassin").disabled = false;
            return false;
        } else {
            return true;
        }
     } else {
        return false;
    }
}
function contador() {
        var vdata = new Date();
        var vcontP = document.getElementById("dataCont");
        var vcont = 1;
        setInterval(function () {vcontP.innerHTML = vdata + ' ' + vcont++}, 1000);
    }