const initialState = {
    dersAd: '',
    dersOgretmen: '',
    dersSinif:'',    
    dersler: []
  };
  
  export const dersReducer = function(state = initialState, action) {
    switch (action.type) {
      case 'DERS.DEGISTIR_AD':
        const ad = Object.assign({}, state, { dersAd: action.payload.dersAd });
        return ad;
      case 'DERS.DEGISTIR_OGRETMEN':
        const ogretmen = Object.assign({}, state, { dersOgretmen: action.payload.dersOgretmen });
        return ogretmen;

        case 'DERS.SINIF':
        const sinif = Object.assign({}, state, { dersSinif: action.payload.dersSinif });
        return sinif;
        
      case 'DERS.EKLE':
        const yeniDers = { dersAd: state.dersAd, dersOgretmen: state.dersOgretmen,dersSinif:state.dersSinif};
        const yeniListe = [...state.dersler, yeniDers];
        const liste = Object.assign({}, state, { dersler: yeniListe });
        return liste;
  
      default:
        return state;
    }
  };
  