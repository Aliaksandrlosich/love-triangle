/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var gg=0;
  var k=0;
  var z=0;
  for(var i=0 ; i<preferences.length ; i++)
  {
  	 k=preferences[i];
  	 preferences[i]=0;
  	 z=preferences[k-1];
  	if((i+1)===preferences[z-1])
  		{
  		 gg++;
  		
  		 
  			
  		}
  }
  return gg;
};
