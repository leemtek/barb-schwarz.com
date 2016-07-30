(function() {
    angular.module("barbschwarz")
        .factory("factorySendEmail", [function() {
            var $facSendEmail = [];

            $facSendEmail.contactDetails = {
                "name": null,
                "email": null,
                "message": null
            }; // contactDetails

            $facSendEmail.fnSendSuccessDOM = function() {
                // update submit button to indicate success
                $('#submit').text('Email Sent');
                $('#submit').removeClass('btn-info').addClass('btn-success');
                $("#submit").prop('disabled', true);
            }; // fnSendSuccessDOM

            $facSendEmail.fnSendErrorDOM = function() {
                // update submit button to indicate an error
                $('#submit').text('Error Sending');
                $('#submit').removeClass('btn-info').addClass('btn-danger');
            }; // fnSendErrorDOM()

            return $facSendEmail;
        }]) // factory("facSendEmail")
    ; // angular.module("barbschwarz")
})(); // function()
