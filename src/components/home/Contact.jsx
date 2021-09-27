import React from 'react';
import pile from '../../assets/Background-Contact-Form.jpg';
import { Form, FormInput, FormTextarea, FormSubmit, FormRow } from '../utility/Form';
import ImageGroup from '../utility/ImageGroup';

export default function Contact() {
    return (
        <section id='contact' className='contact'>
            <ImageGroup title='Skontaktuj się z nami' src={pile} alt='ubrania' overlay>
                <Form>
                    <FormRow>
                        <FormInput label='Wpisz swoje imię' placeholder='Krzysztof' />
                        <FormInput label='Wpisz swój email' placeholder='abc@xyz.pl' />
                    </FormRow>

                    <FormTextarea
                        label='Wpisz swoją wiadomość'
                        placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat exercitationem voluptate. Provident necessitatibus rerum ad, nulla, corporis officia aliquam asperiores neque itaque pariatur consequuntur! Incidunt recusandae tempore eos assumenda?'
                    />

                    <FormSubmit label='wyślij' />
                </Form>
            </ImageGroup>
        </section>
    );
}
