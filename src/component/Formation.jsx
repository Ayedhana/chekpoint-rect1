import React from 'react';
import './FormationStyle.css';
function Formation(){
return (
    <div>
    <h1>Nos formations</h1>
  <div className="contenue-formation">
    <div className="Formation">
      <h3>Full-Stack</h3>;
      <img
        className="imgformation"
        src="https://gomycodewebsite.blob.core.windows.net/website/img/Plateform_picto_a696d93b1f.svg"
        alt="formation1"
      />
      <p>
        Le programme vous permet de suivre une formation intensive qui vous
        permettra de lancer une carrière de développeur FullStack JS et de
        maîtriser les technologies demandées par les employeurs.
      </p>
    </div>
    <div>
      <h3>intelligence artificielle</h3>;
      <img
        className="imgformation"
        src="https://www.cnil.fr/sites/default/files/styles/contenu-generique-visuel/public/thumbnails/image/ia_de_quoi_parle_t-on.png?itok=rYfJJY-7"
        alt="formation1"
      />
      <p>
        A travers ce programme, vous maîtriserez les bases de l’intelligence
        artificielle ainsi que les algorithmes supervisés et non supervisés de
        machine learning afin de créer votre propre projet machine learning en
        exploitant la librairie Scikit-Learn.
      </p>
    </div>
    <div>
      <h3>Data Scientist</h3>;
      <img
        className="imgformation"
        src="https://prod-discovery.edx-cdn.org/media/programs/card_images/b5598690-9bd8-4d21-b7f3-dc741b50473f-174928e730c7.jpeg"
        alt="formation1"
      />
      <p>
        Ce programme à temps plein est une formation intensive qui vous
        permettra de maîtrises la visualisation de données, le Machine Learning
        et la Big Data.
      </p>
    </div>
  </div>
  <h1>Inscrivez vous:</h1>
  </div>
);
}
export default Formation;