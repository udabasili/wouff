import React from 'react'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary ">Your dog is our dog</h3>
          <p className="paragraph">
            Ut in admitto scripti lapidem ignotas de actione. 
            Hos istiusmodi sum possidendi praecipuus corrigatur. 
            Venientia dubitavit infinitae et in cognoscam ei laboriosa is supponant. 
            Jure dei idem fal isti bere sunt quod ima. 
            Accepisse fruebatur oblivisci imo sua manifesta essentiam. 
            Deesset du et nunquam quasdam id veteris to reddere judicia. 
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="https://images.unsplash.com/photo-1518882174711-1de40238921b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
              alt="dogs playing"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="https://images.unsplash.com/photo-1533693287076-186e5b4dc5e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
              alt="dogs having fun"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="https://images.unsplash.com/photo-1565677487876-1a195898c883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
              alt="dog playing"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
