document.getElementById("new").innerHTML="1.1.0 正式版";
x=document.getElementById("update");
  var up=x.innerHTML;
  if(up<1.1){
  document.getElementById("cut").innerHTML="<i style="display:block;
	background:#f00;
	border-radius:50%;
	width:5px;
	height: 5px;
	top:45%;
	right:0px;
	position:absolute;"></i>有新更新可用<p>更新内容:<h1>1.新增置顶功能</h1><h1>2.新增MathJax功能</h1><h1>3.新增Dashboard</h1>我们建议您根据需要，更新或是保留原有版本";
  }
  else{
  document.getElementById("cut").innerHTML="已经是最新版本";
  }
