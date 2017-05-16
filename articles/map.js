function (doc) {
  if( doc.docName && doc.text ){
    
		
		const words = doc.text.split(/[\W_]+/)

		var dict = {}
		var total = 0
		for( i in words){
			token = words[i]
			if( token && (token.length > 2) && /^[a-zA-Z]+$/.test(token)){
				token = token.toLowerCase();
				if( token in dict ){
				  dict[token] = dict[token] + 1
				}else{
				  dict[token] = 1
				}
				total += 1
			}
		}		

	
	for (var word in dict){
		emit(word, { docName:doc.docName, tf:dict[word]/total })
	} 
	
	/*
	dict.forEach(  )

	for( i in dict )

	(word, (doc.Docname, dict[word]))

		       emit(doc.words[i], doc.docName);
  */
  }
}
