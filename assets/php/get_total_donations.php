<?php
// Google Sheets API configuration
$spreadsheetId = '1kHNyoJB1lns9WUxXJqge0JzSbbvkZ_FnMMTzZ';
$range = 'Sheet1!A1:A8'; // Adjust the range according to your Google Sheet

$client = new Google_Client();
$client->setApplication
