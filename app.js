// Login simulado
const loginForm=document.getElementById('loginForm');
if(loginForm){
loginForm.addEventListener('submit',e=>{
    e.preventDefault();
    const user=document.getElementById('username').value;
    const pass=document.getElementById('password').value;
    if(user==='admin' && pass==='1234'){window.location.href='dashboard.html';}
    else{document.getElementById('errorMsg').textContent='Usuário ou senha inválidos!';}
});}

// Logout
document.querySelectorAll('#logoutBtn').forEach(btn=>btn.addEventListener('click',()=>{window.location.href='index.html';}));

// Dashboard Charts
const investmentChart=document.getElementById('investmentChart');
if(investmentChart){
new Chart(investmentChart,{type:'doughnut',data:{labels:['Ações','FIIs','CDB'],datasets:[{label:'Investimentos',data:[10000,5000,10000],backgroundColor:['#FFD700','#FFA500','#FF8C00'],borderWidth:1}]},options:{plugins:{legend:{labels:{color:'#fff'}}}}});}

const profitChart=document.getElementById('profitChart');
if(profitChart){
new Chart(profitChart,{type:'line',data:{labels:['Mai','Jun','Jul','Ago','Set','Out'],datasets:[{label:'Rendimento',data:[1000,1200,1500,1400,1800,2000],borderColor:'#FFD700',backgroundColor:'rgba(255,215,0,0.2)',fill:true,tension:0.3}]},options:{responsive:true,scales:{x:{ticks:{color:'#fff'}},y:{ticks:{color:'#fff'}}},plugins:{legend:{labels:{color:'#fff'}}}}});}

// Trading buttons
document.querySelectorAll('.buy-btn').forEach(btn=>btn.addEventListener('click',()=>{alert('Compra realizada!');}));
document.querySelectorAll('.sell-btn').forEach(btn=>btn.addEventListener('click',()=>{alert('Venda realizada!');}));

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('tradingChart').getContext('2d');
    const tradingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
            datasets: [{
                label: 'Valor do Portfólio (R$)',
                data: [5000, 5500, 5800, 6000, 6500, 7000, 7500],
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                borderColor: '#FFD700',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, labels: { color: '#FFD700' } },
                tooltip: { mode: 'index', intersect: false }
            },
            scales: {
                x: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } }
            }
        }
    });
});

document.querySelectorAll('.sidebar ul li a, .sidebar ul li button').forEach(el => {
    el.addEventListener('click', () => {
        el.style.transform = 'scale(0.95)';
        setTimeout(() => { el.style.transform = 'scale(1)'; }, 150);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  // === GRÁFICO 1: Distribuição de Investimentos ===
  const investmentCtx = document.getElementById("investmentChart").getContext("2d");
  new Chart(investmentCtx, {
    type: "doughnut",
    data: {
      labels: ["Ações", "Criptomoedas", "Tesouro", "Fundos", "Outros"],
      datasets: [{
        data: [35, 25, 20, 10, 10],
        backgroundColor: [
          "#FFD700",  // dourado
          "#b8860b",  // dourado escuro
          "#ffcc00",
          "#e6b800",
          "#fff2b2"
        ],
        borderColor: "#000",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#fff",
            font: { size: 14 }
          }
        },
        title: {
          display: false
        }
      }
    }
  });

  // === GRÁFICO 2: Rendimento dos Últimos 6 Meses ===
  const profitCtx = document.getElementById("profitChart").getContext("2d");
  new Chart(profitCtx, {
    type: "line",
    data: {
      labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"],
      datasets: [{
        label: "Rendimento (R$)",
        data: [1200, 1550, 1800, 2100, 2600, 3450],
        borderColor: "#FFD700",
        backgroundColor: "rgba(255, 215, 0, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#FFD700"
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: { color: "#fff" },
          grid: { color: "rgba(255,255,255,0.1)" }
        },
        y: {
          ticks: { color: "#fff" },
          grid: { color: "rgba(255,255,255,0.1)" }
        }
      },
      plugins: {
        legend: {
          labels: { color: "#fff" }
        }
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Gráfico de saldo (mini gráfico de linha)
  const ctx = document.getElementById('balanceChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jun', 'Jul', 'Ago', 'Set', 'Out'],
      datasets: [{
        label: 'Evolução do Saldo',
        data: [22000, 23500, 24000, 25450, 25500],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // ex: "dashboard.html"
  const menuLinks = document.querySelectorAll(".sidebar ul li a");

  menuLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

 // Alterna entre formulários
    const depositRadios = document.querySelectorAll('input[name="depositType"]');
    const bankForm = document.getElementById('bankForm');
    const pixForm = document.getElementById('pixForm');

    depositRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if(radio.value === 'bank') {
          bankForm.classList.remove('hidden');
          pixForm.classList.add('hidden');
        } else {
          bankForm.classList.add('hidden');
          pixForm.classList.remove('hidden');
        }
      });
    });

    // Simulação de envio
    bankForm.addEventListener('submit', e => {
      e.preventDefault();
      const account = document.getElementById('depositAccount').value;
      const agency = document.getElementById('depositAgency').value;
      const amount = document.getElementById('depositAmount').value;
      if(account && agency && amount) {
        const msg = document.getElementById('depositMsg');
        msg.textContent = `Depósito de R$ ${amount} confirmado na conta ${account} (Agência ${agency})!`;
        msg.style.display = 'block';
        bankForm.reset();
      }
    });

    pixForm.addEventListener('submit', e => {
      e.preventDefault();
      const key = document.getElementById('pixKey').value;
      const amount = document.getElementById('pixAmount').value;
      if(key && amount) {
        const msg = document.getElementById('pixMsg');
        msg.textContent = `PIX de R$ ${amount} enviado com sucesso para ${key}!`;
        msg.style.display = 'block';
        pixForm.reset();
      }
    });