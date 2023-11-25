import React, { useEffect, useState } from 'react';

import { useGameStore } from '../Components/Torneo/hooks.ts';
const Tournament = () => {
  const [group, setGroup] = useState(0);
  const { torneo, updateGames } = useGameStore();
  const [tournament, setTournament] = useState(torneo);
  const handleChange = (e, index) => {
    tournament.groups[group].games[index][e.target.name] = +e.target.value;
    let playerName =
      e.target.name === 'leftScore'
        ? tournament.groups[group].games[index].left.name
        : tournament.groups[group].games[index].right.name;
    for (let i = 0; i < tournament.groups[group].players.length; i++) {
      if (tournament.groups[group].players[i].name === playerName) {
        tournament.groups[group].players[i].win = calculateWin(playerName);
        tournament.groups[group].players[i].lose = calculateLose(playerName);
      }
    }
    setTournament({ ...tournament });
    updateGames(tournament);
  };
  const calculateWin = (name) => {
    return tournament?.groups[group]?.games?.reduce((pv, cv) => {
      if (cv.left.name === name) return pv + cv.leftScore;
      if (cv.right.name === name) return pv + cv.rightScore;
      return pv;
    }, 0);
  };
  const calculateLose = (name) => {
    return tournament?.groups[group]?.games?.reduce((pv, cv) => {
      if (cv.left.name === name) return pv + cv.rightScore;
      if (cv.right.name === name) return pv + cv.leftScore;
      return pv;
    }, 0);
  };
  useEffect(() => {
    setTournament(tournament);
    setGroup(group);
  }, [tournament]);

  return (
    <div className="tournament">
      <>
        <div className="jugadores-flex">
          {tournament.groups[group]?.players
            .sort((b, a) => {
              return a.win - a.lose - (b.win - b.lose);
            })
            .map((jug) => (
              <>
                <div className="duplas">
                  <div className="box-score-duplas">
                    <h2>{jug.name} </h2>
                    <p className="r-left-ganados">{jug.win}</p>
                    <p className="l-right-perdido">{jug.lose}</p>
                  </div>
                  <p className="jugadores">{jug.jugador1}</p>
                  <p className="jugadores">{jug.jugador2} </p>
                </div>
              </>
            ))}
        </div>

        <div
          style={{
            position: 'absolute',
            left: '45%',
            top: '10%',
          }}
        >
          {tournament.groups[group]?.games.map((juegos, index) => (
            <>
              <div className="dupla-score">
                <h2>{juegos.left.name}</h2>
                <input
                  type="number"
                  onChange={(e) => handleChange(e, index)}
                  value={juegos.leftScore}
                  className="input-left"
                  name="leftScore"
                />
                <input
                  type="number"
                  onChange={(e) => handleChange(e, index)}
                  value={juegos.rightScore}
                  className="input-right"
                  name="rightScore"
                />
                <h2>{juegos.right.name}</h2>
              </div>
            </>
          ))}
        </div>
      </>
      {tournament.groupCount}
    </div>
  );
};

export default Tournament;
