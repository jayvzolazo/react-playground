import React, { lazy, Suspense } from 'react';

import './Board.scss';

const Square = lazy(() => import('../Square/Square'));

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <Suspense>
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </Suspense>
    );
  }
}

export default Board;