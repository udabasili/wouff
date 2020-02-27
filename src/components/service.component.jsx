import React from 'react';
import Icon from "../assets/symbol-defs.svg";


export default function Service() {
  return (
    <section className="service-section" id="service">
      <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
              What We Bring
          </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <svg className="svg-icon">
            <use xlinkHref={`${Icon}#icon-heart`}/>
          </svg>
          <h3 className="heading-tertiary ">Love</h3>
          <p className="paragraph">
              Ut in admitto scripti lapidem ignotas de actione. 
              Hos istiusmodi sum possidendi praecipuus corrigatur. 
              Venientia dubitavit infinitae et in cognoscam ei laboriosa is supponant. 
              Jure dei idem fal isti bere sunt quod ima. 
              Accepisse fruebatur oblivisci imo sua manifesta essentiam. 
              Deesset du et nunquam quasdam id veteris to reddere judicia. 
            </p>
        </div>
        <div className="col-1-of-3">
          <svg className="svg-icon">
            <use xlinkHref={`${Icon}#icon-happy`}/>
          </svg>
          <h3 className="heading-tertiary ">Happiness</h3>
          <p className="paragraph">
              Ut in admitto scripti lapidem ignotas de actione. 
              Hos istiusmodi sum possidendi praecipuus corrigatur. 
              Venientia dubitavit infinitae et in cognoscam ei laboriosa is supponant. 
              Jure dei idem fal isti bere sunt quod ima. 
              Accepisse fruebatur oblivisci imo sua manifesta essentiam. 
              Deesset du et nunquam quasdam id veteris to reddere judicia. 
          </p>
        </div>
        <div className="col-1-of-3">
          <svg className="svg-icon">
            <use xlinkHref={`${Icon}#icon-heart`}/>
          </svg>
          <h3 className="heading-tertiary ">Path</h3>
          <p className="paragraph">
              Ut in admitto scripti lapidem ignotas de actione. 
              Hos istiusmodi sum possidendi praecipuus corrigatur. 
              Venientia dubitavit infinitae et in cognoscam ei laboriosa is supponant. 
              Jure dei idem fal isti bere sunt quod ima. 
              Accepisse fruebatur oblivisci imo sua manifesta essentiam. 
              Deesset du et nunquam quasdam id veteris to reddere judicia. 
          </p>

        </div>
      </div>
    </section>

  );
}
