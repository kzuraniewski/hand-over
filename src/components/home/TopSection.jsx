import React from 'react';
import Header from './Header';
import CTA from './CTA';
import Hero from './Hero';

export default function TopSection() {
    return (
        <div className='top-section'>
            <Hero />

            <div className='top-section__group'>
                <Header />
                <CTA />
            </div>
        </div>
    );
}
