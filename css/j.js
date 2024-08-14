window.addEventListener('load', function() {
    // Function to format number with commas
    function formatNumberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Function to update the heading and input-output based on input value
    function updateHeading() {
        const inputNum = parseFloat(document.getElementById('mf-input-mobile-decbfdf').value);
        const headingElement = document.querySelector('#tier h2');
        const inputOutput = document.querySelector('#input-output h3');
        const commissionPlan = document.querySelector('#commission-plan h3');
        const totalProfit = document.querySelector('#total-profit h3');

        // Check if headingElement, inputOutput, commissionPlan, and totalProfit exist
        if (headingElement && inputOutput && commissionPlan && totalProfit) {
            // Update the inputOutput element with formatted value or default
            if (!isNaN(inputNum) && document.getElementById('mf-input-mobile-decbfdf').value.trim() !== "") {
                inputOutput.textContent = (inputNum > 999 ? formatNumberWithCommas(inputNum) : inputNum);
            } else {
                inputOutput.textContent = '1,000'; // Default output
            }

            // Update the heading element and commission plan based on input value
            let commissionValue = 5; // Default commission plan
            if (!isNaN(inputNum)) {
                if (inputNum >= 1 && inputNum <= 5000) {
                    headingElement.textContent = 'Tier 1, 20%';
                    commissionValue = 5;
                } else if (inputNum >= 5001 && inputNum <= 15000) {
                    headingElement.textContent = 'Tier 2, 25%';
                    commissionValue = 4;
                } else if (inputNum > 15000) {
                    headingElement.textContent = 'Tier 3, 27%';
                    commissionValue = 3.7;
                } else {
                    headingElement.textContent = 'Invalid input';
                    commissionValue = 'N/A';
                }
                commissionPlan.textContent = commissionValue;
            } else {
                headingElement.textContent = 'Tier 1, 20%'; // Default text
                commissionPlan.textContent = '5'; // Default commission plan
            }

            // Calculate and update total profit
            if (!isNaN(inputNum) && commissionValue !== 'N/A') {
                const totalProfitValue = (inputNum * commissionValue ).toFixed(2);
                totalProfit.textContent = formatNumberWithCommas(totalProfitValue);
            } else {
                totalProfit.textContent = '0.00'; // Default total profit
            }
        } else {
            console.error('Heading element, input output element, commission plan element, or total profit element not found.');
        }
    }

    // Event listener for input change
    document.getElementById('mf-input-mobile-decbfdf').addEventListener('input', function() {
        updateHeading();
    });

    // Initialize the heading and input-output on page load
    updateHeading();
});
