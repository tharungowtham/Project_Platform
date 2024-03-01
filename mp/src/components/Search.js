import React,{useState} from 'react'

export default function Search() {
    function myFunction() {
        var input, filter, li, a, i,j;
        li = document.getElementsByClassName("PRO");
        for (i = 0; i < li.length; i++) {
          for(j=0;j<3;j++){
          a = li[i].getElementsByTagName("span")[j];
      
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            break;
          } 
          else {
            li[i].style.display = "none";
          }
        }
      }
    }
    const [search, setsearch] = useState("")
    const li = document.getElementsByClassName("PRO");
    function setvalue(e){
      setsearch(e.target.value);
      console.log(search)
      for (let i = 0; i < li.length; i++) {
        for(let j=0;j<3;j++){

            var a = li[i].getElementsByTagName("span")[j];
            if (a.innerHTML.toUpperCase().indexOf(search.toUpperCase()) > -1) {
                li[i].style.display = "";
                break;
                } 
            else {
                li[i].style.display = "none";
                }
            }
    }
}
  return (
    <>
    <div id="Search" className="form-floating mb-3 mt-3 mx-auto">
        <input type="text" className="form-control" placeholder="Search" name="Search" value={search}  onChange={setvalue} />
        <label htmlFor="Search">Search</label>
    </div>
    </>
  )
}
