class Chess {
  chessBoard: ChessBoard;
  players: Player[];
  currentPlayer: Player;
  movesList: Move[];
  gameStatus: GameStatus;

  constructor(
    chessBoard: ChessBoard,
    players: Player[],
    currentPlayer: Player,
    movesList: Move[],
    gameStatus: GameStatus
  ) {
    this.chessBoard = chessBoard;
    this.players = players;
    this.currentPlayer = currentPlayer;
    this.movesList = movesList;
    this.gameStatus = gameStatus;
  }

  playerMove(fromPosition: CellPosition, toPosition: CellPosition, piece: Piece): boolean {
    return false;
  }
  endGame(): boolean {
    return false;
  }
  private changeTurn(): void {}
}

class Player {
  account: Account;
  color: Color;
  timeLeft: Time;

  constructor(account: Account, color: Color, timeLeft: Time) {
    this.account = account;
    this.color = color;
    this.timeLeft = timeLeft;
  }
}

class Time {
  mins: number;
  secs: number;

  constructor(mins: number, secs: number) {
    this.mins = mins;
    this.secs = secs;
  }
}

enum Color {
  BLACK,
  WHITE,
}

class Account {
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;

  constructor(username: string, password: string, name: string, email: string, phone: string) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

enum GameStatus {
  ACTIVE,
  PAUSED,
  FORFEIT,
  BLACK_WIN,
  WHITE_WIN,
}

class ChessBoard {
  board: Cell[][];

  constructor(board: Cell[][]) {
    this.board = board;
  }

  resetBoard(): void {}
  updateBoard(move: Move): void {}
}

class Cell {
  color: Color;
  piece: Piece;
  position: CellPosition;

  constructor(color: Color, piece: Piece, position: CellPosition) {
    this.color = color;
    this.piece = piece;
    this.position = position;
  }
}

class CellPosition {
  ch: string;
  i: number;

  constructor(ch: string, i: number) {
    this.ch = ch;
    this.i = i;
  }
}

class Move {
  turn: Player;
  piece: Piece;
  killedPiece: Piece;
  startPosition: CellPosition;
  endPosition: CellPosition;

  constructor(
    turn: Player,
    piece: Piece,
    killedPiece: Piece,
    startPosition: CellPosition,
    endPosition: CellPosition
  ) {
    this.turn = turn;
    this.piece = piece;
    this.killedPiece = killedPiece;
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }
}

abstract class Piece {
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract move(fromPosition: CellPosition, toPosition: CellPosition): boolean;
  abstract possibleMoves(fromPosition: CellPosition): CellPosition[];
  abstract validate(fromPosition: CellPosition, toPosition: CellPosition): boolean;
}

class Knight extends Piece {
  constructor(color: Color) {
    super(color);
  }

  move(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
  possibleMoves(fromPosition: CellPosition): CellPosition[] {
    return [];
  }
  validate(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
}

class Bishop extends Piece {
  constructor(color: Color) {
    super(color);
  }

  move(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
  possibleMoves(fromPosition: CellPosition): CellPosition[] {
    return [];
  }
  validate(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
}

class Rook extends Piece {
  constructor(color: Color) {
    super(color);
  }

  move(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
  possibleMoves(fromPosition: CellPosition): CellPosition[] {
    return [];
  }
  validate(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
}

class King extends Piece {
  constructor(color: Color) {
    super(color);
  }

  move(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
  possibleMoves(fromPosition: CellPosition): CellPosition[] {
    return [];
  }
  validate(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
}

class Queen extends Piece {
  constructor(color: Color) {
    super(color);
  }

  move(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
  possibleMoves(fromPosition: CellPosition): CellPosition[] {
    return [];
  }
  validate(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
}

class Pawn extends Piece {
  constructor(color: Color) {
    super(color);
  }

  move(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
  possibleMoves(fromPosition: CellPosition): CellPosition[] {
    return [];
  }
  validate(fromPosition: CellPosition, toPosition: CellPosition): boolean {
    return false;
  }
}
