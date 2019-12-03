import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const Header = styled.div`
        height: 64px;
        background: #24292E;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .fa-github {
            margin-right: 16px;
            font-size: 32px;
            color: white;
        }

        form input {
            padding: 8px;
            height: 28px;
            width: 300px;
            background: hsla(0,0%,100%,.125);
            border: none;
            border-radius: 3px;
            outline: none;
            font-family: 'Quicksand', sans-serif;
            font-weight: 500;
            color: white;
        }
    `
    
    return (
        <Header>
            <i className="fab fa-github"></i>
            <form>
                <input placeholder='GitHub Username'/>    
            </form>
        </Header>
    )
};

export default Header;