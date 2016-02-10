

<?php
//сединение
	$link = mysql_connect("localhost","root","")
		or die("ошибка" .mysql_error());
//выбор БД 
	mysql_select_db("people", $link)or die(mysql_error());
//ввод данных в БД 
	mysql_query("
		INSERT INTO obrabzgl001(email)
		VALUES(
			'".$_POST["email"]."'
			)
		")
		or die(mysql_error());
//подтверждение
	echo "Спасибо - как только страниц будет готова мы уведомим Вас";
	mysql_close($link);
?>