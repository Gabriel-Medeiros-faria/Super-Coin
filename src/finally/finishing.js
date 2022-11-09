import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../Contexts/Auth"

export default function Finishing() {
    const{setFin,setName, setEmail, setDataNascimento,setCep} = useContext(AuthContext)
    return (
        <>
            <ContainerFinishing>
                <div className="infoUser">
                    <p>Coin Viton</p>
                    <input placeholder="nome completo" onChange={(e)=>setName(e.target.value)}></input>
                    <input placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}></input>
                    <input placeholder="data de nascimento" onChange={(e)=>setDataNascimento(e.target.value)}></input>
                    <input placeholder="CEP" onChange={(e)=>setCep(e.target.value)}></input>
                    <button className="continue">Continuar</button>
                    <div className="back" onClick={()=> setFin(false)}>Voltar</div>
                </div>
            </ContainerFinishing>
        </>
    )
}
const ContainerFinishing = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0,0,0, 0.5);
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 999;
p{
    font-family: 'Comfortaa';
    font-size: 50px;
    color: #620e5d;
    margin-bottom: 70px;
}
.infoUser{
    width: 400px;
    height: 600px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    input {
        padding: 7px;
     font-size: 20px;
     border-width: 2px;
     border-color: #620e5d80;
     background-color: #ffffff;
     color: #620e5d;
     border-style: solid;
     border-radius: 50px;
     box-shadow: 0px 0px 0px rgba(66,66,66,.75);
     text-shadow: 0px 0px 0px rgba(66,66,66,.75);
     margin-bottom: 10px;
}
input:focus {
    outline:none;
}
input::placeholder{
    font-style: italic;

}
}
.continue {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(47,19,53);
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'comfortaa';
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    margin-top: 30px;
}
.continue:hover {
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
	border-radius:8px;
}
.continue:active {
	position:relative;
	top:1px;
}
.back{
    font-family: 'comfortaa';
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 20px;
}
`