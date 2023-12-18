import React, { useEffect, useState } from 'react';
import vs from '../Assets/IconVS.png';
import { useGameStore } from '../Components/Torneo/hooks.ts';

const Semifinal = () => {
  const { torneo } = useGameStore();
  const [semiFinal, setSemiFinal] = useState(torneo);
  const [players, setPlayers] = useState([]);
  const [finalistasA, setFinalistasA] = useState([]);
  const [finalistasB, setFinalistasB] = useState([]);

  const semiFinals = (index) => {
    if (semiFinal.groups[0].players[0].win >= 10) {
      if (semiFinal.groups[0].players[1].win >= 10) {
        let semi1 = semiFinal?.groups[0].players[0];
        let semi2 = semiFinal?.groups[0].players[1];
        setFinalistasA([semi1, semi2]);
        if (
          semiFinal.groups[0].players[0].win ||
          semiFinal.groups[0].players[1].win
        ) {
          semiFinal.groups[0].players[0].win = 0;
          semiFinal.groups[0].players[0].lose = 0;
          semiFinal.groups[0].players[1].win = 0;
          semiFinal.groups[0].players[1].lose = 0;
          return;
        }
        console.log('Grupo A', finalistasA);
      }
    } else {
      console.log('no');
    }
    if (semiFinal.groups[1].players[0].win >= 10) {
      if (semiFinal.groups[1].players[1].win >= 10) {
        let semi1 = semiFinal.groups[1].players[0];
        let semi2 = semiFinal.groups[1].players[1];
        setFinalistasB([semi1, semi2]);
        if (
          semiFinal.groups[1].players[0].win ||
          semiFinal.groups[1].players[1].win
        ) {
          semiFinal.groups[1].players[0].win = 0;
          semiFinal.groups[1].players[0].lose = 0;

          semiFinal.groups[1].players[1].win = 0;
          semiFinal.groups[1].players[1].lose = 0;
          return;
        }
        console.log('finalistas B ', finalistasB);
      }
    } else {
      console.log('no');
    }
  };
  console.log();
  useEffect(() => {
    setSemiFinal(semiFinal);
    setPlayers(players);
    semiFinals();
  }, []);
  useEffect(() => {
    console.log('finalistasA :>> ', finalistasA);
    console.log('finalistasB :>> ', finalistasB);
  }, [finalistasA, finalistasB]);

  return (
    <div>
      <div className="container-semifinalistas">
        <div className="">
          <h2 className="title-semi">Semifinalistas</h2>
        </div>
        <div className="game-semifinal">
          <div className="container-players-semi">
            {finalistasA.map((jug) => (
              <div className="players-semifinalistas-A">
                <div className="dupla-semi">
                <div className="win-lose">
                    <p>Win</p>
                    <p>Lose</p>
                  </div>
                    <div className="win-lose-playersemi">
                      <p>{jug.win}</p>
                      <p>{jug.lose}</p>
                    </div>
                  <h2>{jug.jugador1}</h2>
                  <h2>{jug.jugador2}</h2>
                </div>
                <input type="text" name="leftScore" value={0} />
              </div>
            ))}
          </div>
          <div className="img-vs-semi">
            <img src={vs} />
          </div>
          <div className="container-players-semi">
            {finalistasB.map((jug) => (
              <div className="player-semifinalistas-B">
                <div className="dupla-semi">
                  <div className="win-lose">
                    <p>Win</p>
                    <p>Lose</p>
                  </div>
                  <div className="win-lose-playersemi">
                      <p>{jug.win}</p>
                      <p>{jug.lose}</p>
                    </div>
                  <h2>{jug.jugador1}</h2>
                  <h2>{jug.jugador2}</h2>
                </div>
                <input type="text" name="righScore" value={0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semifinal;
