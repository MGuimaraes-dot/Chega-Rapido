// supabase.js - ENTREAQUI - PROFISSIONAL
const SUPABASE_URL = "https://omxfbskvrcbbrydgsmsg.supabase.co";
const SUPABASE_KEY = "sb_publishable_Akx4rEvoEv4SHOx4ijG-vA_WmY-vU5-";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = supabaseClient;

const getLoja = () => { try{ return JSON.parse(localStorage.getItem('loja') || 'null'); }catch(e){ return null; } };
const getMotoboy = () => { try{ return JSON.parse(localStorage.getItem('motoboy') || 'null'); }catch(e){ return null; } };
const setLoja = (l) => localStorage.setItem('loja', JSON.stringify(l));
const setMotoboy = (m) => localStorage.setItem('motoboy', JSON.stringify(m));

const soNumeros = (v) => (v||'').toString().replace(/\D/g,'');

// Regra de frete: até 5km = R$ 7 | acima de 5km = R$ 9 | + R$ 2 se chover
const calcPreco = (km, chovendo) => {
  let p = 0;
  const k = Number(km||0);
  if(k <= 5) p = 7;
  else p = 9;
  if(chovendo) p += 2;
  return p;
};
