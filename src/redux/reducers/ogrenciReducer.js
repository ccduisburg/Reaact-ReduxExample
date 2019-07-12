const initialState = {
    ogrenciAd: '',
    ogrenciSoyad: '',
    ogrenciSinif:'',    
    ogrenciler: []
  };
  
  export const ogrenciReducer = function(state = initialState, action) {
    switch (action.type) {
      case 'OGRENCI.DEGISTIR_AD':
        const ad = Object.assign({}, state, { ogrenciAd: action.payload.ogrenciAd });
        return ad;
      case 'OGRENCI.DEGISTIR_SOYAD':
        const soyad = Object.assign({}, state, { ogrenciSoyad: action.payload.ogrenciSoyad });
        return soyad;

        case 'OGRENCI.DEGISTIR_SINIF':
        const sinif = Object.assign({}, state, { ogrenciSinif: action.payload.ogrenciSinif });
        return sinif;
        
      case 'OGRENCI.EKLE':
        const yeniOgrenci = { ogrenciAd: state.ogrenciAd, ogrenciSoyad: state.ogrenciSoyad, ogrenciSinif: state.ogrenciSinif};
        const yeniListe = [...state.ogrenciler, yeniOgrenci];
        const liste = Object.assign({}, state, { ogrenciler: yeniListe });
        return liste;
  
      default:
        return state;
    }
  };
  