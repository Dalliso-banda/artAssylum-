console.table('music js file connected')





const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
 const options = 
 { 	
 method: 'GET', 
 	headers: { 		'x-rapidapi-key': 'ffdae30d6fmsh3c11ef2498aea35p1120bdjsn1c8ef85a3a48', 		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com' 	}
 	
 	 }; 
 	 async function fetchDezerData(){
 	 try { 
 	 	const response = await fetch(url, options); 
 	 		const result = await response.text(); 	
 	 		console.log(result); 
 	 		} catch (error) { 	console.error(error); 
 	 		}
 	 		}
 	 		fetchDezerData()