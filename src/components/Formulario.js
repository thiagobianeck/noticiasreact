import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component{
  state = {
    categoria: ''
  }

  componentDidMount() {
    this.setState({
      categoria: 'general'
    });
  }

  modificarCategoria = (e) => {
    this.setState({
      categoria: e.target.value
    }, () => {
      this.props.consultarNoticias(this.state.categoria);
    });

  }

  render() {
    return (
        <div className='buscador row'>
          <div className='col s12 m8 offset-m2'>
            <form>
              <h2>Encontre as notícias por categoria</h2>
              <div className="input-field col s12 m8 offset-m2">
                <select
                  onChange={this.modificarCategoria}
                >
                  <option value='general'>Geral</option>
                  <option value='business'>Negócios</option>
                  <option value='entertainment'>Entretenimento</option>
                  <option value='health'>Saúde</option>
                  <option value='science'>Ciência</option>
                  <option value='sports'>Esportes</option>
                  <option value='technology'>Tecnologia</option>
                </select>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

Formulario.propTypes = {
  consultarNoticias: PropTypes.func.isRequired
};

export default Formulario;

