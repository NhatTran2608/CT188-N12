function addCart(code)
{
	
	var number=parseInt(document.getElementById(code).value);
	if (number === 0){ alert("Hãy chọn số lượng bạn muốn thêm vào giỏ hàng!!!"); return false;}
	if(typeof localStorage[code]==="undefined"){
		window.localStorage.setItem(code,number)
	}
	else{
		var current=parseInt(window.localStorage.getItem(code));
		if(number+current > 100)
			{
				window.localStorage.setItem(code,100);
			}
			else {
				window.localStorage.setItem(code,number+current);
			}
	}
}
function showCart()
{
	var itemList={
	"sp001":{	"name":"Iphone 14 Promax", 
				"price":28499000,
				"photo":"./img/iphone13 pro max.webp"},
	
	// "sp002":{	"name":"MacBook Pro M1 2020", 
	// 			"price":39990000,
	// 			"photo":"images/sanpham/macbook-pro-m1-2020-gray-600x600.jpg"},
	
	// "sp003":{	"name":"MacBook Pro 16 M1 Pro 2021/16 core-GPU", 
	// 			"price":46490000,
	// 			"photo":"images/sanpham/apple-macbook-pro-16-m1-pro-2021-10-core-cpu-600x600.jpg"},
	
	// "sp004":{	"name":"HP Gaming VICTUS 16 e0170AX R7 5800H (4R0U7PA)", 
	// 			"price":18990000,
	// 			"photo":"images/sanpham/hp-gaming-victus-16-e0170ax-r7-4r0u7pa-600x600.jpg"},
				
	// "sp005":{	"name":"HP 245 G8 R3 5300U (63T27PA)", 
	// 			"price":18790000,
	// 			"photo":"images/sanpham/hp-245-r3-5300u-4gb-256gb-win11-63t27pa-600x600.jpg"},
				
	// "sp006":{	"name":"HP ZBook Firefly 14 G8 i5 1135G7 (275V5AV)", 
	// 			"price":31990000,
	// 			"photo":"images/sanpham/hp-zbook-firefly-14-g8-i5-275v5av-141221-042207-600x600.jpg"},
				
	// "sp007":{	"name":"MacBook Air M1 2020 7-core GPU", 
	// 			"price":24990000,
	// 			"photo":"images/sanpham/asus-tuf-gaming-fx506lh-i5-hn188w-120122-121947-600x600.jpg"},
				
	// "sp008":{	"name":"Asus ROG Strix Gaming G513IH R7 4800H (HN015W)", 
	// 			"price":26099000,
	// 			"photo":"images/sanpham/asus-rog-strix-gaming-g513ih-r7-4800h-8gb-512gb-4gb-600x600.jpg"},
				
	// "sp009":{	"name":"Asus ZenBook UX425EA i5 1135G7 (KI839W)", 
	// 			"price":20199000,
	// 			"photo":"images/sanpham/asus-zenbook-ux425ea-i5-1135g7-8gb-512gb-600x600.jpg"},
};
	
	var demo = document.getElementById("tbody-table");
	var bang = document.createElement("tr");
	bang.style="text-align:center;font-weight: bold;";
	bang.innerHTML="<td>Hình SP</td><td>Tên SP</td><td>Số lượng</td><td>Đơn giá</td><td>Thành tiền</td><td></td>"
	demo.appendChild(bang);
	
	totalPreTax = 0;
	for(var i=0; i < localStorage.length; i++){
	key = localStorage.key(i);
	item = itemList[key];
	name = item.name;
	photo = item.photo;	
	price = item.price;
	orderNumber = localStorage.getItem(key);
	thanhtien = price*orderNumber;
	
	var tr = document.createElement("tr");
	
	var picture = document.createElement("td");
	picture.style="text-align:center";
	var imgs = document.createElement("img");
	picture.appendChild(imgs);
	imgs.src = photo;
	imgs.style.width ='150px';
	var product = document.createElement("td");
	product.style="text-align:center";
	product.innerHTML = name;
	var num = document.createElement("td");
	num.style="text-align:center";
	num.innerHTML = orderNumber;
	var money = document.createElement("td");
	money.style="text-align:center";
	money.innerHTML = numberFormat.format(price);
	var sum = document.createElement("td");
	sum.style="text-align:center";
	sum.innerHTML = numberFormat.format(thanhtien);
	
	var del = document.createElement("td");
	del.style="text-align:center";
	var icon = document.createElement("a");
	icon.href='#';
	icon.id=key;
	del.appendChild(icon);
	icon.innerHTML="<i onclick=removeCart(\'"+key+"\') id='del' style='color:red;' class='fa fa-trash icon-pink'></i>"
	
	
	tr.appendChild(picture);
	tr.appendChild(product);
	tr.appendChild(num);
	tr.appendChild(money);
	tr.appendChild(sum);
	tr.appendChild(del);
	
	var addElement = document.getElementById("tbody-table");
	addElement.appendChild(tr);
	
	totalPreTax = totalPreTax + (price * orderNumber);
	}
	
	var row1 = document.createElement("tr");
	row1.style="text-align:right";
	row1.innerHTML="<td colspan=6><div>Tổng thành tiền (A) = "+ numberFormat.format(totalPreTax)+" </div></td>";
	
	var ckhau=(totalPreTax*getDiscountRate());
	var row2 = document.createElement("tr");
	row2.style="text-align:right"
	row2.innerHTML="<td colspan=6><div>Chiết khấu (B) = "+getDiscountRate()+" * A = "+numberFormat.format(ckhau)+" </div></td>";
	
		
	var tax=0.1*(totalPreTax-getDiscountRate());
	var row3 = document.createElement("tr");
	row3.style="text-align:right"
	row3.innerHTML="<td colspan=6><div>Giảm giá (C) = 10% x (A-B) = "+numberFormat.format(tax)+" </div></td>";
	
	
	var row4 = document.createElement("tr");
	row4.style="text-align:right"
	row4.innerHTML="<td colspan=6><div>Tổng đơn hàng = A - B - C = "+numberFormat.format(totalPreTax-ckhau-tax)+" </div></td>";
	
	var row5 = document.createElement("tr");
	row5.style="text-align:center"
	row5.innerHTML="<td colspan=6><button type='submit' id='Reset' onclick='submitHH()'>Xác nhận đơn hàng</button></td>";
	
	var tfoot = document.getElementById("tfoot-table");
	tfoot.appendChild(row1);
	tfoot.appendChild(row2);
	tfoot.appendChild(row3);
	tfoot.appendChild(row4);
	tfoot.appendChild(row5);
	
}

