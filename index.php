<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="css.css"/>  
    <script src="main.js"></script>
    <title>Тестовое задание</title>
</head>
<body>
	<div id='content'>
		<div id='content_menu'><b>Тестовое задание</b><form class="content_menu_button"><input type="button" value="Решение" onclick="addInfo()"></form></div>
			<div id='content_info_first'>
				Создать файл "data.txt" с содержимым:<hr>
				# brand :: name :: price :: qnt<br>
				Apple :: iPhone 6S 64Gb :: 40000 :: 1<br>
				Apple :: iPhone 6S 324Gb :: 35000 :: 3<br>
				Apple :: iPhone SE 16Gb :: 30000 :: 6<br>
				Samsung :: Galaxy S7 32Gb :: 35000 :: 3<br>
				Samsung :: Galaxy S6 Edge 32Gb :: 30000 :: 2<br>
				Samsung :: Galaxy A9 Pro SM-A910F/DS :: 35000 :: 1<br>
				Samsung :: Galaxy J7 SM-J710F :: 16000 :: 4<br>
				HTC :: One A9 :: 19000 :: 6<br>
				HTC :: One M9 :: 30000 :: 2<br>
				HTC :: One E9 Plus :: 20000 :: 4<br>
				LG :: G4 H818 :: 20000 :: 2<br>
				LG :: G4s H736 :: 12000 :: 8<br>
				LG :: G5 SE H845 :: 38000 :: 2<br>
				LG :: Nexus 5X H791 16Gb :: 15000 :: 1<hr>

				На php получить данные из файла (кроме первой строки) и сохранить в массив.<br>
				Получить массив данных ajax запросом.<br>
				На основе данных с помощью javascript построить таблицу. Колонки таблицы: "производитель", "название", "цена" и "количество".<br>
				Последней строкой таблицы должна идти строка "Итого", в ней отображать сумму по колонкам "цена" и "количество".<br>
				При клике на название колонки таблица должна сортироваться по этой колонке (без учета регистра символов).<br>
				При клике на строку с товаром он удаляется из таблицы, "Итого" пересчитывается.<br>
				При наведении на строку рядом с курсором появляется всплывающая подсказка с отображением данных товара.<br>
				Оформить на свое усмотрение.<br>
			</div>
	</div>
</body>