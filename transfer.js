const transferType=document.getElementById('transferType');
const pixOptions=document.getElementById('pixOptions');
const depositOptions=document.getElementById('depositOptions');
const sendTransfer=document.getElementById('sendTransfer');
const transferMsg=document.getElementById('transferMsg');

transferType.addEventListener('change',()=>{
    if(transferType.value==='pix'){
        pixOptions.style.display='block';
        depositOptions.style.display='none';
    } else{
        pixOptions.style.display='none';
        depositOptions.style.display='block';
    }
});

sendTransfer.addEventListener('click',()=>{
    let amount=document.getElementById('transferAmount').value;
    if(!amount || amount<=0){alert('Digite um valor válido!'); return;}
    if(transferType.value==='pix'){
        let key=document.getElementById('pixKey').value;
        if(!key){alert('Digite a chave PIX!'); return;}
        transferMsg.textContent=`PIX de R$ ${amount} enviado com sucesso!`;
    } else{
        let acc=document.getElementById('accountNumber').value;
        let agency=document.getElementById('agencyNumber').value;
        if(!acc || !agency){alert('Preencha conta e agência!'); return;}
        transferMsg.textContent=`Depósito de R$ ${amount} realizado com sucesso!`;
    }
    transferMsg.style.display='block';
    setTimeout(()=>{transferMsg.style.display='none';},3000);
});
