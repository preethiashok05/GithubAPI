const repository = 'Hackbook'
const username = 'techhub-community'
const rootURL = "https://api.github.com"
const params ={"state" : "open"}
const header = {'Authorization' : `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`};


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

 getRepositoryData().then((response)=>
 {
    console.log(response);
 });

async function getContent(){
   let url = `${rootURL}/repos/${username}/${repository}/contents/data`;
   try{
   var data= await fetch(url ,header ,params)
      return data.json();
   }
   catch(error){
      console.log(error);
   }   
}

getContent().then(
   (response)=>
   {
      response.forEach((item,index)=>{
          console.log(item.name);
      })
   }
);