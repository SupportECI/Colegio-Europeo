import { useState, useEffect } from 'react';
import { ChevronRight, X, ChevronLeft } from 'lucide-react';

const Galeria = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    if (imagenSeleccionada) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [imagenSeleccionada]);

  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'maternal', nombre: 'Maternal' },
    { id: 'preescolar', nombre: 'Preescolar' },
    { id: 'primaria', nombre: 'Primaria' },
  ];

  // Patrón optimizado para 9 imágenes sin dejar huecos (Basado en 4 columnas)
  const gridPattern = [
    "md:col-span-2 md:row-span-2", // 1. Grande
    "md:col-span-1 md:row-span-1", // 2. Pequeño
    "md:col-span-1 md:row-span-1", // 3. Pequeño
    "md:col-span-2 md:row-span-1", // 4. Ancho (Rellena debajo de los pequeños)
    "md:col-span-1 md:row-span-2", // 5. Pequeño
    "md:col-span-1 md:row-span-1", // 6. Pequeño
    "md:col-span-2 md:row-span-2", // 7. Alto
    "md:col-span-1 md:row-span-1", // 8. Pequeño
    "md:col-span-2 md:row-span-1", // 9. FINAL: Rellena el espacio azul marcado
  ];

  const imagenesGaleria = [
    // MATERNAL (9 fotos)
    { id: 1, categoria: 'maternal', titulo: 'Exploración Sensorial', descripcion: 'Descubriendo texturas.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/619341323_1359017656238854_8452755734723012018_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=nI5YQJnkkY4Q7kNvwFpWYmq&_nc_oc=Adqkmy28-KJsQUIpMG6YRMPo4r4_wXF2bl5F9TKMUmv2hauhIxNvAKIVxXjvwC8f1qENYYz_ojXUm4zmUYkE7gbX&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=z7EEI4pWKOg3dPAWHqOEdw&_nc_ss=7b289&oh=00_Af3hEIF2-5A6A9P8Tb97aoEmjeIgoI8ztl2qZkhLPiExsQ&oe=69EF12DD' },
    { id: 2, categoria: 'maternal', titulo: 'Primeros Pasos', descripcion: 'Motricidad gruesa.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/619544465_1359007939573159_5044203321292249060_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=keq1-mpFB1sQ7kNvwHNOVIo&_nc_oc=AdoBzu97ty4aa-SPcQjVc5a2R7PfF1-5ust5roovf_WrtX2EjSz36uUqmQ4AFRG75d-gxcBhU4FfpYUqQcM0GifQ&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=xOhal5URaSEcJvS3jdgb6Q&_nc_ss=7a389&oh=00_Af2qIgE9FZp_JYU89RcXSJ9avVAvG4pi5AjUqK2BWqZuFA&oe=69EF0653' },
    { id: 3, categoria: 'maternal', titulo: 'Hora del Cuento', descripcion: 'Imaginación temprana.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/615554274_1347499594057327_9135330769324447491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=AXke6HBE9x0Q7kNvwFzsm3S&_nc_oc=AdrXnxMD8nynRl_0Rg55XOvRpJ9SrULeHa03YxF7I54kv7oBGCMsS3140V1hgO2zD4IHVgGEXt_-IT0L8rgGWHHv&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=cXATQ5azZGlkMARUzexcVw&_nc_ss=7b289&oh=00_Af15stKDYIEmJ9xd_iNMlbBJLFSUre3IfT67Rwuq_1M5yg&oe=69EEF9E9' },
    { id: 4, categoria: 'maternal', titulo: 'Juego Libre', descripcion: 'Socialización.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/498248489_1146822107458411_4672318711498174854_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=f4XVXRyUwdoQ7kNvwE5geqq&_nc_oc=AdqDjKtM1fbUkSCbBsSCVbZ2vwEZBRnD-OaPu_X_AB7og2GjmdxTBfxUyLJPjTr_c-iVdYbtyXTKkAHy5Mw8s3nQ&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=hxSfMOqNXAtFUvmpnIaFJw&_nc_ss=7a289&oh=00_Af3uWJXwl5lgwdkeyRdlqDk_UaCKbrfGvxpF13MpXEhROQ&oe=69EEF791' },
    { id: 5, categoria: 'maternal', titulo: 'Música Bebés', descripcion: 'Ritmo y oído.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/481179252_2313133015752835_8787724958862202979_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=9scNe5d8M-AQ7kNvwEhToNJ&_nc_oc=Adpq8g_cpPkM1ltH6yXdV-7w4depP_O0GFTJoQFAXuUvqD92d01yLsNLfFso0U8EjKcVWJrU2VJDQBbNbYnJvlDW&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=p59974nc6nev5E5AWbx4YA&_nc_ss=7b289&oh=00_Af2uL-yLKOlgsXU-c6AEZVBUqGo1G-YN5vgwmtK-4adCUg&oe=69EF0B7F' },
    { id: 6, categoria: 'maternal', titulo: 'Arte con Manos', descripcion: 'Creatividad pura.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/481257624_2310723495993787_2122215659141949722_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=viiJWGxzx7kQ7kNvwHp8VDY&_nc_oc=Adp46jqK1smNFAMoTbVlu0Mg3gDq7ahrXECkBA6ILP3Q5eLaQDpX5Vlwas1jNQ07c2kDxtY-wVEhqBKXo-H8JEw-&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=-GWltPMxe0X7ZVTl2eOlmA&_nc_ss=7b289&oh=00_Af0JEr4zYLJgU888XrwYbS4Q0HB2kHpL54FDZ5FXXkLhQw&oe=69EEF7A5' },
    { id: 7, categoria: 'maternal', titulo: 'Psicomotricidad', descripcion: 'Equilibrio.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/481074641_2309554062777397_8247481138555628073_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=cGc9LtbB0PsQ7kNvwG0aU2y&_nc_oc=AdpZ0Io5ybtoh6zV8IE5fV49oQ87WEntumyV4w6n0HeQMbzsFh45FomYh51uZU13oveRKTz-Sxzhv61erVpbQOId&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=vIh4EU_fwTvdnOyRvrKwkg&_nc_ss=7b289&oh=00_Af00Mw-v58sNSlkKq8BQwgcPfqReu0_8JMW9etaV9eAp4g&oe=69EEF7E1' },
    { id: 8, categoria: 'maternal', titulo: 'Siesta y Descanso', descripcion: 'Bienestar.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/481072023_2309561596109977_2082819901939241521_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=12kiOAju0vcQ7kNvwG_i7Tm&_nc_oc=Adr0EZqO9_aW8B3kpdNzlZMm-9l04MR3AS7ovCwtgMPtjYzPZfqWbdTYfFKkjBW_Ain8VEoIdNGDftnxD12oOtQT&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=vBKi3A53ctPFQkZBlJZdfQ&_nc_ss=7b289&oh=00_Af0SS941-CpVBsgFTEUg75AtD9SZ5SD3u-ysj9fgJslOVw&oe=69EEEAE0' },
    { id: 9, categoria: 'maternal', titulo: 'Estimulación', descripcion: 'Afectividad.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t1.6435-9/78134854_949520975447386_8443879212577718272_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rvxaAY-VJX8Q7kNvwGf94KR&_nc_oc=AdpYgrT8-E9IC4DX2TbVQOA3RXuLIxlZhYMElqQyZmFUU5G05mJTmqAG8mxgb4tOdwQ0NGNW5bvHBPRf_uLvWwVC&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=wHpmmJ4gehB3b_5EtE4H0A&_nc_ss=7b289&oh=00_Af15tA73Habs0eDmZTo7clzltRNhgrASNSOJXD7yZrbjnw&oe=6A10ACC2' },

    // PREESCOLAR (9 fotos)
    { id: 10, categoria: 'preescolar', titulo: 'Mini Chefs', descripcion: 'Cocina divertida.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/480757959_2310049802727823_7758271671630500808_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=98DzVofXQskQ7kNvwGagQ5i&_nc_oc=AdqnmushTHesolpaFBXST8s_VrB8RMnaSOTsBN_mgLUviYpvmCG7BSY7W0qx4MGP_lK4WzZCX5EQuIL7rxpEIXYv&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=_OB8tcuxjakPPcb0qYd03A&_nc_ss=7b289&oh=00_Af1qb5qKqvhzKb5F4ZMM7rlQM4ME02CXaCUQZjs-6oiRyA&oe=69EEFF9F' },
    { id: 11, categoria: 'preescolar', titulo: 'Científicos', descripcion: 'Curiosidad.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/489924201_1118864536920835_1918686512578851783_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4ShXCTPsmqAQ7kNvwGqtCfb&_nc_oc=AdpF2vNZ-3-iThgzUchth4ye-qZBcu3G9IuSVlCFA2M8URQ6GE2OeicWCFfQ2gGrEKwlqNx3rJCdITFoIAaewho2&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=JrCT9o3cbicCtCrvfkq0nw&_nc_ss=7b289&oh=00_Af20_ppG1KkQY0uQKgIbnKO3IaA3-KO4jHyvSf84r6op2A&oe=69EF0473' },
    { id: 12, categoria: 'preescolar', titulo: 'Huerto Escolar', descripcion: 'Naturaleza.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/495209923_1137292288411393_6001127128857278794_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=25XOdMRDMYEQ7kNvwGHMKz3&_nc_oc=AdqWtyqBC9HlgQ1aAsUkmJuUw1gPmK8rsQiKznilW-u-PmrA7PkK_2cqlL3c-w7qxvPJz99mkKrexc0tZyAAzJuJ&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=zhLKsQi1EipIXWNWwa-eRg&_nc_ss=7b389&oh=00_Af1DA5qfDuxUfEXhszWFCIM5uKuivO-SQdUnC-_73jgwvQ&oe=69EF01CB' },
    { id: 13, categoria: 'preescolar', titulo: 'Danza Regional', descripcion: 'Folclore.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/498186856_1146818160792139_8713868630179086401_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vKModa8QkbYQ7kNvwGDDfOw&_nc_oc=AdrWys0TvJ7IKeNjF5BDHzy4xH_MBrEjArK3YH-_pZTAjSjiJQWm_Wq4iER-tUwwJIMCK0uSOc1Fy0e-JwURzpBI&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=L-5nk08nKYDkajeCKooTQw&_nc_ss=7b389&oh=00_Af2gHRj3WsglILw0Q_hNzQocUsjgw0nerW2JR5_OWCXkyQ&oe=69EF2433' },
    { id: 14, categoria: 'preescolar', titulo: 'Inglés Lúdico', descripcion: 'Bilingüismo.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/506599025_1167515368722418_333778999558989164_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=KPuBVKW2-i0Q7kNvwEq5UlX&_nc_oc=Ado5qgDNWNZDFj4fMlV4ioaeAv_yB5V49IiQuK2SNH-TP1k3f0t2ApXoctb5WOTg--v7rgY-jfr0t_BYZ1l_8F2a&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=K59uXEZeV_BRfYUriuCieA&_nc_ss=7b289&oh=00_Af0_7mG_DUQb7wdj5mZEbwz-dc5SWA-KQAPJ_waX_NoqEg&oe=69EF14E1' },
    { id: 15, categoria: 'preescolar', titulo: 'Teatro Infantil', descripcion: 'Expresión.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/506734917_1168259488648006_2095005196361558349_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dqThh6NCrggQ7kNvwEMQWfV&_nc_oc=AdrRS7IzKBA1TZWFHJhIJjQ8xPrPsFZDOwlr-3EtsQG6uHGx2ObOyfwo6sITkawVG308a4BuoPI7wl-JaSBR6amO&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=-kr42jrFnAjJah030JFJgw&_nc_ss=7a389&oh=00_Af1RlJlU-K0RrItFK-42J44yWtSy0w46f6QKsXPLrj9HNQ&oe=69EF0570' },
    { id: 16, categoria: 'preescolar', titulo: 'Grafomotricidad', descripcion: 'Escritura.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/514315437_1182323147241640_1619059335401932141_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1rNBPB9pU7cQ7kNvwEAJkm8&_nc_oc=Adp4RQlSPI-QynC8CQykMQpj3nmn3PlDuOo1VHe08CSLQRNwBPJtm1qw24z6cy_5AWAnpLzGIr_89axkclIQ-oJF&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=Ww6-WERAwc2Nhk_0-RhFyw&_nc_ss=7b289&oh=00_Af1s9vtMGI3adoDz2YnP8T4L4RWsRIrhKeFpG8CnM81_EQ&oe=69EEFD68' },
    { id: 17, categoria: 'preescolar', titulo: 'Lógica', descripcion: 'Estrategia.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/514137797_1182327237241231_1164787579486870456_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5-sS0471VLUQ7kNvwH2IPtX&_nc_oc=AdqF-959_fKHuhF2bvdiwvRuVcp1iisgF9Z7wd3AcroZqayW38dX4MgPbeOfkq_jf79IvSjSIisV1SMEJSxKrvVa&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=zZ8ZcMNDRaBSikkLt0i_6g&_nc_ss=7b289&oh=00_Af3XCVX9E_ZfEISlb6xAN0-dwkvEA6kO8rjlPYH8aJpEoQ&oe=69EF04F0' },
    { id: 18, categoria: 'preescolar', titulo: 'Valores', descripcion: 'Formación.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/634758456_1376233661183920_354782648954317373_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=_fU-qSMav1IQ7kNvwGWHROd&_nc_oc=AdorioHo5wMSzWFmYwbCkWUkw7RuIkEua8hWRlmcxagKru9Ug8ynkCqvxcs1Akovyud2ly6agI0ePJBnv-7jlTCQ&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=fxNjghcUQooEMEw93_Kz3w&_nc_ss=7b289&oh=00_Af3N-Y8-gjiBdpZt73ZEIlT6kCT-TWgCNzi0bDPrF_-ePQ&oe=69EF3282' },

    // PRIMARIA (9 fotos)
    { id: 19, categoria: 'primaria', titulo: 'Robótica STEAM', descripcion: 'Innovación.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/519422136_1196811299126158_4702518240215800732_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vZy74A41FJcQ7kNvwGDjdtp&_nc_oc=Adr7d7bwHOpq0ak3Mzq5Rdh69rL6Uh_lrce0hGqXjiocCwn_9Arjb_TAFsJkFl2MqocZxOmFBB72cNkZ49gyvt1C&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=tcXySKPxiOsaoaEkz2l1wQ&_nc_ss=7b289&oh=00_Af1Jthq3UIo6TW1KQg976BEHmlNQjPCwmzt3XhdX_vUwIQ&oe=69EF00B2' },
    { id: 20, categoria: 'primaria', titulo: 'Ajedrez', descripcion: 'Concentración.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/615712050_1347502897390330_2879337879257897645_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=ZZKIOTOYyAkQ7kNvwGKdD5I&_nc_oc=AdrJ3WYgerbKsP6aAdfWmudFbGV12xwhTEWYFLVV1lVqvu5AO5C_Owu6sm_UD3CuHt832e-uc9duQCLHr0qrTqU_&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=W_DP7nn21sn_RWMCYpwsnw&_nc_ss=7b389&oh=00_Af3w6DLdhYZdrMEtb1zaeK5ugWLr9Jg4l0YQqf-G5Bvezw&oe=69EF1285' },
    { id: 21, categoria: 'primaria', titulo: 'Feria del Libro', descripcion: 'Lectura.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/621866826_1359018956238724_8634803712082945591_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zZjE4pOjGycQ7kNvwHh32Mv&_nc_oc=AdouCPk2MYnQJS7gIGvNu7qP9fwCVI2H4o-FniJxZndhP7v_xkYSKVtbXf3AmbW6feFC4bIZqkBL8I0L_Dsm0qBC&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=ygCyk5HOJiQ93G7WVFXCyA&_nc_ss=7a289&oh=00_Af1jJj-btqHyUg61Qkqfns6VYGy2X6elT6SAgXJvodc0eQ&oe=69EEF84E' },
    { id: 22, categoria: 'primaria', titulo: 'Banda de Guerra', descripcion: 'Identidad.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/660404155_1412130074260945_5721829544656612195_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=H5VJj8YylKsQ7kNvwFi3GGo&_nc_oc=Ado9sSP5rbzrCwxiaYRqv93RTqQbOS3fd--BwsTF46r_V7AUyHRC3rupyRBZBvxcaRrnmZqzypJopRLMnfj-9rkZ&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=WHQNBgP4nsM3UFpHVIjJrA&_nc_ss=7a289&oh=00_Af2iOOoS_ygkZZCjYMSlylPgFr32oIVnIA7lwwLiHV-xoA&oe=69EF0500' },
    { id: 23, categoria: 'primaria', titulo: 'Deportes', descripcion: 'Trabajo en equipo.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/648405457_1394864592654160_4547858037981028481_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=moQNVeLkhFcQ7kNvwEJVKaU&_nc_oc=Ado-q1tYBGPLmA_BqdhKa8wWoqIntyqZ6xUK1zkI-MitvuBzY7PsGiTKaD7u1RdXKoD7DBulU9oh1cDg8C8VlPFT&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=rJ2QyddtGs3ZDeSVPbLGKw&_nc_ss=7b289&oh=00_Af0OCkWTbNml-worDZEqGDLwt4hGNVblydzi_8VjgaT5Kw&oe=69EEF2BD' },
    { id: 24, categoria: 'primaria', titulo: 'Oratoria', descripcion: 'Voz pública.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/488372230_1111377327669556_3227900850926993574_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=oMnITpm9fboQ7kNvwHWeaMf&_nc_oc=AdoQPSRoywkdDT_7ewLds69mSHqVQT_dR93X6KmyUeJ-e7O5bpR8V4790GKtRyzX4K4&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=ijaZjHz0meYmHlfbPS7XaQ&_nc_ss=7a289&oh=00_Af1jI8yye0Kf1ECnqWLCP_LkyA19maIEQwGn3r90hPqdJA&oe=69EF2C9B' },
    { id: 25, categoria: 'primaria', titulo: 'Ecología', descripcion: 'Sustentabilidad.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/515012604_1182327220574566_2967091473621767346_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Ydl99H91T9wQ7kNvwFbrKTH&_nc_oc=Adop2X-B_yn7beXWdIddCARcgNdO_zzuW1s5yY-WDQGD5u8aTDufjvOKBL4dRd-_rog&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=6AsYvDgU-TxTRTusBXLPLg&_nc_ss=7a289&oh=00_Af33xNklI0rMPxX-8tJTm3-YrGZTFWQOJs2naSFMHFFjBQ&oe=69EF22C9' },
    { id: 26, categoria: 'primaria', titulo: 'Matemáticas', descripcion: 'Habilidad numérica.', imagen: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/506030193_1165926072214681_5016565548894309800_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=3xL7wP4btaUQ7kNvwHezDFJ&_nc_oc=AdrmvvJ2PQ_XzLwfYY7vzR7z0abkhAEqJ6QnI4CkJuxSoDmN_piMnESN-Ox6XEKjruE&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=A54JdLbfwvM7aqzRNePaQw&_nc_ss=7a289&oh=00_Af0AgStchxXhrKIBuQkbsIwBOej_lTLaHivOVLleZt6CpA&oe=69EF2DF0' },
  ];

  const imagenesFiltradas = categoriaActiva === 'todos'
    ? imagenesGaleria
    : imagenesGaleria.filter(img => img.categoria === categoriaActiva);

  const abrirGaleria = (imagen) => {
    const indice = imagenesFiltradas.findIndex(img => img.id === imagen.id);
    setImagenSeleccionada(imagen);
    setIndiceActual(indice);
  };

  const irSiguiente = () => {
    const nuevoIndice = (indiceActual + 1) % imagenesFiltradas.length;
    setIndiceActual(nuevoIndice);
    setImagenSeleccionada(imagenesFiltradas[nuevoIndice]);
  };

  const irAnterior = () => {
    const nuevoIndice = indiceActual === 0 ? imagenesFiltradas.length - 1 : indiceActual - 1;
    setIndiceActual(nuevoIndice);
    setImagenSeleccionada(imagenesFiltradas[nuevoIndice]);
  };

  return (
    <section id="galeria" className="py-8 md:py-16 px-4 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera optimizada y compacta */}
        <header className="mb-6 text-left border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Galería <span className="text-blue-600 font-light italic">Educativa</span>
          </h2>
          <p className="mt-1 text-gray-500 max-w-xl text-sm md:text-base leading-snug">
            Descubre los momentos especiales que forman parte de nuestra comunidad educativa.
          </p>
        </header>

        {/* Filtro de Categorías - Pequeño y Discreto */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                categoriaActiva === cat.id
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Bento Grid 100% Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[180px] md:auto-rows-[220px]">
          {imagenesFiltradas.map((imagen, index) => (
            <div
              key={imagen.id}
              onClick={() => abrirGaleria(imagen)}
              className={`group relative overflow-hidden rounded-[2rem] bg-gray-50 cursor-pointer transition-all duration-700 hover:shadow-2xl ${gridPattern[index % 9]}`}
            >
              {/* Imagen con efecto Zoom al hover */}
              <img
                src={imagen.imagen}
                alt={imagen.titulo}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay suave para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

              {/* ETIQUETA SUPERIOR IZQUIERDA (Glassmorphism) */}
              <div className="absolute top-0 left-0 p-5 z-30">
                <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-white/90 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  {imagen.categoria.charAt(0).toUpperCase() + imagen.categoria.slice(1)}
                </span>
              </div>

              {/* CONTENIDO INFERIOR */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                <h3 className="text-lg md:text-xl font-bold leading-tight mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {imagen.titulo}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-2 font-light">
                  {imagen.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {imagenSeleccionada && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button onClick={() => setImagenSeleccionada(null)} className="absolute top-6 right-6 text-white/50 hover:text-white transition-all hover:rotate-90">
            <X size={40} strokeWidth={1} />
          </button>
          
          <button onClick={irAnterior} className="absolute left-4 text-white/20 hover:text-white transition-colors">
            <ChevronLeft size={50} strokeWidth={1} />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <img src={imagenSeleccionada.imagen} className="max-h-[75vh] w-auto rounded-3xl shadow-2xl object-contain" />
            <div className="mt-8 text-center text-white">
              <h3 className="text-3xl font-bold">{imagenSeleccionada.titulo}</h3>
              <p className="text-gray-400 mt-2 font-light italic">{imagenSeleccionada.descripcion}</p>
            </div>
          </div>

          <button onClick={irSiguiente} className="absolute right-4 text-white/20 hover:text-white transition-colors">
            <ChevronRight size={50} strokeWidth={1} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Galeria;