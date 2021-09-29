import React from 'react';
import pile from '../../assets/Background-Contact-Form.jpg';
import ImageGroup from '../utility/ImageGroup';

export default function Contact() {
    return (
        <section id='contact' className='contact'>
            <ImageGroup title='Skontaktuj się z nami' src={pile} alt='ubrania' overlay>
                <form className='form'>
                    <div className='form__row'>
                        <label className='form__label'>
                            Wpisz swoje imię
                            <input type='text' className='form__input' placeholder='Krzysztof' />
                        </label>
                        <label className='form__label'>
                            Wpisz swój email
                            <input type='text' className='form__input' placeholder='abc@xyz.pl' />
                        </label>
                    </div>

                    <label className='form__label'>
                        Wpisz swoją wiadomość
                        <textarea
                            cols={30}
                            rows={7}
                            className='form__input'
                            placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus, voluptatum nobis doloremque mollitia suscipit magni harum at necessitatibus. Expedita magnam voluptas omnis hic corporis ipsum aspernatur velit alias quae.'
                        />
                    </label>

                    <input type='submit' className='btn btn--small form__submit' />
                </form>
            </ImageGroup>
        </section>
    );
}
