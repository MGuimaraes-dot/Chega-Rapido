// supabase.js - ENTREAQUI - PROFISSIONAL
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = "https://omxfbskvrcbbrydgsmsg.supabase.co";
const SUPABASE_KEY = "sb_publishable_Akx4rEvoEv4SHOx4ijG-vA_WmY-vU5-";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

export function soNumeros(v) {
  return (v || '').replace(/\D/g, '');
}

export function getLoja() {
  try { return JSON.parse(localStorage.getItem('loja')); } catch (e) { return null; }
}

export function getMotoboy() {
  try { return JSON.parse(localStorage.getItem('motoboy')); } catch (e) { return null; }
}

export function calcularValoresFrete(km, chovendo = false, pico = false, ehCombo = false) {
  if (ehCombo) {
    return { valorMotoboy: 5.00, valorLoja: 7.00 };
  }
  let baseMotoboy = km <= 5 ? 7.00 : 9.00;
  let baseLoja = km <= 5 ? 9.00 : 11.00;

  if (chovendo) { baseMotoboy += 2.00; baseLoja += 2.00; }
  if (pico) { baseMotoboy += 2.00; baseLoja += 2.00; }

  return { valorMotoboy: baseMotoboy, valorLoja: baseLoja };
}
