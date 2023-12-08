import Card from "./components/Card";
import PosterImg from "./assets/poster-logo.jpg";
import PosterImg2 from "./assets/poster palmeiras.jpg";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button>
        <span>vender</span>
      </Button>
      <Card
        title="Palmeiras Deca Campeão"
        img={PosterImg2}
        p="Palmeiras Campeão Brasileiro 2018, a campanha palmeirense contou com
        23 vitórias, 11 empates e apenas 4 derrotas. O Alviverde marcou 64
        gols e foi vazado 26 vezes. Foram 19 jogos em casa, sendo 15 no
        Allianz Parque e 4 no estádio do Pacaembu, com 16 vitórias, 2 empates
        e uma única derrota, e 19 longe de seus domínios – 7 triunfos, 9
        igualdades e 3 reveses."
        textButton="vender"
      />

      <Card
        title="Palmeiras 1914"
        img={PosterImg}
        p="Quando surge o Alviverde imponente
        No gramado em que a luta o aguarda
        Sabe bem o que vem pela frente
        Que a dureza do prélio não tarda
        
        E o Palmeiras no ardor da partida
        Transformando a lealdade em padrão
        Sabe sempre levar de vencida
        E mostrar que de fato é campeão
        
        Defesa que ninguém passa
        Linha atacante de raça
        Torcida que canta e vibra (2x)
        
        Por nosso Alviverde inteiro
        Que sabe ser brasileiro
        Ostentando a sua fibra"
        textButton="comprar"
      />
    </>
  );
}

export default App;
