    const cuentas = {
      1: { nombre: "Mali ", saldo: 200, password: "1234" },
      2: { nombre: "Gera", saldo: 290, password: "5678" },
      3: { nombre: "Maui", saldo: 67, password: "asdf" },
    };

    let selectedAccount = null;

    function realizarOperacion() {
      const password = document.getElementById("password").value;
      const account = document.getElementById("accounts").value;

      if (account in cuentas && password === cuentas[account].password) {
        selectedAccount = account;
        document.getElementById("operations").style.display = "block";
        document.getElementById("resultado").style.display = "block";
        document.getElementById("mensaje").textContent = "";
      } else {
        document.getElementById("mensaje").textContent = "Contraseña incorrecta, intenta nuevamente.";
      }
    }

    function consultarSaldo() {
      if (selectedAccount !== null && selectedAccount in cuentas) {
        const saldoActual = cuentas[selectedAccount].saldo;
        document.getElementById("saldoActual").textContent = `Saldo actual: $${saldoActual.toFixed(2)}`;
        document.getElementById("mensaje").textContent = "";
      } else {
        document.getElementById("mensaje").textContent = "Selecciona una cuenta válida.";
      }
    }
    function ingresarMonto() {
      const monto = parseFloat(prompt("Ingresa el monto a ingresar:"));
      if (isNaN(monto) || monto <= 0) {
        alert("Ingresa un monto válido.");
        return;
      }

      const saldoActual = cuentas[selectedAccount].saldo;
      const nuevoSaldo = saldoActual + monto;

      if (nuevoSaldo > 990) {
        alert("La cuenta no debe tener más de $990.");
        return;
      }

      cuentas[selectedAccount].saldo = nuevoSaldo;
      document.getElementById("saldoActual").textContent = `Saldo actual: $${nuevoSaldo.toFixed(2)}`;
      document.getElementById("mensaje").textContent = `Se ingresaron $${monto.toFixed(2)}. Nuevo saldo: $${nuevoSaldo.toFixed(2)}`;
    }

    function retirarMonto() {
      const monto = parseFloat(prompt("Ingresa el monto a retirar:"));
      if (isNaN(monto) || monto <= 0) {
        alert("Ingresa un monto válido.");
        return;
      }

      const saldoActual = cuentas[selectedAccount].saldo;
      const nuevoSaldo = saldoActual - monto;

      if (nuevoSaldo < 10) {
        alert("La cuenta no debe tener menos de $10.");
        return;
      }

      cuentas[selectedAccount].saldo = nuevoSaldo;
      document.getElementById("saldoActual").textContent = `Saldo actual: $${nuevoSaldo.toFixed(2)}`;
      document.getElementById("mensaje").textContent = `Se retiraron $${monto.toFixed(2)}. Nuevo saldo: $${nuevoSaldo.toFixed(2)}`;
    }