import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import DateIcon from 'material-ui/svg-icons/action/date-range'
import TimeIcon from 'material-ui/svg-icons/action/schedule'
import CarIcon from '../../components/Veiculo/veiculo_branco.png'
import CadeiranteIcon from '../../components/LiftMgt/cadeirante_branco.png'
import SmokingIcon from '../../components/LiftMgt/fumante_branco.png'
import MusicIcon from '../../components/LiftMgt/musica_branco.png'
import styles from './styles'

class Oferecer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chegada: '',
      saida: '',
    };
  }

  handleChegada = (event, date) => {
    this.setState({chegada: date})
  };

  handleSaida = (event, date) => {
    this.setState({saida: date})
  };

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {

    const now = new Date()

    return (
      <div className="pageBase">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form-group">
            <div className="row" style={{padding: '2em 0', margin: '0 1px', borderBottom: '2px solid grey'}}>
              <div className="col-6">
                <div style={styles.box}>
                  DIA
                  <DatePicker
                    disableYearSelection={true}
                    minDate={new Date()}
                    maxDate={new Date(now.setMonth(now.getMonth() + 1))}
                    formatDate={date => date.toLocaleDateString('pt-BR')}
                    textFieldStyle={styles.date}
                    className="datePicker"
                    hintText=" "
                  />
                  <DateIcon style={styles.icons}/>
                </div>
              </div>
              <div className="col-6">
                <div style={styles.box}>
                  HORA
                  <TimePicker
                    format="24hr"
                    okLabel="Confirmar"
                    cancelLabel="Cancelar"
                    value={this.state.SAIDA}
                    onChange={this.handleSaida}
                    textFieldStyle={styles.time}
                    className="timePicker"
                    hintText=" "
                  />
                  <TimeIcon style={styles.icons}/>
                </div>
              </div>
            </div>
            <div style={{paddingBottom: '2em', margin: '0 1px', borderBottom: '2px solid grey'}}>
                <center>
                <div style={styles.title}>VOCÊ VAI...</div>
                <div className="btn-group btn-group-toggle form-control" data-toggle="buttons" style={{border: 'none'}}>
                  <label className="btn loginBtn" style={styles.buttonL}>
                    <input type="radio" id="opt1" autoComplete="off" style={{position: 'absolute', display: 'none'}}/>
                    <div>IR À FATEC</div>
                  </label>
                  <label className="btn loginBtn" style={styles.buttonR}>
                    <input type="radio" id="opt1" autoComplete="off" style={{position: 'absolute', display: 'none'}}/>
                    <div>SAIR DA FATEC</div>
                  </label>
                </div>
                </center>
            </div>
            <div style={{paddingBottom: '2em', margin: '0 1px', borderBottom: '2px solid grey'}}>
              <center style={styles.title}>VEÍCULO</center>
              <div  className="btn-group btn-group-toggle form-control" data-toggle="buttons" style={{border: 'none'}}>
                <center className="col-6">
                    <label className="btn loginBtn active" style={styles.carBtn}>
                      <input type="radio" id="opt1" autoComplete="off" defaultChecked style={{position: 'absolute', display: 'none'}}/>
                      <img style={{width: '3.5em', height: '1.5em', margin:'0'}} src={CarIcon} alt={"Car Logo"}/>
                    </label>
                    <div>GHJ-8930</div>
                </center>
                <center className="col-6">
                    <label className="btn loginBtn" style={styles.carBtn}>
                      <input type="radio" id="opt2" autoComplete="off" style={{position: 'absolute', display: 'none'}}/>
                      <img style={{width: '3.5em', height: '1.5em', margin:'0'}} src={CarIcon} alt={"Car Logo"}/>
                    </label>
                    <div>YUJ-7381</div>
                </center>
              </div>
            </div>
            <div style={{paddingBottom: '2em', margin: '0 1px', borderBottom: '2px solid grey'}}>
              <center>
                <div style={styles.title}>TRAJETO</div>
                <select className="form-control" defaultValue="default">
                  <option value="default">Selecione...</option>
                  <option>Trajeto1</option>
                </select>
              </center>
            </div>
            <center>
              <div style={styles.title}>SELECIONE A COMODIDADE DA CARONA</div>
              <div  className="row btn-group-toggle" data-toggle="buttons">
                <center className="col-4">
                    <label className="btn loginBtn" style={styles.iconBG}>
                      <input type="checkbox" style={{position: 'absolute', display: 'none'}}/>
                      <img src={CadeiranteIcon} alt={"Cadeirante Icon"} style={styles.prefIcons}/>
                    </label>
                    <div>Acomodação de Deficientes</div>
                </center>
                <center className="col-4">
                    <label className="btn loginBtn" style={styles.iconBG}>
                      <input type="checkbox" style={{position: 'absolute', display: 'none'}}/>
                      <img src={SmokingIcon} alt={"Fumante Icon"} style={styles.prefIcons}/>
                    </label>
                    <div>Aceitação de Fumantes</div>
                </center>
                <center className="col-4">
                    <label className="btn loginBtn" style={styles.iconBG}>
                      <input type="checkbox" style={{position: 'absolute', display: 'none'}}/>
                      <img src={MusicIcon} alt={"Music Icon"} style={styles.prefIcons}/>
                    </label>
                    <div>Ouvintes de Muita Música</div>
                </center>
              </div>
            </center>
            <input type="submit" value="Confirmar" className="btn loginBtn form-control" style={styles.button}/>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(store => {
  return {
    user: store.user.user,
    userData: store.user.userData
  }
})(Oferecer)
