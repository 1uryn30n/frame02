import logo from './logo.svg'
import './App.css'
import { render } from '@testing-library/react'
import { Component } from 'react'

// Componentes baseados em estados são chamados de componentes stateful
// Componentes baseados em funções são chamados de componentes stateless
// function App() {}

class App extends Component {

    state = {
        posts: []
    }
//essa funcção é executada apenas uma vez quando inicia
    componentDidMount() {
      this.loadPost()
    }

    loadPost = async () => {
      const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts")

      const [posts] = await Promise.all([postsResponse])

      const postsJson = await posts.json() 

      this.setState({ posts: postsJson })
    }

    render() {
        // Todos os estados precisam de uma função para alterá-los
        const { posts } = this.state

        return (
          <section class="container">
            <div className="posts">
                {/* se eu quero um retorno preciso colocar parênteses, se eu não quiser retorno, posso usar chaves */}
                {posts.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <h3>{post.body}</h3>
                    </div>
                ))}
            </div>
            </section>
        )
    }
}

export default App