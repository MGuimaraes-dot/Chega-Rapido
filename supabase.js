const SUPABASE_URL = 'SUA_URL_DO_SUPABASE';
const SUPABASE_ANON_KEY = 'SUA_CHAVE_ANON_DO_SUPABASE';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function soNumeros(v) {
  return (v || '').replace(/\D/g, '');
}

function getLoja() {
  try {
    return JSON.parse(localStorage.getItem('loja'));
  } catch (e) {
    return null;
  }
}

function getMotoboy() {
  try {
    return JSON.parse(localStorage.getItem('motoboy'));
  } catch (e) {
    return null;
  }
}

// Regra Financeira EntreAqui (Normal, Chuva, Pico e Combo)
function calcularValoresFrete(km, chovendo = false, pico = false, ehCombo = false) {
  if (ehCombo) {
    // Combo: Motoboy ganha +R$ 5,00 na segunda entrega da mesma loja, Loja paga R$ 7,00 (Margem R$ 2,00 mantida)
    return {
      valorMotoboy: 5.00,
      valorLoja: 7.00
    };
  }

  let baseMotoboy = km <= 5 ? 7.00 : 9.00;
  let baseLoja = km <= 5 ? 9.00 : 11.00;

  if (chovendo) {
    baseMotoboy += 2.00;
    baseLoja += 2.00;
  }

  if (pico) {
    baseMotoboy += 2.00;
    baseLoja += 2.00;
  }

  return {
    valorMotoboy: baseMotoboy,
    valorLoja: baseLoja
  };
}
