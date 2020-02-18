import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    margin: 0 auto 70px;

    h2{
        margin-bottom: 70px;
        font-size: 30px;
    }

    span{
        color: #ff4f4f;
    }

    .donors{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        position: relative;
    }

    .donor p{
        margin-top: 24px;
        margin-bottom: 50px;
    }

    .blood{
        color: #ff4f4f;
        font-weight: bold;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blood::before{
        content: "";
        background-color: #ff4f4f11;
        width: 40px;
        height: 40px;
        position: absolute;
        border-radius: 50px 0 50px 50px;
        transform: rotate(-45deg);
    }


`;