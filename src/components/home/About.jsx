import React from 'react';
import people from '../../assets/People.jpg';
import signature from '../../assets/Signature.svg';
import ContentGroup from '../utility/ContentGroup';

export default function About() {
    return (
        <section className='about'>
            <div className='about__content'>
                <ContentGroup title='O nas'>
                    <p className='about__description'>
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
                        celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
                        parsnip.
                    </p>

                    <img className='about__signature' src={signature} alt='signature' />
                </ContentGroup>
            </div>

            <img src={people} alt='people' className='about__photo' />
        </section>
    );
}
