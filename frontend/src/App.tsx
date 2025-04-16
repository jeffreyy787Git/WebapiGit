import './App.css'
import { Layout, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'antd/dist/reset.css';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Article from './components/Articles';
import DetailArticle from './components/DetailArticle';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <>
      <Router>
        <Header>
          <nav>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/about">About</Link>
            </Space>
          </nav>
        </Header>
        <Content>
          <Routes>
            <Route index element={ <Home />} />
            <Route path="/articles" element= { <Article />}/>
            <Route path="/a/:aid" element={<DetailArticle />} />
            <Route path="/about" element={ <About />} />
            <Route path="/dashboard" element={ <Dashboard /> } />
          </Routes>
        </Content>
        <Footer>
          <p>VT6003CEM Demo</p>
        </Footer>
      </Router>
    </>
  )
}

export default App