const numberFormat = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

function removeCart(code)
{
	alert("Bạn có chắc muốn xóa sản phẩm này!!!");
	if(typeof window.localStorage[code] !== "underfined")
	{
		window.localStorage.removeItem(code);
		document.getElementsByTagName('tbody')[0].innerHTML="";
		document.getElementsByTagName('tfoot')[0].innerHTML="";
		showCart();
	}
}

function getDiscountRate(){
	var d=new Date();
	var weekday=d.getDay();
	var totalMins=d.getHours()*60+d.getMinutes();
	if(weekday>=1 && weekday<3 && 
	((totalMins>=420 && totalMins<=660)||(totalMins>=780&& totalMins<=1020)))
	return 0.1;
	return 0;
}

function submitHH(){
	if(localStorage.length === 0)
	{
		alert("Giỏ hàng của bạn chưa có sản phẩm nào!!!");
		return false;
	}
	else{
		alert("Đơn hàng đã được xác nhận!!!");
		return true;  
	} 
}

function check()
{
	var emailReg= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
	if(emailReg.test(document.myform.e.value)==false)
	{
		alert("Định dạng Email không hợp lệ!!!");
		return false;
	}
	
	
	var pass1=document.myform.psw1.value;
	if(pass1.length<8){
		alert("Hãy nhập mật khẩu mạnh hơn!!!(trên 8 kí tự)");
		return false;
	}
	var pass2=document.myform.psw2.value;
	if(pass1 != pass2 )
	{
		alert("Mật khẩu nhập lại không khớp!!!");
		return false;
	}
	
	alert("Chúc mừng!!! Đăng ký thành công!!!");
	return true;
}
function checkLogin()
{
	var emailReg= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
	if(emailReg.test(document.myform.e.value)==false)
	{
		alert("Địa chỉ Email không hợp lệ!!!");
		return false;
	}
	
	var pass1=document.myform.psw1.value;
	if(pass1.length<8){
		alert("Sai mật khẩu !!!");
		return false;
	}
}

window.onstorage = () =>{showCart();

};