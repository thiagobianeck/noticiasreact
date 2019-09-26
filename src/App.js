import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=1062684949534e0eaa7cc8387a10dd3e`;
    const resposta = await fetch(url);
    const noticias = await resposta.json();

    this.setState({
      noticias: noticias.articles
    });
  }

  render() {
    return (
        <Fragment>
          <Header titulo='Noticias React API'/>
          <div className='container white contenedor-noticias'>
            <ListaNoticias noticias={this.state.noticias}/>
          </div>
        </Fragment>
    );
  }

}
export default App;
