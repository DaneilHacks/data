<!DOCTYPE html>
<html>
<head>
    <title>Database Table Data</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a href="http://localhost/public/index.html" style="color: grey;">Back Home</a>
    <form method="post" action="detail_basic.php">
        <input type="hidden" name="formName" value="hazPost"> <!-- Hidden field to specify the form name -->
        <label for="row_count">Number of Rows:</label>
        <input type="number" name="row_count" id="row_count" min="1">
        <input type="submit" value="Submit">
    </form>
    <table>
        <?php
        include 'detail_basic.php'; // Include the PHP file that fetches and displays data
        ?>
    </table>
</body>
</html>
