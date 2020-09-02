<?php
header('Content-Type: application/json');

$host = "localhost";
$dbname = "phpdasar";
$dsn = "mysql:host=$host;dbname=$dbname";
$username = 'root';
$passwd = 'namaku123';
$options = [
    PDO::ATTR_PERSISTENT => true,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
];

try {
    $dbh = new PDO($dsn, $username, $passwd, $options);
} catch (PDOException $exception) {
    die($exception->getMessage());
}

$stmt = $dbh->query("SELECT * FROM mahasiswa");
try {
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_THROW_ON_ERROR);
} catch (JsonException $exception) {
    die($exception->getMessage());
}
