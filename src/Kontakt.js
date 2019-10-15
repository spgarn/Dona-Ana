import React from "react";
import "./App.css";

function Kontakt() {
  return (
    <div>
      <div className="Div-Boxar">
        <div className="Titel1">Kontakt</div>
        <div>Kontakta oss om du är intresserad eller funderar över något!</div>
      </div>
      <div className="Div-Boxar">
        <div className="Titel1">Anne Sundberg</div>
        <div>
          <div>Grundare till Fonden som aktivt brinner för området Kongo.</div>
          <div>Telefon : 012-345678</div>
         <div>  Mail : Anne.Sundberg@mail.com</div>
        </div>
      </div>
      <div className="Div-Boxar">
        <div className="Titel1">Carl Sundberg</div>
        <div>
          <div>Gift med Anne och hjälper till med diverse</div>
          <div> Telefon :012-345678 </div>
          <div> Mail : Carl.sundberg@mail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
