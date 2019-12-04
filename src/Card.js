import React from 'react';
import styled from 'styled-components';

const Card = props => {
    
    const Container = styled.div`
        margin-top: 24px;
        display: flex;
        justify-content: center;
    `

    const User = styled.div`
        width: 272px;
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        
        .image-container {
            height: 272px;
            border: 1px solid lightgray;
            border-radius: 5px;

            img {
                height: 272px;
                width: 272px;
            }
        }

        h2 {
            margin-top: 16px;
            font-size: 26px;
            font-weight: 600;
        }

        h3 {
            margin-bottom: 16px;
            font-size: 20px;
            font-weight: 400;
        }

        a button {
            height: 34px;
            width: 272px;
            margin-bottom: 16px;
            background: #EFF3F6;
            border: 1px solid lightgray;
            border-radius: 5px;
            outline: none;
            font-family: 'Quicksand', sans-serif;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        
            :hover {
                border: 1px solid gray;    
            }
        }

        .bio {
            margin-bottom: 4px;
            font-size: 14px;
            font-weight: 500;
        }

        .location-container {
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            font-size: 14px;

            i {
                margin-right: 3px;
            }

            p {
                font-weight: 500;
            }
        }

        .pro-container {
            display: flex;
            align-items: center;
            font-size: 12px;

            i {
                margin-right: 8px;
            }

            p {
                padding: 3px 4px;
                background: #6F42C1;
                border-radius: 2px;
                font-weight: 500;
                color: white;
            }
        }
    `

    const Followers = styled.div`
        h2 {
            padding: 16px 8px;
            font-size: 14px;
            font-weight: 500;
        }

        .follower-container {
            width: 928px;
            padding: 24px 0px;
            border-top: 1px solid lightgray;
            display: flex;
            justify-content: space-between;
            
            div {
                display: flex;
            }

            div img {
                height: 50px;
                width: 50px;
                margin-right: 28px;
                border-radius: 3px;
            }

            div p {
                font-size: 16px;
            }

            a button {
                height: 28px;
                width: 57.72px;
                border: 1px solid lightgray;
                border-radius: 3px;
                font-family: 'Quicksand', sans-serif;
                font-size: 12px;
                font-weight: 500;
                cursor: pointer;

                :hover {
                    border: 1px solid gray;    
                }
            }
        }
    `

    // how would i implement css reset?
    
    return (
        <Container>
            <User>
                <div className='image-container'>
                    <img src={props.userData.avatar_url} alt='avatar'></img>
                </div>
                <h2>{props.userData.name}</h2>
                <h3>{props.userData.login}</h3>
                <a href={props.userData.html_url} target='_blank'><button>Follow</button></a>
                <p className='bio'>{props.userData.bio}</p>
                <div className='location-container'>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{props.userData.location}</p>
                </div>
                <div className='pro-container'>
                    <i className="fas fa-star"></i>
                    <p>PRO</p>
                </div>
            </User>
            <Followers>
                <h2>Followers</h2>
                {props.followerData.map((item, index) => {
                    return (
                        <div className='follower-container' key={index}>
                            <div>
                                <img src={item.avatar_url} alt='avatar'></img>
                                <p key={index}>{item.login}</p>
                            </div>
                            <a href={item.html_url} target='_blank'><button>Follow</button></a>
                        </div>
                    )
                })}
            </Followers>
        </Container>
    )
    
};

export default Card;