import React from 'react';
import Header from './Header';
import CTA from './CTA';
import Hero from './Hero';

export default function TopSection() {
    return (
        <div className='top-section'>
            <Hero />

            <div>
                <Header />
                <CTA />
            </div>
        </div>
    );
}
