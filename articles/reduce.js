function (keys, values, rereduce) {
  
  var x = {
  	tfs:[],
  	df:0
  }
  
  if (rereduce) {

    /*
    x.word += "[ ";
    for( var i = 0; i < values.length; ++i ){
    	x.word += "<" + values[i].word + ">";
    	x.tfs.concat(values[i].tfs);
    	x.df += values[i].df;
    }
    x.word += " ]"
    
    return x;
    */
    
    /*
    str = ""
    
    for( var i = 0; i < values.length; ++i ){
    	str += values[i];
    	str += "\n";
    }
    
    return str;
    */
    
    for(var i = 0; i< values.length; ++i){
    	x.tfs = x.tfs.concat(values[i].tfs);
    	x.df += values[i].df;
    }
    
    return x;
    
  } else 	{
  
  	/*
  	var str = "[ ";
  	for( var i = 0; i < keys.length; ++i ){
  		str += ( "< key: " + keys[i] + "; value: " + values[i] + " >" );
  	}
  	str += " ]\n";
  	return str;
  	*/
  	
  	/*
  	for(var i = 0; i < keys.length; ++i){
  		x.word = keys[i];
  		x.tfs = [values[i]]
  		x.df = 1
  		return x;
  	}
  	*/
  	
    
    for(var i = 0; i < values.length; ++i){
    	x.tfs.push(values[i]);
    }
    x.df = values.length;
    
    return x;
    //x.tfs = values;
    //x.df = 12;
    //return x;
  }
}
