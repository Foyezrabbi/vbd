
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $donation = $_POST['donation'];

    // Google Sheets API configuration
    $spreadsheetId = '1kHNyoJB1lns9WUxXJqge0JzSbbvkZ_FnMMTzZ';
    $range = 'Sheet1!A:A'; // Adjust the range according to your Google Sheet
    $values = [[$donation]];
    $body = new Google_Service_Sheets_ValueRange(['values' => $values]);

    $params = ['valueInputOption' => 'RAW'];

    $client = new Google_Client();
    $client->setApplicationName('Google Sheets API PHP');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS);
    $client->setAuthConfig('credentials.json'); // Your credentials file
    $service = new Google_Service_Sheets($client);

    $result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);

    echo json_encode(['status' => 'success']);
}
?>


