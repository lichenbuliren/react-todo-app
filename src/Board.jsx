import { Components } from 'react';
import Square from './Square';

export default class Board extends Component {
  renderSquare(i) {
    return <Square value={i}/>
  }
  render() {
    const status = 'Next player: X';
    const squares = new Array(9);
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
        </div>
        <div className="board-row"></div>
        <div className="board-row"></div>
      </div>
    );
  }
}