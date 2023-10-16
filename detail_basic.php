<link rel="stylesheet" href="style.css">
<?php
    // Connect to the database (replace with your actual database connection code)
    $username = "root";          // Your MySQL username
    $password = "";              // Your MySQL password (leave it empty if you didn't set a password in XAMPP)
    $host = 'localhost';
    $port = 3306;
    $username = 'your_username';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $formName = $_POST["formName"];
        if ($formName === "hazPost"){
            $database = "hazak";
            $conn = new mysqli($host, $username, $password, $database, $port);
            if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            }// Get the user's input for the number of rows
            $maxRows = isset($_POST["row_count"]) ? intval($_POST["row_count"]) : 10; // Default to 10 if not specified    
            // Execute the SQL query
            $sql = "SELECT * FROM haz LIMIT $maxRows";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                echo '<header id="header">';
                echo "<nav>";
                echo '<a href="register.html">Register</a>';
                echo '<a href="basic.php">Basic</a>';
                echo "</nav>";
                echo "</header>";
                echo "<table>";
                echo "<tr>";
                echo "<th>Végrehajtási Szám</th>";
                echo "<th>Kikiáltási Ár</th>";
                echo "<th>Licit Lépcső</th>";
                echo "<th>Minimal Ár</th>";
                echo "<th>Előleg</th>";
                echo "<th>Kezdet</th>";
                echo "<th>Vége</th>";
                echo "<th>Irányitó Szám</th>";
                echo "<th>Település</th>";
                echo "<th>Helyrajzi Szám</th>";
                echo "<th>Besorolás</th>";
                echo "<th>Fekvés</th>";
                echo "<th>Művelésiág</th>";
                echo "<th>Bejegyzett Föld Használat</th>";
                echo "<th>Épület Típus</th>";
                echo "<th>Jogi Jelleg</th>";
                echo "<th>Tulajdoni Jog</th>";
                echo "<th>Sikeres Árverés Jog</th>";
                echo "<th>Beköltözhető</th>";
                echo "<th>Sikeres Árverés Esetén</th>";
                echo "<th>Leirás</th>";
                echo "<th>Megtekinthető</th>";
                echo "<th>Elérhetőség</th>";
                echo "<th>Cím</th>";
                echo "</tr>";
                
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row["vegrehajtasiSzam"] . "</td>";
                    echo "<td>" . $row["kikialatsiAr"] . "</td>";
                    echo "<td>" . $row["licitLepcso"] . "</td>";
                    echo "<td>" . $row["minAr"] . "</td>";
                    echo "<td>" . $row["eloleg"] . "</td>";
                    echo "<td>" . $row["kezdet"] . "</td>";
                    echo "<td>" . $row["vege"] . "</td>";
                    echo "<td>" . $row["iranyitoSzam"] . "</td>";
                    echo "<td>" . $row["telepules"] . "</td>";
                    echo "<td>" . $row["helyrajziSzam"] . "</td>";
                    echo "<td>" . $row["besorolas"] . "</td>";
                    echo "<td>" . $row["fekves"] . "</td>";
                    echo "<td>" . $row["muvelesiAg"] . "</td>";
                    echo "<td>" . $row["bejegyzettFoldHasznalat"] . "</td>";
                    echo "<td>" . $row["epuletTipus"] . "</td>";
                    echo "<td>" . $row["jogiJelleg"] . "</td>";
                    echo "<td>" . $row["tulajdoniJog"] . "</td>";
                    echo "<td>" . $row["sikeresArveresJog"] . "</td>";
                    echo "<td>" . $row["bekoltozheto"] . "</td>";
                    echo "<td>" . $row["sikeresArveresEseten"] . "</td>";
                    echo "<td>" . $row["leiras"] . "</td>";
                    echo "<td>" . $row["megtekintheto"] . "</td>";
                    echo "<td>" . $row["elerhetoseg"] . "</td>";
                    echo "<td>" . $row["cim"] . "</td>";
                    echo "</tr>";
                }
    
                echo "</table>";
            } else {
                echo "No results found";
            }
        } elseif ($formName === "userData") {
            $database = "users";
            $conn = new mysqli($host, $username, $password, $database, $port);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            function generateUserID() {
                $timestamp = time();
                $randomNum = mt_rand(100, 999);
                return "user_" . $timestamp . "_" . $randomNum;
              }
            // Get form data
            $email = $_POST["email"];
            $password = $_POST["password"];
            $username =  $_POST["username"];
            $userId = generateUserID();
    
            // Insert data into the database
            $sql = "INSERT INTO users VALUES ('$email', '$password','$username','$userId')";
            
            if ($conn->query($sql) === TRUE) {
                echo "Registration successful!";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        header("Location: index.php");
            exit;
        } else {
            // Handle case when the form was not submitted
            echo "Form not submitted.";
        }
        elseif ($formName === "autoPost"){
            $conn = new mysqli($host, $username, $password, $database, $port);
            if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            }// Get the user's input for the number of rows
            $maxRows = isset($_POST["row_count"]) ? intval($_POST["row_count"]) : 10; // Default to 10 if not specified    
            // Execute the SQL query
            $sql = "SELECT * FROM haz LIMIT $maxRows";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                echo '<header id="header">';
            echo "<nav>";
            echo '<a href="register.html">Register</a>';
            echo '<a href="basic.php">Basic</a>';
            echo "</nav>";
            echo "</header>";
            echo "<table>";
            echo "<tr>";
            echo "<th>Név</th>";
            echo "<th>Auto Ár</th>";
            echo "<th>link</th>";
            echo "<th>Üzemanyag</th>";
            echo "<th>Mikori </th>";
            echo "<th>köbcenti</th>";
            echo "<th>Kw</th>";
            echo "<th>ló erő</th>";
            echo "<th>km</th>";
            echo "<th>cimkek</th>";
            echo "</tr>";

            while($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["name"] . "</td>";
                echo "<td>" . $row["autoAr"] . "</td>";
                echo "<td>" . $row["link"] . "</td>";
                echo "<td>" . $row["uzemanyag"] . "</td>";
                echo "<td>" . $row["mikori"] . "</td>";
                echo "<td>" . $row["kobcenti"] . "</td>";
                echo "<td>" . $row["kw"] . "</td>";
                echo "<td>" . $row["loEro"] . "</td>";
                echo "<td>" . $row["km"] . "</td>";
                echo "<td>" . $row["cimkek"] . "</td>";
                echo "</tr>";
            }
                echo "</table>";
            } else {
                echo "No results found";
            }
        }
    $conn->close();
}
?>