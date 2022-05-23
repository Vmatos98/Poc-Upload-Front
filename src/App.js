import { useState } from "react";
import  axios  from "axios";

export default function App(){
    const [image, setImage] = useState('');
    const sendData = async e =>{
        e.preventDefault();
        console.log(image);
        const form = new FormData ()
        form.append('image', image);

        try {
            const {data} = await axios.post('http://localhost:5000/uploads', form);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <><h1>Upload</h1>
        <form onSubmit={sendData} encType="multipart/form-data">
            <label>Imagem: </label>
            <input type="file" name="imagem" onChange={e=>setImage(e.target.files[0])}/>
            <br/><br/>
            <button type="submit">Enviar</button>
        </form>
        </>
    );
}