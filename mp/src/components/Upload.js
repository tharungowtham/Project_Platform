import React,{useState} from 'react'
import Axios from 'axios'

// const dropArea = document.querySelector(".drag-area");
// const dragText = dropArea.querySelector("header"),
// button = dropArea.querySelector("a"),
// input = dropArea.querySelector("input");
// let file; //this is a global variable and we'll use it inside multiple functions

// button.onclick = ()=>{
//   input.click(); //if user click on the button then the input also clicked
// }

// input.addEventListener("change", function(){
//   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
//   file = this.files[0];
//   dropArea.classNameList.add("active");
//   showFile(); //calling function
// });


// //If user Drag File Over DropArea
// dropArea.addEventListener("dragover", (event)=>{
//   event.preventDefault(); //preventing from default behaviour
//   dropArea.classNameList.add("active");
//   dragText.textContent = "Release to Upload File";
// });

// //If user leave dragged File from DropArea
// dropArea.addEventListener("dragleave", ()=>{
//   dropArea.classNameList.remove("active");
//   dragText.textContent = "Drag & Drop to Upload File";
// });

// //If user drop File on DropArea
// dropArea.addEventListener("drop", (event)=>{
//   event.preventDefault(); //preventing from default behaviour
//   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
//   file = event.dataTransfer.files[0];
//   showFile(); //calling function
// });

// function showFile(){
//   let fileType = file.type; //getting selected file type
// //   let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
// //   if(validExtensions.includes(fileType)){ //if user selected file is an image file
//     let fileReader = new FileReader(); //creating new FileReader object
//     fileReader.onload = ()=>{
//       let fileURL = fileReader.result; //passing user file source in fileURL variable
//         // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
//       // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
//       // dropArea.innerHTML = imgTag; 
//       document.getElementById("asdfgh").innerHTML+=file.name+'<br>';
//       //adding that created img tag inside dropArea container
//     }
//     fileReader.readAsDataURL(file);
  
//   else{
//     alert("This is not an Image File!");
//     dropArea.classNameList.remove("active");
//     dragText.textContent = "Drag & Drop to Upload File";
//   }}
export default function Upload() {
    const [author, setauthor] = useState()
    const [title, settitle] = useState()
    const [description, setdescription] = useState()
    const [techused, settechused] = useState()


//     const dropArea = document.getElementsByClassName("drag-area");
//     const dragText = document.getElementsByClassName("header"),
//     button = document.getElementsByClassName("a"),
//     input = document.getElementsByClassName("input");
// let file; //this is a global variable and we'll use it inside multiple functions

// button.onclick = ()=>{
//   input.click(); //if user click on the button then the input also clicked
// }

// input.addEventListener("change", function(){
//   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
//   file = this.files[0];
//   dropArea.classNameList.add("active");
//   showFile(); //calling function
// });


// //If user Drag File Over DropArea
// dropArea.addEventListener("dragover", (event)=>{
//   event.preventDefault(); //preventing from default behaviour
//   dropArea.classNameList.add("active");
//   dragText.textContent = "Release to Upload File";
// });

// //If user leave dragged File from DropArea
// dropArea.addEventListener("dragleave", ()=>{
//   dropArea.classNameList.remove("active");
//   dragText.textContent = "Drag & Drop to Upload File";
// });

// //If user drop File on DropArea
// dropArea.addEventListener("drop", (event)=>{
//   event.preventDefault(); //preventing from default behaviour
//   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
//   file = event.dataTransfer.files[0];
//   showFile(); //calling function
// });

// function showFile(){
//   let fileType = file.type; //getting selected file type
// //   let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
// //   if(validExtensions.includes(fileType)){ //if user selected file is an image file
//     let fileReader = new FileReader(); //creating new FileReader object
//     fileReader.onload = ()=>{
//       let fileURL = fileReader.result; //passing user file source in fileURL variable
//         // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
//       // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
//       // dropArea.innerHTML = imgTag; 
//       document.getElementById("asdfgh").innerHTML+=file.name+'<br>';
//       //adding that created img tag inside dropArea container
//     }
//     fileReader.readAsDataURL(file);
// }
    function submit(){
        const newProject={
            project_title:{title},
            author:{author},
            description:{description},
            tech_used:{techused}
        }
        Axios.post(`http:localhost:3000/upload?`,newProject).then(()=>{
            alert("posted")
        })
    }
  return (
    <>
    <div className="container d-flex justify-content-center">upload your documents</div>
    <div className="container upload my-5">
        <form onSubmit={submit}>
            <div className="row mb-3">
                <label htmlFor="title" className="col-sm-2 col-form-label">Project Title</label>
                <div className="col-sm-9">
                <input type="text" className="form-control" id="title" value={title} onInput={e=>settitle(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="author" className="col-sm-2 col-form-label">Author</label>
                <div className="col-sm-9">
                <input type="text" className="form-control" id="author" value={author} onInput={e=>setauthor(e.target.value) } />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="Description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-9">
                    <textarea className="form-control" id="Description" rows="5 " value={description} onInput={e=>setdescription(e.target.value)} ></textarea>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="Techused" className="col-sm-2 col-form-label">Tech used</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" id="tech used" value={techused} onInput={e=>settechused(e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="Difficulty" className="col-sm-2 col-form-label">Difficulty</label>
                <div className="col-sm-9">
                    <input type="range" className="form-range" min="0" max="2" step="1" id="Difficulty"/>
                </div>
            </div>
            <div className="col-11">
                <div className="drag-area ">
                    <div className="icon1"><i className="fas fa-cloud-upload-alt"></i></div>
                    <header className='header'>Drag files here to add them to our server</header>
                    <span>OR</span>
                    <a href="/" className='a'>Browse File</a>
                    <input type="file" hidden className='input'/>
                </div>
                <div id="asdfgh"></div>
            </div>
            <br/><br/>
            <button type="submit" className="btn btn-success col-sm-12">Publish</button>
        </form>
    </div>
    </>
  )
}
