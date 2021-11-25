//------------------------ POST ------------------------
let data = {
    registration_id : registration_id,
    email : email,
};
	
let options = {
          method: "POST",
          headers: {
            'Accept': 'application/json',
                'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
};
		
const url = URLConstant.API.OTP_SEND_V3;
		
var response, result;
		
response = await fetch(url, options);
		
if(response.ok){
    result = await response.json();
}else{
    response = await fetch(url, options);
    result = await response.json();
}

//-----------------------------------------------------------------