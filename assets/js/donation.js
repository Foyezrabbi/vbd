$(document).ready(function() {
    var totalAmount = 0;

    function updateTotalAmount() {
        $.ajax({
            url: './assets/php/get_total_donations.php',
            type: 'GET',
            success: function(response) {
                totalAmount = response.total || 0;
                $('#total-amount').text('৳' + totalAmount);
            },
            error: function() {
                console.log('Error fetching total donations');
            }
        });
    }

    $('.donation-button').click(function() {
        var amount = $(this).data('amount') || parseInt($('#custom-amount').val());
        if (amount && amount > 0) {
            totalAmount += amount;
            $('#total-amount').text('৳' + totalAmount);
            logDonation(amount);
        } else {
            alert("Please enter a valid donation amount.");
        }
    });

    $('.payment-button').click(function() {
        var method = $(this).data('method');
        var message = '';

        if (method === 'bkash') {
            message = 'Send money to +8801600000000 via bKash';
        } else if (method === 'nagad') {
            message = 'Send money to +8801600000000 via Nagad';
        } else if (method === 'card') {
            message = 'Proceed to Card Payment';
        } else if (method === 'paypal') {
            message = 'Proceed to PayPal Payment';
        }

        alert(message);
    });

    function logDonation(amount) {
        $.ajax({
            url: './assets/php/donation.php',
            type: 'POST',
            data: { donation: amount },
            success: function(response) {
                console.log('Donation logged successfully');
                updateTotalAmount();
            },
            error: function() {
                console.log('Error logging donation');
            }
        });
    }

    updateTotalAmount();

    $('#qrcode').qrcode({
        text: "https://docs.google.com/spreadsheets/d/1kHNyoJB1lns9WUxXJqge0JzSbbvkZ_FnMMTzZ",
        width: 128,
        height: 128,
        colorDark: "#388e3c",
        colorLight: "#ffffff"
    });
});