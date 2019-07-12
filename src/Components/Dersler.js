import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dersler extends Component {
  render() {
    return (
      <div>
        <p>
          <b>Dersler</b>
        </p>
          DersAdi : <input id="txtDersAd" type="text" onChange={this.props.degistirDersAd} />
        <br />
          Ogretmen : <input id="txtOgretmen" type="text" onChange={this.props.degistirOgretmen} />
        <br />
         sinif : <input id="txtSinif" type="text" onChange={this.props.degistirSinif} />
        <br />
        <button color="red" onClick={this.props.dersEkle}>Ekle</button>
        <br />
        <ul>
          {this.props.dersler.map(ders => {
            const key = ders.dersAd + ders.dersOgretmen+ders.dersSinif;
            return <ol key={key}>{ders.dersAd} {ders.dersOgretmen}{ders.dersSinif}</ol>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dersAd: state.dersReducer.dersAd,
    dersOgretmen: state.dersReducer.dersOgretmen,
    dersSinif:state.dersReducer.dersSinif,
    dersler: state.dersReducer.dersler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    degistirDersAd: ad => {
      dispatch({ type: 'DERS.DEGISTIR_AD', payload: { dersAd: document.getElementById('txtDersAd').value } });
    },
    degistirOgretmen: ad => {
      dispatch({
        type: 'DERS.DEGISTIR_OGRETMEN',
        payload: { dersOgretmen: document.getElementById('txtOgretmen').value }
      });
    },

    degistirSinif:ad=>{
      dispatch({
        type: 'DERS.SINIF',
        payload: { ogrenciSinif: document.getElementById('txtSinif').value }
      });
    },
    dersEkle: () => {
      dispatch({ type: 'DERS.EKLE' });
    }
  };
};

const derslerConnected = connect(mapStateToProps, mapDispatchToProps)(Dersler);

export default derslerConnected;