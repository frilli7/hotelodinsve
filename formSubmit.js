
function formSubmit() {
	var dateFra = $("#date1").val();
	var dateTil = $("#date2").val();
	var rooms = $("#selectRooms").val();
	var adults = $("#selectAdults").val();
	var children = $("#selectChildren").val();
	
	// removes all '-'
	dateFra = dateFra.replace(/-/g, "");
	dateTil = dateTil.replace(/-/g, "");
	
	var location = "";
	location += "http://online.techotel.dk/domino.aspx?";
	location += "lang=en&prodid=&hotelid=47041&";
	location += "p_arr="+dateFra+"_0000&";
	location += "p_dep="+dateTil+"_0000&";
	location += "p_numofrooms="+rooms+"&";
	location += "p_pax="+adults+"_"+children+"_0";
	
	//alert("location: "+location);
	
	// redirect to this location
	//window.location = location;
	window.open(location, "_blank");//This open a new window/tab
	
	return false;
}