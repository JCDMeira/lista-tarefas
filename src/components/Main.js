import React, { Component } from 'react';

import './Main.css';

// # Form
// eslint-disable-next-line
import { FaPlus } from 'react-icons/fa';

// # Tarefas
// eslint-disable-next-line
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Beber água',
      'Esturdar',
    ],
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     novaTarefa: '',
  //   };

  //   this.inputMudou = this.inputMudou.bind(this);
  // }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  // inputMudou(e) {
  //   this.setState({
  //     novaTarefa: e.target.value,
  //   });
  // }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">

        <h1> Lista de tarefas </h1>
        <p>{novaTarefa}</p>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
