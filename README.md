# VoceImporta

30/04/2024 - Iniciado tela principal. (HTML & CSS)


@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:ital,wght@0,823;1,823&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

html {
    height: 100%;
}

body {
    background-image: linear-gradient(to bottom, #CFCFCF, #FFECE1, #FF914D);
}

header {
    filter: drop-shadow(0 0 8rem rgb(0, 0, 0));
    margin-left: 20px;
    margin-top: 20px;
}

footer{
    font-weight: 600;
    font-style: normal;
    font-size: 12px;
    color: white;
}

.logo{
    width: 220px;
    height: 90px;
    margin-top: 10px;
    margin-left: 10px;
}

.div{
    display: inline-block;
    width: 50%;
}

.container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    align-content: center;
    margin-left: 300px;
}

.container .carrosel{
    width: 300px;
    height: 600px;
    background-color: aqua;
    border: 1px solid black;
    margin-left: 30px;
}

.container .texto{
    width: 700px;
    height: 200px;
    text-align: right;
    margin-left: 305px; 
}

.container .titulo{
    font-weight: 600;
    font-style: normal;
    font-size: 25px;
}

.container .escrita{
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
}

.container .button1{
    background-color: #FFFFFF;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 90px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    font-size: 10px;
    margin-top: 60px;
    margin-right: 335px;
    width: 365px;
    height: 55px;
}

.container .button1:hover{
    background-color: #FF914D;
    color: white;
}

.container .gimg{
    position: absolute;
    display: flex;
    margin-left: 40px;
}

.google{
    margin-right: -15px;
    font-weight: 300;
    font-style: normal;
}

.container .button2{
    background-color: #FFFFFF;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 90px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    font-weight: 100;
    font-style: normal;
    font-size: 10px;
    margin-top: 25px;
    margin-right: 335px;
    width: 365px;
    height: 55px;
}

.container .button2:hover{
    background-color: #FF914D;
    color: white;
}

.container .ximg{
    position: absolute;
    display: flex;
    margin-left: 40px;
}

.x{
    font-weight: 300;
    font-style: normal;
}

.container .button3{
    background-color: #FFFFFF;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 90px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    font-weight: 100;
    font-style: normal;
    font-size: 10px;
    margin-top: 25px;
    margin-right: 335px;
    width: 365px;
    height: 55px;
}

.container .button3:hover{
    background-color: #FF914D;
    color: white;
}

.container .fimg{
    position: absolute;
    display: flex;
    margin-left: 40px;
}

.facebook{
    margin-right: -40px;
    font-weight: 300;
    font-style: normal;
}

.container .ou{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;  
    font-size: 15px;
    margin-top: 20px;
    margin-right: 255px;
}

.container .button4{
    background-color: #FFFFFF;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 90px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    font-weight: 100;
    font-style: normal;
    font-size: 10px;
    margin-top: 20px;
    margin-right: 335px;
    width: 365px;
    height: 55px;
}

.container .button4:hover{
    background-color: #FF914D;
    color: white;
}

.criar{
    font-weight: 300;
    font-style: normal;
}

.container .termos{
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    margin-top: 15px;
    margin-right: 335px;
    width: 345px;
}

.container .PC{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;  
    font-size: 15px;
    margin-top: 15px;
    margin-right: 235px;
}

.container .button5{
    background-color: #FFFFFF;
    border: none;
    color: #FF914D;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 90px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    font-weight: 100;
    font-style: normal;
    font-size: 10px;
    margin-top: 20px;
    margin-right: 335px;
    width: 365px;
    height: 55px;
}

.container .button5:hover{
    background-color: #FF914D;
    color: white;
}

.entrar{
    font-weight: 300;
    font-style: normal;
}
