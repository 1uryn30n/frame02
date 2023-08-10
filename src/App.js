import logo from './logo.svg'
import './App.css'
import { render } from '@testing-library/react'
import { Component } from 'react'

// Componentes baseados em estados são chamados de componentes stateful
// Componentes baseados em funções são chamados de componentes stateless
// function App() {}

class App extends Component {
  timeoutUptade: null

    state = {
      counter:0,

        posts: [     {
          id: 1,
          title: 'Título 1',
          body: 'Corpo 1'
      },
      {
          id: 2,
          title: 'Título 2',
          body: 'Corpo 2'
      },
      {
          id: 3,
          title: 'Título 3',
          body: 'Corpo 3'
      }]
    }
//essa funcção é executada apenas uma vez quando inicia
    componentDidMount() {
      this.handleTimeOut()
    }
// chamada em qualquer momento q houve alteração
    componentDidUpdate(){
      this.handleTimeOut()
    }
// sempre executa quando se utiliza o timeOut para continnuar contando 
    componentWillUnmount(){
      clearTimeout(this.timeoutUptade)
    }

    handleTimeOut = () => {
      const {posts, counter}= this.state;
      this.timeoutUptade = setTimeout(() => {
        posts[0].title = "O titulo mudou...";
        this.setState({
          posts, 
          counter:  counter +1
        })
    }, 1000)
  };


    render() {
        // Todos os estados precisam de uma função para alterá-los
        const { posts, counter } = this.state

        return (
            <div className="App">
              <h1>{counter}</h1>
                {/* se eu quero um retorno preciso colocar parênteses, se eu não quiser retorno, posso usar chaves */}
                {posts.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <h3>{post.body}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default App