import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [blood, setBlood] = useState('');

    async function donate(event) {
        await api.post('/', { name, email, blood });

        console.log(name, email, blood);
    }

    return (
        <div className="form">
            <h2>Entre na lista de doadores</h2>

            <form onSubmit={donate}>
                <input
                    type="text"
                    placeholder="Informe seu nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Informe seu tipo sanguineo"
                    value={blood}
                    onChange={event => setBlood(event.target.value)}
                />

                <button type="submit">Quero ajudar</button>
            </form>
        </div>
    );
}