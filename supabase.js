// supabase.js - ENTREAQUI - PRODUÇÃO
const SUPABASE_URL = "https://omxfbskvrcbbrydgsmsg.supabase.co";
const SUPABASE_KEY = "sb_publishable_Akx4rEvoEv4SHOx4ijG-vA_WmY-vU5-";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = supabaseClient;

const getLoja = () => { try { return JSON.parse(localStorage.getItem('loja') || 'null'); } catch(e) { return null; } };
const getMotoboy = () => { try { return JSON.parse(localStorage.getItem('motoboy') || 'null'); } catch(e) { return null; } };
const setLoja = (l) => localStorage.setItem('loja', JSON.stringify(l));
const setMotoboy = (m) => localStorage.setItem('motoboy', JSON.stringify(m));

const soNumeros = (v) => (v || '').toString().replace(/\D/g, '');

// Cálculo centralizado de frete:
// Motoboy: até 5km = R$ 7 | acima de 5km = R$ 9 | chuva + R$ 2
// Loja:    até 5km = R$ 9 | acima de 5km = R$ 11 | chuva + R$ 2 (integral para o motoboy)
const calcularValoresFrete = (km, chovendo) => {
  const k = Number(km || 0);
  const baseMoto = k <= 5 ? 7 : 9;
  const baseLoja = k <= 5 ? 9 : 11;
  const extraChuva = chovendo ? 2 : 0;

  return {
    valorMotoboy: baseMoto + extraChuva,
    valorLoja: baseLoja + extraChuva,
    lucroApp: (baseLoja - baseMoto)
  };
};

// Mantido para compatibilidade
const calcPreco = (km, chovendo) => calcularValoresFrete(km, chovendo).valorMotoboy;
