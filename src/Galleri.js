import React from "react";
import "./App.css";
import ImageGallery from 'react-image-gallery';


function Galleri() {

  
 
    const images = [
      {
        original: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=d7a5a214-5e20-41d7-9b2f-2e25db3e2632&type=preview&source=d7a5a214-5e20-41d7-9b2f-2e25db3e2632&function=hardcrop&width=784&height=441&q=80',
        thumbnail: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=d7a5a214-5e20-41d7-9b2f-2e25db3e2632&type=preview&source=d7a5a214-5e20-41d7-9b2f-2e25db3e2632&function=hardcrop&width=784&height=441&q=80',
      },
      {
        original: 'http://www.smyrnaedsbyn.se/sites/default/files/field/image/hh.jpg',
        thumbnail: 'http://www.smyrnaedsbyn.se/sites/default/files/field/image/hh.jpg',
      },
      {
        original: 'https://cdn.arbetaren.se/wp-content/uploads/2018/03/28212521/AMag3-mars-s-utrikes-kongo.jpg',
        thumbnail: 'https://cdn.arbetaren.se/wp-content/uploads/2018/03/28212521/AMag3-mars-s-utrikes-kongo.jpg',
      },
    ];

    const images1 = [
      {
        original: 'https://www.rodakorset.se/globalassets/rodakorset.se/bilder/4-vad-vi-gor/lander-vi-arbetar-i/kongo/kongo-drc-roda-korset-mat2000x1125.jpg',
        thumbnail: 'https://www.rodakorset.se/globalassets/rodakorset.se/bilder/4-vad-vi-gor/lander-vi-arbetar-i/kongo/kongo-drc-roda-korset-mat2000x1125.jpg',
      },
      {
        original: 'http://www.syskonbandet.se/wp-content/uploads/2012/10/Foto-2-Guns-20091.jpg',
        thumbnail: 'http://www.syskonbandet.se/wp-content/uploads/2012/10/Foto-2-Guns-20091.jpg',
      },
      {
        original: 'https://www.omvarlden.se/imagevault/publishedmedia/khfnesc12nbzeimei941/mineraler.jpg',
        thumbnail: 'https://www.omvarlden.se/imagevault/publishedmedia/khfnesc12nbzeimei941/mineraler.jpg',
      },
    ];


  return (  
    
      <div>
          <div className="Div-Boxar">
        <div className="Titel1">Bilder från olika projekt</div>
        <div>
        Här har vi samlat bilder ifrån alla våra olika projekt. Galleriet uppdateras med jämna mellanrum
        </div>
      </div>
      <div className="Div-Boxar">
        <div className="Titel1">Projekt Delta Belta</div>
        <div>
        <ImageGallery items={images} />
        </div>
        
      </div>
      <div className="Div-Boxar">
        <div className="Titel1">Projekt Belta Delta</div>
        <div>
        <ImageGallery items={images1} />
        </div>
        
      </div>
      </div>
    
  );
}

export default Galleri;