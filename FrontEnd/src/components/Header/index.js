import React from 'react';

import { Container } from './style';

import Efect from '../../efect';

export default function Header(){
    return(
        <Container>
            <h1>DOE</h1>

            <h2>A sua doação importa</h2>
            
            <p>Até 3 vidas com 1 doação</p>
            <p>Mais de 38.000 doasções são necessárias todos os dias</p>
            <p>Apenas 1,9% da população brasileira, doa sangue</p>

            <button onClick={ Efect }>Quero ajudar</button>
        </Container>
    );
}