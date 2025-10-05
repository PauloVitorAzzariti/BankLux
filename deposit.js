const confirmDeposit=document.getElementById('confirmDeposit');
const depositMsg=document.getElementById('depositMsg');

confirmDeposit.addEventListener('click',()=>{
    let account=document.getElementById('depositAccount').value;
    let agency=document.getElementById('depositAgency').value;
    let amount=document.getElementById('depositAmount').value;

    if(!account || !agency || !amount || amount<=0){
        alert('Preencha todos os campos corretamente!');
        return;
    }
    depositMsg.textContent=`Depósito de R$ ${amount} realizado com sucesso na conta ${account}!`;
    depositMsg.style.display='block';
    setTimeout(()=>{depositMsg.style.display='none';},3000);
});
