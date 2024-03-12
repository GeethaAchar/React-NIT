import Child1 from "./Child1.js";

const parent = () => {
    let movienames =["KGF","Kantara","UI"];
    
  return (
    <div>
    {movienames.map((name,i)=>{
        (<Child1 moviename={name} key={i}/>)
    })

    }

    </div>
  )
}

export default parent
