// js/supabase.js - CHEGA RÁPIDO - FINAL CORRIGIDO
const SUPABASE_URL = "https://omxfbskvrcbbrydgsmsg.supabase.co";
const SUPABASE_KEY = "sb_publishable_Akx4rEvoEv4SHOx4ijG-vA_WmY-vU5-";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const getLoja = () => JSON.parse(localStorage.getItem('cr_loja') || 'null');
const getMotoboy = () => JSON.parse(localStorage.getItem('cr_motoboy') || 'null');
const setLoja = (l) => localStorage.setItem('cr_loja', JSON.stringify(l));
const setMotoboy = (m) => localStorage.setItem('cr_motoboy', JSON.stringify(m));