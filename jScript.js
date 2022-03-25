        //login button event handler
        let enterBtn = document.getElementById('enter-btn')
        enterBtn.addEventListener("click", function (event) {
            document.getElementById("login-area").style.display = "none"
            const transactionArea =
                document.getElementById("transaction-area")
            transactionArea.style.display = "block"
        })

        //deposit button event handler

        let depoBtn = document.getElementById("depo-button")
        depoBtn.addEventListener("click", function (event) {
            /* const depoAmount = parseFloat(document.getElementById("depo-amount").value) */
            /* const currentDepo = parseFloat(document.getElementById("current-depo").innerText)
            const totalDepo = depoAmount + currentDepo
            console.log(totalDepo)
            document.getElementById("current-depo").innerText = totalDepo */

            const depoAmount = getInputNumber("depo-amount")
            updateSpanText("current-depo", depoAmount)
            //Current balance update
            updateSpanText("current-balance", depoAmount)
            document.getElementById("depo-amount").value = ""
        })



        let withdrawBtn = document.getElementById("withdraw-button")
        withdrawBtn.addEventListener("click", function (event) {
            /* const withdrawNumber = getInputNumber("withdraw-amount")
            console.log(withdrawNumber) */

            const withdrawNumber = getInputNumber("withdrawAmount")
            updateSpanText("current-withdraw", withdrawNumber)
            updateSpanText("current-balance", -1 * withdrawNumber)
            document.getElementById("withdrawAmount").value = ""

        })

        function getInputNumber(id) {
            const withdrawAmt = parseFloat(document.getElementById(id).value)
            // const withdrawNumber = parseFloat(withdrawAmt)
            return withdrawAmt
        }

        function updateSpanText(id, depoAmount) {
            const currBalance = parseFloat(document.getElementById(id).innerText)
            const totalBalace = depoAmount + currBalance
            document.getElementById(id).innerText = totalBalace
        }