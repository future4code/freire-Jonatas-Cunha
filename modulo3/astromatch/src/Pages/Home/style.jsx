import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    width: 100%;
    display: block;
    z-index: 2;
`

export const BoxImagem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 95%;
    height: 430px;
    margin: 5px auto;
    border-radius: 15px;
    box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 69%);
    
    ::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg,rgb(0 0 0 / 85%) 5%,rgba(0,0,0,0) 50%);
        z-index: 3;
    }

    ::after {
        content: "";
        background: url(${props => props.img}) no-repeat center;
        background-size: cover;
        filter: blur(30px);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }


    @keyframes rotate-out-2-br-cw {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
            -webkit-transform-origin: ${props => props.direction ? "100%" : "0"} 100%;
                    transform-origin: ${props => props.direction ? "100%" : "0"} 100%;
            opacity: 1;
        }
        100% {
            -webkit-transform: rotate(${props => props.direction ? "45deg" : "-45deg"});
                    transform: rotate(${props => props.direction ? "45deg" : "-45deg"});
            -webkit-transform-origin: ${props => props.direction ? "100%" : "0"} 100%;
                    transform-origin: ${props => props.direction ? "100%" : "0"} 100%;
            opacity: 0;
        }
    }
    
    ${props => props.animacao && ({
        animation: "rotate-out-2-br-cw 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
    })}

    #mensagem{
        display: ${props => props.animacao ? "block" : "none"};
        position: absolute;
        z-index: 1000;
        top: 11px;
        ${props => props.direction ? "right: 25px;" : "left: 25px;"}
        padding: 5px 20px;
        color: ${props => props.direction ? "green" : "red"};
        font-size: 30px;
        font-weight: bolder;
        text-transform: uppercase;
        transform: ${props => props.direction ? "rotate(27deg)" : "rotate(-27deg)"};
        border: 4px solid ${props => props.direction ? "green" : "red"};
        border-radius: 5px;
        background: ${props => props.direction 
        ? "linear-gradient(to right, #274127, #274127)" 
        : "linear-gradient(to left, #573434, #573434)"};
        letter-spacing: 2px;
    }

`

export const BoxBio = styled.div`
    position: absolute;
    z-index: 1000;
    bottom: 135px;
    right: 10px;
    color: white;
    width: 89%;
    padding: 0 10px;

    @media(max-width: 468px) {
        bottom: 130px;
    }

    #nameIdade {
        display: flex;
        align-items: center;
    }

    #nameIdade h2 {
        margin: 0;
    }

`

const animationBotao = keyframes`

        0% {
            background-size: 30% 30%;
        }

        30% {
            background-size: 80% 80%;
        }

        50% {
            background-size: 100% 100%;
        }

        80% {
            background-size: 200% 200%;
        }

        90% {
            background-size: 400% 400%;
        }

        100% {
            background-size: 1000% 1000% ;
        }

`


export const BoxBotoes = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 120px;

    button {
        background: none;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        font-size: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    #reject {
        color: red;
        border-color: red;

    }
    #reject:hover {
        color: white;
        background: radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,255,255,1) 60%) no-repeat center;
        animation: ${animationBotao}  0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }


    #reset {
        color: CornflowerBlue;
        border-color: CornflowerBlue;
    }
    #reset:hover {
        color: white;
        background: radial-gradient(circle, CornflowerBlue 0%, rgba(255,255,255,1) 60%) no-repeat center;
        animation: ${animationBotao}  0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }


    #match {
        color: green;
        border-color: green;
    }
    #match:hover {
        color: white;
        background: radial-gradient(circle, green 0%, rgba(255,255,255,1) 60%) no-repeat center;
        animation: ${animationBotao}  0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

`

export const Acabou = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`