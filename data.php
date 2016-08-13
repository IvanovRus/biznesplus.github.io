<?php
//if($_GET){
	$data = file("data.txt");
		if ($data) 
			{
				$data_array=array();
				$data_count=count($data);
				for($i = 1; $i < $data_count; $i++){
					$data_array_row= explode("::", $data[$i]);
					$data_array_info=array(
						'producer'=>$data_array_row[0],
						'name'=>$data_array_row[1],
						'price'=>$data_array_row[2],
						'count'=>$data_array_row[3],
					);
					$data_array[]=$data_array_info;
				}
				echo(json_encode($data_array));	
			}
		else echo "Ошибка при открытии файла";
//}
?>