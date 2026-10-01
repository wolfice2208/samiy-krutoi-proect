import { useState } from 'react';
import loading_gif from "./assets/pngtree-stomach-isolated-white-weight-picture-image_13106744.png"
export default function Fall(){

  const [isShowing, setIsShowing] = useState(false);
    const showImage = () => {
        setIsShowing(true)
    ;
    

}
return(
    <div className='nigga'>
      {isShowing && <img src={loading_gif} alt="Моё изображение" width={400} />}
      <button onClick={showImage}>Показать картинку</button>
    </div>)
}