function caesarCipher (msg, shift = -3) {
	var msg_array = []
	var msg_cipher = ""

	for (var i = 0; i < msg.length; i++) {
	msg[i]>="A" && msg[i]<="Z" || msg[i]>="a" && msg[i]<="z" ? msg_array.push(msg.charCodeAt(i) + shift) : msg_array.push(msg.charCodeAt(i))
	}

	msg_array.forEach (function(c) { msg_cipher += String.fromCharCode(c) });
	return(msg_cipher);
}


var encrypted = caesarCipher("Et tu, brute?", 6);

console.log(encrypted);
//=> "_orqrp"

//WRAPPING FEHLT