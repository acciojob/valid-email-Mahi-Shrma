function validEmail(email) {
	
  //your JS code here.
	// if (email === "") {
 //    return false;
 //  }
 //  // split the email by the @ symbol
 //  const parts = email.split("@");
 //  // check if there are exactly two parts
 //  if (parts.length !== 2) {
 //    return false;
 //  }
 //  // check if the local part and the domain part are not empty
 //  const local = parts[0];
 //  const domain = parts[1];
 //  if (local === "" || domain === "") {
 //    return false;
 //  }
 //  // check if the local part contains only alphanumeric characters and some special characters
 //  // source: [What characters are allowed in an email address?]
 //  const localRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
 //  if (!localRegex.test(local)) {
 //    return false;
 //  }
 //  // check if the domain part contains only alphanumeric characters and dots
 //  const domainRegex = /^[a-zA-Z0-9.-]+$/;
 //  if (!domainRegex.test(domain)) {
 //    return false;
 //  }
 //  // check if the domain part has at least one dot and a valid extension
 //  // source: [List of Internet top-level domains]
 //  const extensions = [".com", ".co.in", ".edu", ".net", ".org", ".gov", ".mil", ".biz", ".info", ".name", ".mobi", ".io", ".ai", ".xyz", ".me", ".tv", ".us", ".uk", ".ca", ".au", ".cn", ".jp", ".ru", ".de", ".fr", ".es", ".it", ".br", ".in", ".mx", ".kr", ".za", ".ng", ".eg", ".pk", ".bd", ".tr", ".ir", ".sa", ".vn", ".id", ".th", ".ph", ".my", ".sg", ".lk", ".np", ".ae", ".il", ".qa", ".kw", ".om", ".bh", ".jo", ".iq", ".sy", ".lb", ".ye", ".af", ".dz", ".ma", ".tn", ".ly", ".sd", ".et", ".ke", ".tz", ".ug", ".gh", ".cm", ".ci", ".sn", ".ml", ".bf", ".ne", ".td", ".so", ".dj", ".er", ".ss", ".rw", ".bi", ".mw", ".zm", ".zw", ".na", ".bw", ".ls", ".sz", ".gm", ".lr", ".sl", ".gw", ".mr", ".bj", ".tg", ".cf", ".cg", ".cd", ".ao", ".ga", ".gq", ".st", ".sc", ".mu", ".mg", ".km", ".yt", ".re", ".mz", ".cv", ".pl", ".ro", ".cz", ".hu", ".sk", ".bg", ".hr", ".rs", ".ba", ".mk", ".al", ".gr", ".cy", ".mt", ".ee", ".lv", ".lt", ".fi", ".se", ".no", ".dk", ".is", ".ie", ".nl", ".be", ".lu", ".ch", ".li", ".at", ".pt", ".si", ".ua", ".by", ".md", ".ge", ".am", ".az", ".kz", ".uz", ".tm", ".tj", ".kg", ".mn", ".np", ".bt", ".hk", ".mo", ".tw", ".kh", ".la", ".mm", ".bn", ".pg", ".fj", ".sb", ".vu", ".ws", ".to", ".ck", ".pf", ".nc", ".nz", ".ar", ".cl", ".co", ".ve", ".ec", ".pe", ".bo", ".py", ".uy", ".sr", ".gy", ".gf", ".ag", ".bs", ".bb", ".cu", ".dm", ".do", ".gd", ".ht", ".jm", ".kn", ".lc", ".vc", ".tt", ".an", ".aw", ".bq", ".cw", ".sx", ".gl", ".pm", ".gs", ".sh", ".pn", ".fk", ".tf", ".aq", ".bv", ".hm", ".ki", ".nr", ".nu", ".nf", ".tv", ".tk", ".as", ".gu", ".mp", ".pr", ".vi", ".um", ".mh", ".pw", ".fm", ".io", ".ps", ".ax", ".im", ".je", ".gg", ".eu", ".cat", ".pro", ".tel", ".xxx", ".coop", ".museum", ".aero", ".arpa", ".int", ".nato", ".test", ".example", ".invalid", ".localhost"];
 //  const dotIndex = domain.lastIndexOf(".");
 //  if (dotIndex === -1 || dotIndex === domain.length - 1) {
 //    return false;
 //  }
 //  const extension = domain.substring(dotIndex);
 //  if (!extensions.includes(extension)) {
 //    return false;
 //  }
 //  // if all the checks pass, return true
 //  return true;
	var pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return pattern.test(email);
	console.log(validEmail('abc@example.com'));
	console.log(validEmail('xyz@abc.com.in'));
	console.log(validEmail('john.doe@com.'));
	console.log(validEmail('@example.com'));
	console.log(validEmail('') );
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
