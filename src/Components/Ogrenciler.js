import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ogrenciler extends Component {
  render() {
    return (
      <div>
        <p>
          <b>Öğrenciler</b>
        </p>
          Ad : <input id="txtOgrenciAd" type="text" onChange={this.props.degistirOgrenciAdi} />
        <br />
          Soyad : <input id="txtOgrenciSoyad" type="text" onChange={this.props.degistirOgrenciSoyadi} />
        <br />
         sinif : <input id="txtSinif" type="text" onChange={this.props.degistirOgrenciSinif} />
        <br />
        <button onClick={this.props.ekleOgrenci}>Ekle</button>
        <br />
        <ul>
          {this.props.ogrenciler.map(ogrenci => {
            const key = ogrenci.ogrenciAd + ogrenci.ogrenciSoyad+ogrenci.ogrenciSinif;
            return <ol key={key}>{ogrenci.ogrenciAd} {ogrenci.ogrenciSoyad}{ogrenci.ogrenciSinif}</ol>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ogrenciAd: state.ogrenciReducer.ogrenciAd,
    ogrenciSoyad: state.ogrenciReducer.ogrenciSoyad,
    ogrenciSinif:state.ogrenciReducer.ogrenciSinif,
    ogrenciler: state.ogrenciReducer.ogrenciler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    degistirOgrenciAdi: ad => {
      dispatch({ type: 'OGRENCI.DEGISTIR_AD', payload: { ogrenciAd: document.getElementById('txtOgrenciAd').value } });
    },
    degistirOgrenciSoyadi: ad => {
      dispatch({
        type: 'OGRENCI.DEGISTIR_SOYAD',
        payload: { ogrenciSoyad: document.getElementById('txtOgrenciSoyad').value }
      });
    },

    degistirOgrenciSinif:ad=>{
      dispatch({
        type: 'OGRENCI.DEGISTIR_SINIF',
        payload: { ogrenciSinif: document.getElementById('txtSinif').value }
      });
    },
    ekleOgrenci: () => {
      dispatch({ type: 'OGRENCI.EKLE' });
    }
  };
};

const OgrencilerConnected = connect(mapStateToProps, mapDispatchToProps)(Ogrenciler);

export default OgrencilerConnected;