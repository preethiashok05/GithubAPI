const repository = {repository}
const username = {username}
const rootURL = "https://api.github.com"
const params ={"state" : "open"}
const header = {'Authorization' : `${token}`};


async function getRepositoryData(){
   const url = `${rootURL}/repos/${username}/${repository}`;
   try{
      const req = await fetch(url ,header ,params);
      const data = await req.json();
      return data;
   }catch(error){
      console.log(error);
   }   
 }

 getRepositoryData();

async function getContent(data){
   let url = `${rootURL}/repos/${username}/${repository}/contents`;
   for(let path in data)
      url=url+'/'+path;
   try{
     data = await fetch(url ,header ,params);
     if(typeof(data) === object ){
        if(message in data.keys())
            return 'Limit of call exceeded'
         else 
            console.log(data);
     }else{
        console.log(data);
     }
      
   }catch(error){
      console.error(error);
   }   
}

getContent(data);
