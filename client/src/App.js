import {useRef, useState, useEffect} from 'react';
import { uploadFile } from './services/api';
import './App.css';


function App() {
  const [file,setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();
  const logo = 'https://img.freepik.com/free-vector/cloud-network-system-background-vector-social-media-banner_53876-111845.jpg?w=740&t=st=1682534084~exp=1682534684~hmac=5f1607516fe49fa42702311aa2c5cccdc2c12efaa939e1dcc1b33a7122ab2767'
  useEffect(() => {
    const getImage = async () =>{
      if (file) {
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let response = await uploadFile(data);   //api
        setResult(response.path);
      }

    } 
    getImage();
  },[file])
  
  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'> 
      <h1>ByteBridge</h1>
      <p>Upload Files and share links</p>
      <button onClick={() => onUploadClick()}>Upload</button>
      <input type="file"
         ref={fileInputRef}
         style={{display:'none'}}
         onChange={(e) => setFile(e.target.files[0])}
      
      />

      <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
