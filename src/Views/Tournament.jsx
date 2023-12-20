import React, { useEffect, useState } from 'react';
import { useGameStore } from '../Components/Torneo/hooks.ts';
import { Link } from 'react-router-dom';
const Tournament = () => {
  const [group, setGroup] = useState(0);
  const [group1, setGroup1] = useState(1);
  /*  const [group2, setGroup2] = useState(2); */
  const [open, setOpen] = useState(false);
  const [openTablePositions, setOpenTablePositions] = useState(false);
  const [render, setRender] = useState(Number);
  const { torneo, updateGames } = useGameStore();
  const [tournament, setTournament] = useState(torneo);

  const handleChange = (e, index) => {
    tournament.groups[group].games[index][e.target.name] = +e.target.value;
    let playerScore =
      e.target.name === 'leftScore'
        ? tournament.groups[group].games[index].right.name &&
          tournament.groups[group].games[index].left.name
        : tournament.groups[group].games[index].left.name ||
          tournament.groups[group].games[index].right.name;
    let playerRight =
      e.target.name === 'rightScore'
        ? tournament.groups[group].games[index].right.name
        : tournament.groups[group].games[index].left.name;

    for (let i = 0; i < tournament.groups[group].players.length; i++) {
      if (tournament.groups[group].players[i].name === playerScore) {
        tournament.groups[group].players[i].win = calculateWin(playerScore);
        tournament.groups[group].players[i].lose = calculateLose(playerScore);
      }
      if (tournament.groups[group].players[i].name === playerRight) {
        tournament.groups[group].players[i].win = calculateWin(playerRight);
        tournament.groups[group].players[i].lose = calculateLose(playerRight);
      }
    }

    if (playerScore) {
      calculatePts();
    }
    setTournament({ ...tournament });
    updateGames(tournament);
  };

  const calculatePts = () => {
    for (let i = 0; i < tournament.groups[group].players.length; i++) {
      let grupoA = [tournament.groups[group].players[i]];
      grupoA.push([i]);
      let respuestaGroupsA = grupoA[0].win - grupoA[0].lose;
      console.log((grupoA[0].res = respuestaGroupsA));

      console.log(grupoA);
    }
    for (let i = 0; i < tournament.groups[group1].players.length; i++) {
      let grupoB = [tournament.groups[group1].players[i]];
      grupoB.push([i]);
      let respuestaGroupsB = grupoB[0].win - grupoB[0].lose;
      console.log((grupoB[0].res = respuestaGroupsB));
    }
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
      if (cv.right.name === name) return pv + cv.leftScore;
      if (cv.left.name === name) return pv + cv.rightScore;
      return pv;
    }, 0);
  };

  const handleChange2 = (e, index) => {
    tournament.groups[group1].games[index][e.target.name] = +e.target.value;
    let playerName =
      e.target.name === 'leftScore'
        ? tournament.groups[group1].games[index].right.jugador1 &&
          tournament.groups[group1].games[index].right.jugador2
        : tournament.groups[group1].games[index].left.jugador1 &&
          tournament.groups[group1].games[index].left.jugador2;

    for (let i = 0; i < tournament.groups[group1].players.length; i++) {
      if (
        tournament.groups[group1].players[i].jugador1 &&
        tournament.groups[group1].players[i].jugador2 === playerName
      ) {
        tournament.groups[group1].players[i].win =
          calulateWinGroup1(playerName);
        tournament.groups[group1].players[i].lose =
          calulateLoseGroup1(playerName);
      }
    }
    setTournament({ ...tournament });
    updateGames(tournament);
  };

  const calulateWinGroup1 = (jugadores) => {
    return tournament?.groups[group1]?.games?.reduce((pv, cv) => {
      if (cv.left.jugador1 && cv.left.jugador2 === jugadores)
        return pv + cv.leftScore;
      if (cv.right.jugador1 && cv.right.jugador2 === jugadores)
        return pv + cv.rightScore;
      return pv;
    }, 0);
  };

  const calulateLoseGroup1 = (jugadores) => {
    return tournament?.groups[group1]?.games?.reduce((pv, cv) => {
      if (cv.left.jugador1 && cv.left.jugador2 === jugadores)
        return pv + cv.rightScore;
      if (cv.right.jugador1 && cv.right.jugador2 === jugadores)
        return pv + cv.leftScore;
      return pv;
    }, 0);
  };

  const positionTable = () => {
    setOpenTablePositions(!openTablePositions);
    console.log('Abriendo');
  };

  /* const semiFinal = () =>{
  if (tournament.groups[group].players[0].win >= 18) {
    console.log("si");
    if (tournament.groups[group].players[1].win >= 16) {
      console.log("tambien");
    }else{
      console.log("tampoco ha cali");    
    }
  }else{
    console.log("no ha sido clafisicado");
  }
} */
  /*   const semi = () =>{
    let semiFinal = tournament?.groups[group]?.players[0]
    setPlayersSemi(semiFinal) 
    console.log(playersSemi);
  } */

  /*   const handleChange3 = (e, index) => {
    tournament.groups[group2].games[index][e.target.name] = +e.target.value;
    let playerName =
      e.target.name === 'leftScore'
        ? tournament.groups[group2].games[index].left.jugador1 &&
          tournament.groups[group2].games[index].left.jugador2
        : tournament.groups[group2].games[index].right.jugador1 &&
          tournament.groups[group2].games[index].right.jugador2;

    for (let i = 0; i < tournament.groups[group2].players.length; i++) {
      if (
        tournament.groups[group2].players[i].jugador1 &&
        tournament.groups[group2].players[i].jugador2 === playerName
      ) {
        tournament.groups[group2].players[i].win = calculateWinGroups2(playerName);
        tournament.groups[group2].players[i].lose = calculateLoseGroups2(playerName);
      }
    }
    setTournament({...tournament})
    updateGames(tournament)
  };

  const calculateWinGroups2 = (jugadores) => {
    return tournament?.groups[group2]?.games?.reduce((pv, cv) => {
      if (cv.left.jugador1 && cv.left.jugador2 === jugadores) 
        return pv + cv.leftScore;
      
      if (cv.right.jugador1 && cv.right.jugador2 === jugadores) 
        return pv + cv.rightScore;
      return pv
    }, 0);
  };
  const calculateLoseGroups2 = (jugadores) => {
    return tournament?.groups[group2]?.games?.reduce((pv, cv) => {
      if (cv.left.jugador1 && cv.left.jugador2 === jugadores) 
        return pv + cv.rightScore;
      if (cv.right.jugador1 && cv.right.jugador2 === jugadores) 
        return pv + cv.leftScore;
      return pv
    }, 0);
  };
 */
  const changedGroup = () => {
    return setRender(group);
  };

  const changedGroup2 = () => {
    return setRender(group1);
  };

  /*   const changedGroup3 = () => {
    setRender(group2);
    console.log('group2 :>> ', group2);
  }; */

  const sideVar = () => {
    setOpen(!open);
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'initial';
    }
  };

  useEffect(() => {
    setTournament(tournament);
    setGroup(group);
    setGroup1(group1);
    /*    calculatePts() */
    /* setGroup2(group2); */
    /* setbuttomRender() */
  }, [tournament]);

  useEffect(() => {
    console.log(' render:>> ', render);
  }, [render]);

  return (
    <div className="container-tournament">
      <div className="groups_games">
        <button onClick={changedGroup} className="button-groups">
          Grupo A
        </button>
        <button onClick={changedGroup2} className="button-groups">
          Grupo B
        </button>
        <button onClick={positionTable}>Tabla de Posiciones</button>
        {/* <button  className="button-groups">
        <Link to={'/semi'}>
          Ver Semi
        </Link>
        </button> */}
        {/*  <button onClick={semi} className="button-groups">
          Semi
        </button */}
        {/*  <button onClick={changedGroup3} className="button-groups">
          Grupo C
        </button> */}
      </div>
      <h1 className="separador-responsive separador"></h1>
      {/* if(render == 1 || render == 2  && render == 3){

} */}

      <div>
        <button className="button-side" onClick={() => sideVar()}>
          Duplas
        </button>
      </div>
      {openTablePositions && (
        <div className="container-position-table">
          {tournament.groups[group].players.map((player, index) => (
              <div>
            <div key={index} className="box-table-position">

              <div className="position-table">
                <div className="position-dupla">
                  <h1>{player.name}</h1>
                  <p>{player.jugador1}</p>
                  <p>{player.jugador2}</p>
                </div>
                <p>{player.win}</p>
                <p>{player.lose}</p>
                <p>{player.res}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="tournament">
        {render == 0 && (
          <>
            <div>
              <div
                className={
                  open ? 'jugadores-open flex-on' : 'jugadores-flex flex-off'
                }
              >
                {tournament.groups[group]?.players
                  .sort((b, a) => {
                    return a.win - a.lose - (b.win - b.lose);
                  })
                  .map((jug) => (
                    <>
                      <div className="duplas">
                        <div className="win-lose">
                          <p>Win</p>
                          <p>Lose</p>
                          <p>Pts</p>
                        </div>
                        <div className="box-score-duplas">
                          {/* <h2>{jug.name} </h2> */}
                          <p className="r-left-ganados">{jug.win}</p>
                          <p className="l-right-perdido">{jug.lose}</p>
                          {jug.res > 0 ? (
                            <>
                              <p className="pts-res">
                                <span className="span-suma">+</span>
                                {jug.res}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="pts-res">{jug.res}</p>
                            </>
                          )}
                        </div>
                        <p className="jugadores">{jug.jugador1}</p>
                        <p className="jugadores">{jug.jugador2} </p>
                      </div>
                    </>
                  ))}
              </div>
            </div>

            <div className="games-players-score">
              <h3 className="group-tor">Grupo A</h3>
              {tournament.groups[group]?.games.map((juegos, index) => (
                <>
                  <div className="dupla-score">
                    <div className="players-duplas">
                      <h2 className="players-color">{juegos.left.jugador1}</h2>
                      <h2 className="players2-color">{juegos.left.jugador2}</h2>
                    </div>
                    <input
                      type="text"
                      onChange={(e) => handleChange(e, index)}
                      value={juegos.leftScore}
                      className="input-left"
                      name="leftScore"
                    />

                    <Link to={`/score/${juegos.id}`}>
                      <button className="look-game">Ver Juego</button>
                    </Link>

                    <input
                      type="text"
                      onChange={(e) => handleChange(e, index)}
                      value={juegos.rightScore}
                      className="input-right"
                      name="rightScore"
                    />

                    <div className="players-duplas">
                      <h2 className="players-right-color">
                        {juegos.right.jugador1}
                      </h2>
                      <h2 className="players-color">{juegos.right.jugador2}</h2>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
        {render == 1 && (
          <>
            <div
              className={
                open ? 'jugadores-open flex-on' : 'jugadores-flex flex-off'
              }
            >
              {tournament.groups[group1]?.players
                .sort((b, a) => {
                  return a.win - a.lose - (b.win - b.lose);
                })
                .map((jug) => (
                  <>
                    <div className="duplas">
                      <div className="win-lose">
                        <p>Win</p>
                        <p>Lose</p>
                        <p>Pts</p>
                      </div>
                      <div className="box-score-duplas">
                        {/* <h2>{jug.name} </h2> */}
                        <p className="r-left-ganados">{jug.win}</p>
                        <p className="l-right-perdido">{jug.lose}</p>
                        {jug.res > 0 ? (
                          <>
                            <p className="pts-res">
                              <span className="span-suma">+</span>
                              {jug.res}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="pts-res">{jug.res}</p>
                          </>
                        )}
                      </div>
                      <p className="jugadores">{jug.jugador1}</p>
                      <p className="jugadores">{jug.jugador2} </p>
                    </div>
                  </>
                ))}
            </div>

            <div className="games-players-score">
              <h3 className="group-tor">Grupo B</h3>
              {tournament.groups[group1]?.games.map((juegos, index) => (
                <>
                  <div className="dupla-score">
                    <div className="players-duplas">
                      <h2 className="players-color">{juegos.left.jugador1}</h2>
                      <h2 className="players2-color">{juegos.left.jugador2}</h2>
                    </div>
                    <input
                      type="text"
                      onChange={(e) => handleChange2(e, index)}
                      value={juegos.leftScore}
                      className="input-left"
                      name="leftScore"
                    />

                    <Link to={`/score/${juegos.id}`}>
                      <button className="look-game">Ver Juego</button>
                    </Link>

                    <input
                      type="text"
                      onChange={(e) => handleChange2(e, index)}
                      value={juegos.rightScore}
                      className="input-right"
                      name="rightScore"
                    />

                    <div className="players-duplas">
                      <h2 className="players-right-color">
                        {juegos.right.jugador1}
                      </h2>
                      <h2 className="players-color">{juegos.right.jugador2}</h2>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )}

        {/* {render == 2 && (
          <>
            <div
              className={
                open ? 'jugadores-open flex-on' : 'jugadores-flex flex-off'
              }
            >
              {tournament.groups[group2]?.players
                .sort((b, a) => {
                  return a.win - a.lose - (b.win - b.lose);
                })
                .map((jug) => (
                  <>
                    <div className="duplas">
                      <div className="win-lose">
                        <p>Win</p>
                        <p>Lose</p>
                      </div>
                      <div className="box-score-duplas">
                       
                        <p className="r-left-ganados">{jug.win}</p>
                        <p className="l-right-perdido">{jug.lose}</p>
                      </div>
                      <p className="jugadores">{jug.jugador1}</p>
                      <p className="jugadores">{jug.jugador2} </p>
                    </div>
                  </>
                ))}
            </div>

            <div className="games-players-score">
              <h3 className="group-tor">Grupo C</h3>
              {tournament.groups[group2]?.games.map((juegos, index) => (
                <>
                  <div className="dupla-score">
                    <div className="dupla-left">
                      <h2 className="players-color">{juegos.left.jugador1}</h2>
                      <h2 className="players2-color">{juegos.left.jugador2}</h2>
                    </div>
                    <input
                      type="text"
                      onChange={(e) => handleChange3(e, index)}
                      value={juegos.leftScore}
                      className="input-left"
                      name="leftScore"
                    />

                    <Link to={`/score/${juegos.id}`}>
                      <button className="look-game">Ver Juego</button>
                    </Link>

                    <input
                      type="text"
                      onChange={(e) => handleChange3(e, index)}
                      value={juegos.rightScore}
                      className="input-right"
                      name="rightScore"
                    />

                    <div className="dupla-right">
                      <h2 className="players-color">{juegos.right.jugador1}</h2>
                      <h2 className="players2-right-color">
                        {juegos.right.jugador2}
                      </h2>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )} */}
      </div>
    </div>
  );
};

export default Tournament;
