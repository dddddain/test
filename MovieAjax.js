<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
		<script>
 var url="http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=70ad1adb0229942e5d4ff3b12db9237e&targetDt=20190501" 
		
		 $(function() {
		 		$.ajax({
					type:'GET',
					url: url,
					dataType:'json',
					success: jsonParser
		 		});
		 		
		 		function jsonParser(data) {
		 			var type= data.boxOfficeResult.dailyBoxOfficeList;
		 			$.each(type, function(idx,item) {
		 				document.write("<h2>" + item.rank + " : " + item.movieNm + "</h2><br>");
		 			});
		 		}
	 
		 });
		 </script>
<title> MovieAjax.html </title>
</head>
<body>
<div id="movie-box">
	
</div>
</body>
</html>