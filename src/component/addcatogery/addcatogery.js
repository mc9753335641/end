import {useState} from 'react'
import axios from 'axios'
import { categoryapiurl } from '../../api.url';
import { Link } from 'react-router-dom';
function Addcatogery()
 {
  const [file, setFile] = useState();
  const [catName , setCatName] = useState();
  const [output , setOutput] = useState();
  const handleChange=(event)=>{
  setFile(event.target.files[0])
  }
  const handleSubmit=(event)=>{
  var formData = new FormData();
  formData.append('catnm', catName);
  formData.append('caticon', file);
  const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(categoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });
    }
    return(<>
       <div class="container mt-3">
  <form>
  <font>{output}</font>
    <div class="row jumbotron box8">
      <div class="col-sm-12 mx-t3 mb-4">
        <h2 class="text-center text-info">addcatogery!!!</h2>
      </div>
      <div class="col-sm-6 form-group">
        <label for="email">categoery name</label>
        <input type="cat" class="form-control" name="cat" id="email" placeholder="Enter your  categoery name." value={catName}   onChange={e=>setCatName(e.target.value)}/>
      </div>
     <div class="col-sm-6 form-group">
        <label for="pass">categoery icon</label>
        <input type="file" name="scat" class="form-control" id="pass" placeholder="Enter your categoery icon."  onChange={handleChange} />
      </div>
      <div class="col-sm-12 form-group mb-0">
        <button class="btn btn-primary float-right" type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </form>
  <button style={{background:"cyan",}}><Link to="/adminview">view category</Link></button>
</div>
    </>)
}
export default Addcatogery