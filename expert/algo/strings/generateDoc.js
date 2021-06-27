function generateDocument(chars, doc) {
  const docHash = {}
	const charHash = {}
	
	for (let letter of doc) {
		docHash[letter] ? docHash[letter]++ : docHash[letter] = 1
	}
	
  for (let letter of chars) {
		charHash[letter] ? charHash[letter]++ : charHash[letter] = 1
	}
	
	for (let letter in docHash) {
		if (docHash[letter] > charHash[letter]) {
			return false;
		}
		if (!charHash[letter]) return false;
	}
		
	return true;
}

