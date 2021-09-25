import React from 'react';
import people from '../../assets/People.jpg';
import signature from '../../assets/Signature.svg';
import Decoration from './Decoration';

export default function About() {
    return (
        <section className='about'>
            <div className='about__content'>
                <div className='content-group'>
                    <h1 className='content-group__title'>O nas</h1>

                    <Decoration />

                    <p className='content-group__description'>
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
                        celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
                        parsnip.
                    </p>

                    <img className='about__signature' src={signature} alt='signature' />
                </div>
            </div>

            <img src={people} alt='people' className='about__photo' />
        </section>
    );
}
