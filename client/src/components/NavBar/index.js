import React, { Component } from 'react'
import logo from './logo.ico'
import SideMenu from '../SideMenu'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserData } from '../../actions/userActions'

class NavBar extends Component {

  bindDrawer = f => {
    this.openDrawer = f;
  };

  render() {
    const { user, userData, menuItems } = this.props

    if (user.email !== undefined && userData.nome === undefined) {
      this.props.dispatch(setUserData(this.props.user.email.split('@')[0]));
    }

    return(
      <nav className="navbar navbar-expand-lg navbar-dark ftc" style={{position: 'fixed', width: '100%', height: '58px', top: 0, left: 0, zIndex: 100}}>
        <SideMenu callback={this.bindDrawer} handler={this.handleMenuSelect} menuItems={menuItems}/>
        <button style={{position: 'absolute', left: 0, border: 'none'}} className="navbar-toggler" type="button" onClick={() => this.openDrawer()}>
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="navbar-toggler" style={{color: '#fff', border: 'none', width: '100%', textAlign: 'center'}}>
            {menuItems.find(item => item.selected).text}
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand" to="/">
            <img className="App-logo" src={logo} width="30" height="30" alt=""/>{' '}Fatecarona
          </Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">Editar perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/caronas/request">Quero carona</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/caronas/offer">Oferecer carona</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rotas">Rotas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/caronas/historico">Minhas caronas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/veiculos">Meus veículos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={this.props.logOut}>LogOut</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(store => {
  return {
    user: store.user.user,
    userData: store.user.userData
  }
})(NavBar)
