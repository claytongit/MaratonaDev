import React, {  useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './style';

export default function Main() {

    const [ user, setUser ] = useState([]);

    useEffect(()=>{
        async function load(){
            const response = await api.get('/');

            console.log(response.data);
            setUser(response.data);
        } 

        load();
    }, []);

    return (
        <Container>
            <h2>Últimos <span>doadores</span></h2>

            <div className="donors">
                {user.map(user => (
                    <div key={ user._id } className="donor">
                        <div className="blood">{ user.blood }</div>
                        <p>{ user.name }</p>
                    </div>
                ))}
            </div>
        </Container>
    );
}