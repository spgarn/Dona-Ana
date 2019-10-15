import React from "react";
import "./App.css";


function Hem() {
  return (      
   <div>
<div
          className="Div-Boxar"
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
           
          <div className="Titel1">Fondation Dona Ana</div>
          <div>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </div>
        </div>
        <div className="Div-Boxar">
<div className="Titel1">Stöd Fondation Dona Ana</div>
<div>Swisha till : 0700123456</div>
<div>
  <img style={{width:"200px"}} alt="" src="https://www.getswish.se/content/uploads/2018/07/swish_vertical_main_rgb.png"></img>
</div>
        </div>


   </div>
    
  );
}

export default Hem;
