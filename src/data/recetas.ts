interface Recetas {
  nombre: string;
  tiempo: string;
  ingredientes: string[];
  pasos: string;
  dificultad: number;
  imagen: string;
  ingredientesMasa?: string[];
}

const recetas: Recetas[] = [
  {
    nombre: "Brownie saludable",
    tiempo: "40 minutos",
    ingredientes: [
      "100 gr margarina vegetal.",
      "4 cdas colmadas de cacao amargo.",
      "1 barra de chocolate.",
      "10 cdas endulzante líquido.",
      "300 gr de harina de avena.",
      "50 gr de harina de maní.",
      "Bagazo o harina de coco.",
      "Bebida vegetal c/n.",
      "Esencia de vainilla.",
      "1 cda de café.",
      "1 paquete de oreos.",
    ],
    pasos:
      "Precalentar el horno a 180° por 10'. Mientras tanto, dejar reposar la margarina hasta que quede pomada y batir junto con el ¾ del chocolate derretido, el endulzante, el café y la esencia de vainilla. Una vez que se logró una mezcla homogénea, integrar el resto de chocolate partido, los ingredientes secos y buscar una consistencia deseada con bebida vegetal.Luego se debe pasar la mezcla a un molde rectangular enmantecado y enharinado, agregar chocolate por encima, oreos partidas y los toppings que te copen.Llevar al horno por 20-30 minutos. Cuando hagas la prueba del palito, ya podes retirar, dejar enfriar y ¡a disfrutar! ",
    dificultad: 2,
    imagen: "https://i.imgur.com/ZHFLcvf.jpg",
  },
  {
    nombre: "Licuado de banana",
    tiempo: "10 minutos",
    ingredientes: [
      "Banana madura congelada",
      "200ml de leche vegetal o agua",
      "Hielo",
      "Endulzante (opcional)",
      "Cacao amargo",
    ],
    pasos:
      "Es tan fácil como poner en una licuadora o vaso y mixear todos los ingredientes excepto el hielo, que va al final. Podes jugar con tu imaginación y combinarlo con frutos rojos congelados, pasta de maní, lo que más te guste. Queda espectacular y es re práctico si te cuesta integrar frutas en tu día a día.",
    dificultad: 1,
    imagen: "https://i.imgur.com/R6k8Rpe.jpg",
  },
  {
    nombre: "Empanadas de soja texturizada",
    tiempo: "1 hora",
    ingredientes: [
      "Soja texturizada 250 gr.",
      "2 cebollas",
      "Cebolla de verdeo.",
      "Ajo y perejil.",
      "Limón.",
      "Orégano, comino, pimentón dulce, ajo en polvo, sal.",
    ],
    ingredientesMasa: [
      "3 tazas de harina común.",
      "1/4 pocillo aceite.",
      "Agua, cantidad necesaria",
      "1 cda sal.",
    ],
    pasos:
      "Comenzamos hidratando la soja con agua caliente por 30 minutos. Mientras tanto, cortar y saltear en un wok: 2 cebollas, cebolla de verdeo, pimentón y ajo. Condimentar con perejil, pimentón dulce, orégano, comino, sal, limón y lo que quieras. Transcurrido el tiempo de la soja, procedemos a colarla y quitarle el excedente de agua, e integrarla con el resto del relleno.Por otro lado, en un bowl agregar 3 tazas de harina 0000, 1/4 pocillo de aceite de girasol, 1 vaso de agua y 1 cda de sal. Mezclar y agregar más agua/harina en la medida que se necesite, hasta formar una masa unificada y maleable que no se pegue a los dedos. Enharinamos la mesada y el palo de amasar, y comenzamos a estirar bien finito. Con un cortador circular formar las tapas de empanada .también podes hacer bolitas chiquitas y amasarlas una por una-. Luego sólo queda rellenar y armar las empanadas, hornear por 15 minutos o freír y listo, disfrutar de las mejores empanadas caseras veganas.",
    dificultad: 3,
    imagen: "https://i.imgur.com/1eIBOD0.jpg",
  },
  {
    nombre: "Milanesas de soja",
    tiempo: "40 minutos",
    ingredientes: [
      "1 taza de porotos de soja.",
      "2 tazas de pan rallado o rebozador sin tacc.",
      "Agua, cantidad necesaria.",
      "Salsa de soja o humo líquido (opcional)",
      "1/3 taza de aceite de girasol.",
      "Sal y condimentos a gusto. Yo usé orégano, pimentón, ajo en polvo y perejil.",
    ],
    pasos:
      "Podes elegir dos opciones: La rápida -comprar los porotos de soja en lata que no necesitan remojo- o la lenta y más natural -comprar los porotos de soja secos y dejarlos en remojo-.Si elegís la segunda opción como yo, deja la taza de porotos en remojo en 3 tazas de agua, durante 24 hs. La proporción para la soja siempre es 1:3 porotos-agua, porque crecen un montón. Una vez que ya pasó ese tiempo, se cuelan, enjuagan bien con agua y llevan a cocción, hasta que estén blanditos. Se deja enfriar y en la procesadora se agregan todos los ingredientes. Con el pan rallado es a ojo, hasta que quede una masa manejable.Luego se lleva todo a un bowl para manipular más fácilmente la masa. Formamos las milanesas con la mano, pasamos por nuestro rebozador, y llevamos a una placa de horno aceitada a fuego medio por 10-15 minutos cada lado.Si te sobran las podes guardar en un tupper con separadores (bolsas cortadas recicladas) y luego se pueden cocinar sin necesidad de descongelar.Recomendación: Para que la soja se procese bien y no queden grumos, se coloca primero con agua hasta formar una pasta (hummus) y después se agrega el pan rallado y demás ingredientes. Para que sea más consistente la mezcla, se puede dejar en la heladera o freezer 30 minutos.",
    dificultad: 2,
    imagen: "https://i.imgur.com/h9cOsBY.jpg",
  },
  {
    nombre: "Granola",
    tiempo: "30 minutos",
    ingredientes: [
      "2 tazas de avena",
      "Frutos secos a elección, yo usé un mix de almendras, nueces, cajú y pasas.",
      "Azúcar mascabo",
      "Ralladura de naranja.",
    ],
    pasos:
      "El día anterior puse a remojar frutos secos para activarlos (eso significa despertar sus propiedades benéficas, este procedimiento aplica a las semillas también, y cada uno tiene sus tiempos específicos).Comenzaremos por precalentar el horno bajo por 5 minutos, mientras tanto: mezclar en un bowl todos los ingredientes excepto las pasas, esparcir bien en una placa aceitada y llevar al horno medio. Luego de 10 minutos,revolvemos un poco y llevamos nuevamente a hornear hasta dorar. Dejamos enfriar y pasamos a un frasco de vidrio esterilizado con tapa.",
    dificultad: 1,
    imagen: "https://i.imgur.com/LIvjZ7m.jpg",
  },
  {
    nombre: "Cookies saludables",
    tiempo: "40 minutos",
    ingredientes: [
      "200 gr harina de arroz.",
      "150 gr coco rallado.",
      "100 gr azúcar mascabo.",
      "Esencia de vainilla.",
      "Huevo de chía -2 cdas de chía con 6 cdas de agua, dejar reposar 15 minutos",
      "100 gr chocolate semiamargo.",
      "Aceite de girasol c/n.",
      "Leche vegetal.",
    ],
    pasos:
      "Agregamos todos los ingredientes y mezclamos hasta obtener una masa homogénea. Llevamos media hora en la heladera para manipular más fácil. Luego de ese tiempo, formamos las galletas, llevamos a una placa aceitada y horneamos 20/30 minutos a 180°. Cuando estén listas y frías, agregamos chocolate derretido por encima.",
    dificultad: 1,
    imagen: "https://i.imgur.com/JxSPzRl.png",
  },
];

export { recetas };
