---
title: "Import 2GB CSV Dataset into MySQL Database"
slug: "import-csv-into-mysql"
date: "2016-01-05"
---

Sometimes you have to deal with large data sets—large enough that Microsoft Excel will be unable to open it. Microsoft Excel has a tendency of truncating data once it reaches a million records. In order to manipulate the data, I imported the CSV file into a MySQL/MariaDB database table so I can run SQL queries to pull the data that I need. The challenge comes with importing the 2GB CSV data because the web based MySQL client phpMyAdmin or even desktop MySQL clients will not be able to do the import without crashing.

What I did was upload the CSV file to the web server and used MySQL's LOAD DATA command to do the import. The CSV file was 2GB with 9.2 million records and upon importing it, it took up 1.4GB of space on the database server.

```
LOAD DATA LOCAL INFILE '/home/user/dataset.csv' INTO TABLE \`tablename\` FIELDS TERMINATED BY ',' (col1, col2, col3, col4, col5);
```

Simply replace the CSV file path, table name and column IDs.

If you need to remove all of the duplicate entries, here is the SQL query to do so:

```
DELETE FROM tablename 
WHERE id IN (SELECT \* 
FROM (SELECT id FROM tablename 
    GROUP BY col1, col2, col3 HAVING (COUNT(\*) > 1)
    ) AS A
);
```

Simply replace the table name and column IDs.

And, if you need to do a bulk find and replace, here is the SQL query:

```
UPDATE us\_emails SET col1 = REPLACE(col1,'find\_this','replace\_with\_this');
```

Lastly, if you need to export the MySQL database tables as CSV files, you can do so in phpMyAdmin but for really large files it may time out. In this case, you would need to use SSH and use the following command:

```
mysql -u root -ppassword database\_name -e "SELECT \* INTO OUTFILE '/full\_server\_path/filename.csv'  FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\\"'  LINES TERMINATED BY '\\r\\n' FROM table\_name;"
```

Simply replace the root username, password, database name, output file full path and file name, and table name.