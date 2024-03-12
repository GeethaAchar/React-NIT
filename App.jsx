import Child from "./Child.jsx";

export default function App(){
  let names=["raj","vani","deen"]
  let ages=[12,35,45]
return(
  <div>
   {names.map((n,index)=>(
    (<Child names={n} age={ages[index]} key={index}/>)

   ))}
  </div>
)
}
