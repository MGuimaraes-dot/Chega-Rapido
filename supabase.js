// supabase.js - CHEGA RÁPIDO - FINAL CORRIGIDO
const SUPABASE_URL = "https://omxfbskvrcbbrydgsmsg.supabase.co";
const SUPABASE_KEY = "sb_publishable_Akx4rEvoEv4SHOx4ijG-vA_WmY-vU5-";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = supabaseClient;

// Chaves ÚNICAS - todo mundo usa 'loja' e 'motoboy'. NÃO usar cr_loja / cr_motoboy
const getLoja = () => { try{ return JSON.parse(localStorage.getItem('loja') || 'null'); }catch(e){ return null; } };
const getMotoboy = () => { try{ return JSON.parse(localStorage.getItem('motoboy') || 'null'); }catch(e){ return null; } };
const setLoja = (l) => localStorage.setItem('loja', JSON.stringify(l));
const setMotoboy = (m) => localStorage.setItem('motoboy', JSON.stringify(m));

// Helpers usados em todos os arquivos
const soNumeros = (v) => (v||'').toString().replace(/\D/g,'');

// Preço motoboy: até 5km = R$ 7, 5-7km = R$ 8, acima de 7km = R$ 9, chovendo + R$ 2
const calcPreco = (km, chovendo) => {
  let p = 0;
  const k = Number(km||0);
  if(k <= 5) p = 7;
  else if(k > 7) p = 9;
  else p = 8;
  if(chovendo) p += 2;
  return p;
};
