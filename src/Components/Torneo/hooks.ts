import { create } from 'zustand';
class Group<T> implements GroupI<T> {
  games: GameI<T>[] = [];

  constructor(public players: T[]) {
    var id = 1;
    for (let i = 0; i < players.length - 1; i++) {
      for (let j = i + 1; j < players.length; j++) {
        this.games.push({
          id: '' + id,
          left: this.players[i],
          right: this.players[j],
          leftScore: 0,
          rightScore: 0,
        });
        id++;
      }
    }
      [this.games[1], this.games[5]] = [this.games[5], this.games[1]];
  }

  toString() {
    return JSON.stringify({
      players: this.players,
      games: this.games,
    });
  }
}

interface GameI<T> {
  id: string;
  left: T;
  right: T;
  leftScore: number;
  rightScore: number;
}

interface GroupI<T> {
  players: T[];
  games: GameI<T>[];
}

class Tournament<T> {
  groups: GroupI<T>[] = [];
  groupCount: number;

  constructor(L: T[], G: number, W: number) {
    let grp: T[][] = Array<T[]>(G);
    for (let i = 0; i < G; i++) {
      if (!grp[i]) grp[i] = [];
      grp[i].push(<T>L.shift());
    }
    for (let i = L.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [L[i], L[j]] = [L[j], L[i]];
    }
    let item: any;
    let i = 0;
    while ((item = L.shift())) {
      grp[i].push(item);
      i = (i + 1) % G;
    }
    grp.forEach((item) => this.groups.push(new Group(item)));
    this.groupCount = G;
  }
}

function getGroups<T>(L: T[], G: number, W: number) {
 /*  if (L.length != 8) throw 'Bad G&L'; */
  return new Tournament(L, G, W);
}

export const useGameStore = create((set) => ({
  torneo: JSON.parse(localStorage.getItem('Torneo') || '{}'),

  updateGames(data) {
    localStorage.setItem('Torneo', JSON.stringify(data));
  },

  createGames: (data) => {
    console.log('ok', data);

    if (data) {
      let torneo = getGroups(
        data.map((i) => i),
        3,
        12
      );
      set((state) => ({
        torneo,
      }));
      localStorage.setItem('Torneo', JSON.stringify(torneo));
      return { torneo };
    }
  },
}));
