export const defaultModeOfUse = [
  "Usar antes o durante el entrenamiento según la necesidad de la atleta.",
  "Revisar el ajuste, la superficie o la aplicación antes de iniciar la práctica.",
  "Mantener el producto limpio, seco y en buen estado entre sesiones."
];

export const defaultFaqs = [
  {
    question: "¿Lo pueden usar atletas menores?",
    answer: "Sí, bajo supervisión adulta y verificando siempre comodidad, ajuste y estado del producto."
  },
  {
    question: "¿Sirve para competencia?",
    answer: "Depende del reglamento de cada evento. Recomendamos confirmar con el entrenador o la organización."
  },
  {
    question: "¿Cómo hago el pedido?",
    answer: "Presiona el botón de WhatsApp y te ayudamos con disponibilidad, precio y envío."
  }
];

export const products = [
  {
    id: "bar-grips",
    name: "Grips para Barras",
    brandName: "PRFCT10 Grips para Barras",
    category: "Agarre seguro",
    group: "Agarre",
    price: "Desde $45",
    description: "Grips de cuero para barras asimétricas, pensados para entrenar con más confianza, control y seguridad.",
    details: "Un básico para gimnastas que trabajan barras en serio. Diseñados para ayudarte a sentir mejor agarre, más estabilidad y más confianza en cada repetición.",
    benefits: ["Ajuste cómodo", "Agarre seguro", "Doble hebilla", "Para barras"],
    accordionBenefits: [
      "Ayudan a mejorar la sensación de agarre en barras.",
      "Protegen la palma durante entrenamientos repetitivos.",
      "Acompañan rutinas de práctica y competencia.",
      "Dan más confianza cuando el volumen de trabajo aumenta."
    ],
    modeOfUse: [
      "Colocar los dedos en los orificios correspondientes.",
      "Ajustar las hebillas sin cortar la circulación.",
      "Usar con muñequeras debajo para mayor comodidad.",
      "Hacer un periodo de adaptación antes de usarlos en rutinas completas.",
      "Revisar costuras, cuero y hebillas antes de cada práctica."
    ],
    faqs: [
      {
        question: "¿Son para principiantes?",
        answer: "Son ideales para gimnastas que ya entrenan barras con frecuencia o comienzan a necesitar protección por volumen de trabajo."
      },
      {
        question: "¿Evitan todos los callos?",
        answer: "Ayudan a proteger, pero no eliminan por completo el riesgo de ampollas o irritación."
      },
      {
        question: "¿Necesitan adaptación?",
        answer: "Sí. Los grips deben adaptarse poco a poco a la mano y al movimiento de la atleta."
      }
    ],
    contraindications: [
      "No usar si el grip está roto, muy desgastado o con hebillas defectuosas.",
      "No usar una talla incorrecta.",
      "Suspender su uso si causa dolor, presión excesiva o pérdida de sensibilidad.",
      "No usar por primera vez directamente en competencia."
    ],
    specifications: [
      "Cuero para entrenamiento de barras.",
      "Doble hebilla.",
      "Diseño para agarre firme.",
      "Uso recomendado con muñequeras.",
      "Ideal para práctica, rutina y competencia."
    ],
    sportsUses: [
      "Gimnasia artística femenina.",
      "Barras asimétricas.",
      "Entrenamiento de fuerza de agarre.",
      "Preparación para competencias.",
      "Atletas que entrenan rutinas de barras."
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageClass: "product-card__image--bar-grips"
  },
  {
    id: "chalk",
    name: "Magnesio PRFCT10",
    brandName: "PRFCT10 Magnesio",
    category: "Agarre esencial",
    group: "Agarre",
    price: "Desde $22",
    description: "Magnesio para mantener las manos secas y listas antes de cada turno.",
    details: "Perfecto para barras, preparación física y entrenamientos intensos. Ayuda a reducir la humedad en las manos y mejorar la sensación de agarre durante la práctica.",
    benefits: ["Manos secas", "Fácil de llevar", "Uso práctico", "Agarre esencial"],
    accordionBenefits: [
      "Ayuda a absorber la humedad de las manos.",
      "Mejora la sensación de agarre.",
      "Acompaña entrenamientos de alta repetición.",
      "Es compacto y fácil de guardar."
    ],
    modeOfUse: [
      "Frotar una pequeña cantidad en las manos.",
      "Retirar el exceso antes de usar el aparato.",
      "Reaplicar solo cuando sea necesario.",
      "Guardar en un envase o bolsa para evitar desperdicio."
    ],
    faqs: [
      {
        question: "¿Sirve para gimnasia artística?",
        answer: "Sí, se usa comúnmente para mejorar el agarre en barras."
      },
      {
        question: "¿Mientras más uso, mejor agarro?",
        answer: "No necesariamente. Demasiado magnesio puede acumularse y reducir la sensación de contacto."
      },
      {
        question: "¿Se puede usar con grips?",
        answer: "Sí, pero sin saturar el cuero."
      }
    ],
    contraindications: [
      "Evitar inhalar el polvo.",
      "Evitar contacto con ojos.",
      "No aplicar sobre heridas abiertas o piel irritada.",
      "No usar en exceso si reseca demasiado la piel."
    ],
    specifications: [
      "Bloque de magnesio.",
      "Uso deportivo.",
      "Textura seca.",
      "Fácil aplicación manual.",
      "Ideal para entrenamiento y competencia."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Levantamiento de pesas.",
      "Calistenia.",
      "Escalada.",
      "Entrenamiento funcional.",
      "Deportes donde el agarre y el control de humedad son importantes."
    ],
    imageClass: "product-card__image--chalk"
  },
  {
    id: "gel-heel-guards",
    name: "Protectores de Talón",
    brandName: "PRFCT10 Protectores de Talón",
    category: "Cuidado y soporte",
    group: "Soporte",
    price: "Desde $32",
    description: "Protectores suaves para ayudar a cuidar los talones durante saltos, aterrizajes y entrenamientos de impacto.",
    details: "Pensados para gimnastas que pasan muchas horas entrenando. Son cómodos, discretos y prácticos para acompañar el trabajo de impacto.",
    benefits: ["Gel suave", "Cuidado del talón", "Reutilizable", "Cómodo"],
    accordionBenefits: [
      "Ayudan a amortiguar impactos en el talón.",
      "Reducen roce y presión dentro del calzado.",
      "Aportan comodidad durante entrenamientos o caminatas.",
      "Son prácticos para llevar al gimnasio."
    ],
    modeOfUse: [
      "Colocar el protector alrededor del talón.",
      "Ajustar dentro del calzado o durante la actividad según el diseño.",
      "Usar con piel limpia y seca.",
      "Lavar suavemente y dejar secar al aire."
    ],
    faqs: [
      {
        question: "¿Sirven para dolor de talón?",
        answer: "Pueden ayudar a dar amortiguación, pero no sustituyen evaluación médica."
      },
      {
        question: "¿Se pueden usar todos los días?",
        answer: "Sí, si no generan presión, molestia o irritación."
      },
      {
        question: "¿Son para gimnasia?",
        answer: "Pueden usarse como protección complementaria, especialmente fuera del aparato o en actividades de impacto."
      }
    ],
    contraindications: [
      "No usar sobre heridas abiertas.",
      "Suspender si causa irritación, presión o adormecimiento.",
      "No usar si altera la pisada de forma incómoda.",
      "Consultar a un especialista si hay dolor persistente."
    ],
    specifications: [
      "Material flexible tipo gel.",
      "Diseño para amortiguación.",
      "Uso en talón.",
      "Reutilizable.",
      "Ligero y fácil de limpiar."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Danza.",
      "Ballet.",
      "Porrismo.",
      "Entrenamientos de salto.",
      "Deportes con impacto repetitivo en talones."
    ],
    imageClass: "product-card__image--gel-heel"
  },
  {
    id: "kinesio-tape",
    name: "Cinta Kinesiológica",
    brandName: "PRFCT10 Cinta Kinesiológica",
    category: "Soporte flexible",
    group: "Soporte",
    price: "Desde $18",
    description: "Cinta flexible para acompañar el movimiento sin sentirse rígida.",
    details: "Una herramienta práctica para entrenamientos exigentes. Se adapta al cuerpo y acompaña el movimiento durante la práctica.",
    benefits: ["Flexible", "Tela respirable", "Uso deportivo", "Varios colores"],
    accordionBenefits: [
      "Acompaña el movimiento natural del cuerpo.",
      "Brinda soporte ligero sin limitar completamente la movilidad.",
      "Puede ayudar a dar sensación de estabilidad durante el entrenamiento.",
      "Es útil para práctica, recuperación y soporte deportivo."
    ],
    modeOfUse: [
      "Aplicar sobre piel limpia y seca.",
      "Evitar cremas o aceites antes de colocarla.",
      "Redondear las esquinas si se corta en tiras.",
      "No estirar demasiado la cinta durante la aplicación.",
      "Retirar lentamente para evitar irritación."
    ],
    faqs: [
      {
        question: "¿Se puede mojar?",
        answer: "Puede resistir sudor o humedad, pero conviene secar la zona después."
      },
      {
        question: "¿Cuánto tiempo se puede usar?",
        answer: "Depende de la piel y la actividad. Se debe revisar la piel con frecuencia."
      },
      {
        question: "¿Sirve para lesiones?",
        answer: "Puede brindar soporte ligero, pero no sustituye evaluación médica ni fisioterapéutica."
      }
    ],
    contraindications: [
      "No aplicar sobre heridas abiertas.",
      "No usar en piel irritada, alérgica o extremadamente sensible.",
      "Suspender si causa picazón, ardor, enrojecimiento o ampollas.",
      "No sustituye tratamiento médico.",
      "En atletas menores, usar bajo supervisión adulta."
    ],
    specifications: [
      "Cinta elástica deportiva.",
      "Tela respirable.",
      "Soporte flexible.",
      "Uso en entrenamiento y recuperación.",
      "Disponible en varios colores."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Porrismo.",
      "Danza.",
      "Ballet.",
      "Carrera.",
      "Fútbol.",
      "Voleibol.",
      "Tenis.",
      "Entrenamiento funcional."
    ],
    imageClass: "product-card__image--kinesio"
  },
  {
    id: "wrist-bands",
    name: "Soportes de Muñeca",
    brandName: "PRFCT10 Soportes de Muñeca",
    category: "Muñecas seguras",
    group: "Soporte",
    price: "Desde $28",
    description: "Soportes ajustables para dar más estabilidad y confianza durante el entrenamiento.",
    details: "Ideales para gimnastas que necesitan apoyo extra en muñecas durante barras, saltos, acrobacias o preparación física.",
    benefits: ["Ajustables", "Soporte firme", "Talla única", "Uso de fuerza"],
    accordionBenefits: [
      "Brindan soporte firme a la muñeca.",
      "Ayudan a dar estabilidad durante ejercicios de fuerza y carga.",
      "Son prácticos para movimientos de empuje, agarre y soporte corporal.",
      "Acompañan entrenamientos con barras, pesas, paralelas o apoyos."
    ],
    modeOfUse: [
      "Colocar alrededor de la muñeca.",
      "Ajustar firme, sin cortar circulación.",
      "Usar durante ejercicios de fuerza, empuje o soporte.",
      "Retirar después del entrenamiento.",
      "Revisar el ajuste antes de cada serie."
    ],
    faqs: [
      {
        question: "¿Tienen talla?",
        answer: "Son de talla única ajustable."
      },
      {
        question: "¿Se pueden usar en gimnasia?",
        answer: "Sí, especialmente en ejercicios con carga sobre muñecas."
      },
      {
        question: "¿Son rígidos?",
        answer: "Tienen una sensación más estructurada para dar soporte firme."
      }
    ],
    contraindications: [
      "No usar demasiado apretado.",
      "Suspender si causa hormigueo, adormecimiento o dolor.",
      "No usar como sustituto de evaluación médica si hay lesión.",
      "No usar si el material o cierre está dañado."
    ],
    specifications: [
      "Soporte de muñeca estructurado.",
      "Material firme.",
      "Talla única ajustable.",
      "Cierre ajustable.",
      "Uso deportivo y de fuerza."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Levantamiento de pesas.",
      "Calistenia.",
      "Paralelas.",
      "Anillas.",
      "Apoyos de manos.",
      "Entrenamiento funcional."
    ],
    imageClass: "product-card__image--wrist-bands"
  },
  {
    id: "tiger-paws",
    name: "Protectores de Muñeca",
    brandName: "PRFCT10 Protectores de Muñeca",
    category: "Soporte premium",
    group: "Soporte",
    price: "Desde $52",
    description: "Soporte avanzado para muñecas, ideal para gimnastas que entrenan con impacto y necesitan mayor estabilidad.",
    details: "Un favorito para atletas que trabajan apoyos, acrobacias y elementos de fuerza. Brindan una sensación de protección extra sin perder movilidad.",
    benefits: ["Soporte flexible", "Ajustables", "Para impacto", "Protección extra"],
    accordionBenefits: [
      "Ayudan a proteger la muñeca durante impacto y apoyo repetitivo.",
      "Son más flexibles que un soporte rígido de fuerza.",
      "Ideales para acrobacias, saltos y apoyos de manos.",
      "Brindan soporte sin sentirse demasiado duros."
    ],
    modeOfUse: [
      "Colocar la mano dentro del soporte.",
      "Ajustar las correas sin bloquear la circulación.",
      "Usar con las piezas internas adecuadas si el modelo las incluye.",
      "Revisar ajuste antes de hacer acrobacias o apoyos.",
      "Usar bajo supervisión de un entrenador en atletas menores."
    ],
    faqs: [
      {
        question: "¿Para qué se usan más?",
        answer: "Para gimnasia artística, acrobacias, apoyos repetitivos y entrenamientos de impacto."
      },
      {
        question: "¿Son iguales a los soportes de muñeca?",
        answer: "No. Estos son más flexibles y pensados para impacto y apoyo repetitivo."
      },
      {
        question: "¿Dan movilidad?",
        answer: "Sí, están pensados para proteger sin sentirse demasiado rígidos."
      }
    ],
    contraindications: [
      "No usar si causa dolor, hormigueo o adormecimiento.",
      "No usar si las correas o piezas internas están dañadas.",
      "No usar una talla incorrecta.",
      "No reemplaza evaluación médica si hay dolor persistente."
    ],
    specifications: [
      "Soporte flexible de muñeca.",
      "Uso para gimnasia y acrobacias.",
      "Ajustable.",
      "Puede incluir piezas internas según modelo.",
      "Diseño para impacto repetitivo."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Porrismo.",
      "Acrobacias.",
      "Trampolín.",
      "Salto.",
      "Suelo.",
      "Apoyos de manos.",
      "Actividades con impacto repetitivo sobre muñecas."
    ],
    imageClass: "product-card__image--tiger-paws"
  },
  {
    id: "rhythm-toes",
    name: "Punteras de Rítmica",
    brandName: "PRFCT10 Punteras de Rítmica",
    category: "Media punta",
    group: "Competencia",
    price: "Desde $24",
    description: "Punteras tipo media punta para giros, relevés, saltos y trabajo elegante de pies.",
    details: "Diseñadas para gimnasia rítmica, danza y entrenamiento de empeine. Ligeras, cómodas y perfectas para moverse con más fluidez.",
    benefits: ["Media punta", "Diseño flexible", "Antepié protegido", "Elásticos de ajuste"],
    accordionBenefits: [
      "Ayudan a proteger la parte delantera del pie.",
      "Mejoran la sensación de giro y deslizamiento.",
      "Aportan agarre controlado sobre superficie de rítmica o danza.",
      "Realzan la línea del pie durante la ejecución."
    ],
    modeOfUse: [
      "Colocar cubriendo dedos y metatarso.",
      "Ajustar los elásticos sin presión excesiva.",
      "Usar la talla correcta.",
      "Airear después de cada práctica.",
      "Lavar según indicación del material."
    ],
    faqs: [
      {
        question: "¿Deben quedar apretadas?",
        answer: "Deben quedar ajustadas, pero sin dolor ni presión excesiva."
      },
      {
        question: "¿Son para artística o rítmica?",
        answer: "Son principalmente para gimnasia rítmica, danza o trabajo de punta y deslizamiento."
      },
      {
        question: "¿Se usan con medias?",
        answer: "Depende de la atleta y la superficie, pero normalmente se usan directo en el pie."
      }
    ],
    contraindications: [
      "No usar si aprietan los dedos.",
      "No usar si causan ampollas o irritación.",
      "No usar una talla grande porque puede provocar deslizamiento inseguro.",
      "Suspender si genera dolor en dedos o metatarso."
    ],
    specifications: [
      "Puntera tipo media punta.",
      "Diseño flexible.",
      "Uso en gimnasia rítmica y danza.",
      "Cubierta de antepié.",
      "Elásticos de ajuste."
    ],
    sportsUses: [
      "Gimnasia rítmica.",
      "Danza.",
      "Ballet.",
      "Danza acrobática.",
      "Entrenamientos de giros, puntas y desplazamientos."
    ],
    sizes: ["XS", "S", "M", "L"],
    imageClass: "product-card__image--rhythm-toes"
  },
  {
    id: "flex-strap-12",
    name: "Liga Flex 12",
    brandName: "PRFCT10 Liga Flex 12",
    category: "Flexibilidad",
    group: "Flexibilidad",
    price: "Desde $16",
    description: "Liga con 12 niveles para trabajar extensiones, aperturas, hombros y movilidad.",
    details: "Una herramienta súper práctica para gimnastas que quieren mejorar flexibilidad con más control. Los niveles ayudan a medir el progreso y ajustar la intensidad.",
    benefits: ["12 niveles", "Control de progreso", "Fácil de llevar", "Movilidad"],
    accordionBenefits: [
      "Ayuda a trabajar flexibilidad activa y pasiva.",
      "Permite ejercicios de control y fuerza.",
      "Sirve para fortalecer piernas, abdomen y glúteos.",
      "Ideal para aperturas, movilidad, extensiones y control corporal.",
      "Sus niveles permiten progresar de forma ordenada."
    ],
    modeOfUse: [
      "Elegir el nivel adecuado según el ejercicio.",
      "Colocar pie o mano en el aro correspondiente.",
      "Mantener tensión controlada.",
      "Usar en ejercicios de flexibilidad activa o fortalecimiento.",
      "Evitar rebotes bruscos y rangos forzados."
    ],
    faqs: [
      {
        question: "¿Solo sirve para estirar?",
        answer: "No. También sirve para flexibilidad activa, control y fortalecimiento."
      },
      {
        question: "¿Sirve para piernas y glúteos?",
        answer: "Sí, puede usarse para activación y fortalecimiento controlado."
      },
      {
        question: "¿La pueden usar niñas?",
        answer: "Sí, bajo supervisión de un adulto o entrenador."
      }
    ],
    contraindications: [
      "No usar con dolor agudo o lesión activa.",
      "No forzar aperturas extremas.",
      "No hacer rebotes violentos.",
      "Suspender si aparece dolor punzante, adormecimiento o molestia articular."
    ],
    specifications: [
      "Liga de flexibilidad con 12 niveles.",
      "Material textil elástico.",
      "Uso para flexibilidad, fuerza y movilidad.",
      "Ligera y portátil.",
      "Ideal para gimnasia, danza y entrenamiento físico."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Gimnasia rítmica.",
      "Danza.",
      "Ballet.",
      "Porrismo.",
      "Yoga.",
      "Pilates.",
      "Flexibilidad activa.",
      "Fortalecimiento de piernas.",
      "Trabajo de abdomen.",
      "Movilidad y control corporal."
    ],
    imageClass: "product-card__image--flex-strap"
  },
  {
    id: "resistance-handles",
    name: "Liga con Agarre",
    brandName: "PRFCT10 Liga con Agarre",
    category: "Preparación física",
    group: "Fuerza",
    price: "Desde $20",
    description: "Liga de resistencia con mangos para fuerza, hombros, brazos, piernas y calentamiento.",
    details: "Una herramienta práctica para preparación física. Los mangos ayudan a tener mejor control durante cada ejercicio.",
    benefits: ["Mangos cómodos", "Resistencia progresiva", "Ligera", "Fuerza y movilidad"],
    accordionBenefits: [
      "Ayuda a fortalecer brazos, hombros, espalda y piernas.",
      "Ideal para activación muscular y preparación física.",
      "Permite entrenar fuerza con resistencia progresiva.",
      "Fácil de transportar."
    ],
    modeOfUse: [
      "Revisar la liga antes de cada uso.",
      "Sujetar firmemente los mangos.",
      "Empezar con tensión moderada.",
      "Evitar movimientos bruscos.",
      "Guardar lejos de calor, sol directo o superficies filosas."
    ],
    faqs: [
      {
        question: "¿Sirve para calentamiento?",
        answer: "Sí, es útil para activación de hombros, brazos y piernas."
      },
      {
        question: "¿Puede romperse?",
        answer: "Toda liga elástica puede dañarse con uso, sol, cortes o tensión excesiva. Debe revisarse siempre."
      },
      {
        question: "¿Es para niñas?",
        answer: "Puede usarse con supervisión y resistencia adecuada."
      }
    ],
    contraindications: [
      "No usar si está agrietada, cortada o deformada.",
      "No estirar hacia la cara.",
      "No usar con mangos mojados o resbalosos.",
      "Suspender si causa dolor articular.",
      "Mantener fuera del alcance de niños pequeños sin supervisión."
    ],
    specifications: [
      "Liga de resistencia con mangos.",
      "Material elástico.",
      "Uso para fuerza y preparación física.",
      "Ligera y portátil.",
      "Disponible en colores o resistencias según modelo."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Calistenia.",
      "Entrenamiento funcional.",
      "Preparación física.",
      "Activación de hombros.",
      "Fortalecimiento de espalda, brazos, piernas y glúteos."
    ],
    imageClass: "product-card__image--resistance-handles"
  },
  {
    id: "core-sliders",
    name: "Discos Deslizantes",
    brandName: "PRFCT10 Discos Deslizantes",
    category: "Centro y control",
    group: "Fuerza",
    price: "Desde $14",
    description: "Discos para trabajar abdomen, estabilidad, hombros y control corporal.",
    details: "Pequeños, prácticos y buenísimos para preparación física. Ideales para ejercicios de fuerza, estabilidad y control.",
    benefits: ["Par de discos", "Control corporal", "Bajo impacto", "Fácil transporte"],
    accordionBenefits: [
      "Activan abdomen, hombros, piernas y estabilidad.",
      "Ayudan a trabajar control corporal.",
      "Son ideales para preparación física de bajo impacto.",
      "Útiles para planchas, desplazamientos y ejercicios de movilidad."
    ],
    modeOfUse: [
      "Colocar bajo manos o pies.",
      "Usar sobre una superficie adecuada.",
      "Mantener abdomen activo y control del cuerpo.",
      "Empezar con ejercicios simples.",
      "Limpiar después del uso."
    ],
    faqs: [
      {
        question: "¿Se usan en piso o alfombra?",
        answer: "Depende del material del disco. Algunos tienen lados diferentes para piso duro o alfombra."
      },
      {
        question: "¿Son para principiantes?",
        answer: "Sí, con ejercicios básicos y supervisión."
      },
      {
        question: "¿Trabajan solo abdomen?",
        answer: "No. También pueden activar piernas, hombros y estabilidad general."
      }
    ],
    contraindications: [
      "No usar en superficies demasiado resbalosas.",
      "Evitar si hay dolor de muñeca, hombro o espalda sin supervisión.",
      "No hacer movimientos rápidos sin control.",
      "Suspender si causa dolor articular."
    ],
    specifications: [
      "Par de discos deslizantes.",
      "Uso para centro y control corporal.",
      "Diseño ligero.",
      "Superficie de deslizamiento.",
      "Fácil transporte."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Pilates.",
      "Calistenia.",
      "Entrenamiento funcional.",
      "Preparación física.",
      "Trabajo de abdomen, hombros, piernas y estabilidad."
    ],
    imageClass: "product-card__image--core-sliders"
  },
  {
    id: "grip-loop",
    name: "Ejercitador de Dedos",
    brandName: "PRFCT10 Ejercitador de Dedos",
    category: "Fuerza de agarre",
    group: "Agarre",
    price: "Desde $12",
    description: "Ejercitador de silicona para dedos, manos y antebrazos.",
    details: "Un accesorio pequeño pero útil para complementar el trabajo de agarre y activación de manos.",
    benefits: ["Silicona flexible", "Fácil de llevar", "Fuerza de agarre", "Compacto"],
    accordionBenefits: [
      "Ayuda a fortalecer dedos, manos y antebrazos.",
      "Mejora la resistencia de agarre.",
      "Puede complementar el trabajo de barras.",
      "Es compacto y fácil de guardar."
    ],
    modeOfUse: [
      "Colocar los dedos en los orificios.",
      "Abrir y cerrar la mano de forma controlada.",
      "Mantener la muñeca neutra.",
      "Empezar con pocas repeticiones.",
      "Descansar entre series."
    ],
    faqs: [
      {
        question: "¿Sirve para barras?",
        answer: "Sí, puede complementar el trabajo de fuerza de agarre."
      },
      {
        question: "¿Lo puedo usar todos los días?",
        answer: "Mejor alternar días o usar con volumen moderado para evitar sobrecarga."
      },
      {
        question: "¿Es de rehabilitación?",
        answer: "Puede apoyar trabajo de mano, pero una lesión debe ser evaluada por un profesional."
      }
    ],
    contraindications: [
      "No usar con dolor agudo en dedos, muñeca o antebrazo.",
      "No usar si hay inflamación activa.",
      "Evitar repeticiones excesivas.",
      "Suspender si causa hormigueo, dolor o fatiga anormal."
    ],
    specifications: [
      "Ejercitador de dedos en silicona.",
      "Diseño con orificios para dedos.",
      "Resistencia flexible.",
      "Ligero y portátil.",
      "Uso para fuerza de agarre."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Escalada.",
      "Calistenia.",
      "Levantamiento de pesas.",
      "Tenis.",
      "Entrenamiento de agarre.",
      "Fortalecimiento de dedos, manos y antebrazos."
    ],
    imageClass: "product-card__image--grip-loop"
  },
  {
    id: "power-weights",
    name: "Pesas de Tobillo y Muñeca",
    brandName: "PRFCT10 Pesas de Tobillo y Muñeca",
    category: "Fuerza ligera",
    group: "Fuerza",
    price: "Desde $24",
    description: "Pesas ajustables para sumar resistencia en ejercicios de piernas, brazos y preparación física.",
    details: "Prácticas para entrenamientos suaves de fuerza, movilidad y control. Se ajustan cómodamente en tobillos o muñecas.",
    benefits: ["Ajustables", "Resistencia ligera", "Fáciles de usar", "Preparación física"],
    accordionBenefits: [
      "Agregan resistencia ligera al entrenamiento.",
      "Son ideales para deportistas, bailarinas y gimnastas.",
      "Ayudan en ejercicios controlados de brazos, piernas, abdomen y glúteos.",
      "Su peso permite trabajar sin sobrecargar demasiado."
    ],
    modeOfUse: [
      "Colocar en muñecas o tobillos.",
      "Ajustar firme, sin apretar demasiado.",
      "Usar en ejercicios controlados.",
      "Evitar usarlas en elementos explosivos sin supervisión.",
      "Retirar si aparece molestia articular."
    ],
    faqs: [
      {
        question: "¿Cuánto pesan?",
        answer: "Cada pesa es de 500 g."
      },
      {
        question: "¿Sirven para bailarinas?",
        answer: "Sí, son ideales para bailarinas, gimnastas y deportistas que necesitan resistencia ligera."
      },
      {
        question: "¿Se pueden usar para piernas?",
        answer: "Sí, en ejercicios controlados de piernas, glúteos y abdomen."
      }
    ],
    contraindications: [
      "No usar en ejercicios explosivos sin supervisión.",
      "No usar si causa dolor en rodillas, tobillos, hombros o muñecas.",
      "Evitar uso prolongado.",
      "No apretar hasta causar hormigueo.",
      "No usar como carga máxima."
    ],
    specifications: [
      "Peso: 500 g.",
      "Uso en muñecas o tobillos.",
      "Cierre ajustable.",
      "Diseño para preparación física.",
      "Ideal para deportistas, gimnastas y bailarinas."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Ballet.",
      "Danza.",
      "Pilates.",
      "Entrenamiento funcional.",
      "Activación muscular.",
      "Trabajo controlado de brazos, piernas, abdomen y glúteos."
    ],
    imageClass: "product-card__image--power-weights"
  },
  {
    id: "patella-band",
    name: "Banda de Rodilla",
    brandName: "PRFCT10 Banda de Rodilla",
    category: "Rodilla y soporte",
    group: "Soporte",
    price: "Desde $18",
    description: "Banda unisex para dar soporte debajo de la rodilla durante entrenamientos de impacto.",
    details: "Ideal para atletas que hacen saltos, carrera, acrobacias o preparación física. Diseño discreto, práctico y fácil de ajustar.",
    benefits: ["Ajustable", "Soporte localizado", "Uso deportivo", "Unisex"],
    accordionBenefits: [
      "Brinda soporte debajo de la rótula.",
      "Puede ayudar a reducir molestia durante saltos o impacto.",
      "Aporta sensación de estabilidad en entrenamientos.",
      "Útil para atletas con carga repetitiva en rodilla."
    ],
    modeOfUse: [
      "Colocar justo debajo de la rótula.",
      "Ajustar hasta sentir presión ligera.",
      "No apretar demasiado.",
      "Usar durante actividad, no como solución permanente.",
      "Retirar después del entrenamiento."
    ],
    faqs: [
      {
        question: "¿Debo usarla todo el día?",
        answer: "No es lo ideal. Se recomienda usarla durante actividad específica."
      },
      {
        question: "¿Va encima o debajo de la rodilla?",
        answer: "Debajo de la rótula, sobre la zona del tendón patelar."
      },
      {
        question: "¿Sustituye rehabilitación?",
        answer: "No. Puede ayudar como soporte, pero no reemplaza tratamiento o fortalecimiento indicado."
      }
    ],
    contraindications: [
      "No usar si causa adormecimiento, hormigueo o cambio de color.",
      "No usar con inflamación severa sin evaluación.",
      "No usar como sustituto de rehabilitación.",
      "Consultar si el dolor persiste."
    ],
    specifications: [
      "Banda ajustable para tendón patelar.",
      "Soporte localizado.",
      "Cierre ajustable.",
      "Uso deportivo.",
      "Talla unisex ajustable según modelo."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Voleibol.",
      "Baloncesto.",
      "Carrera.",
      "Entrenamientos con saltos.",
      "Deportes con impacto repetitivo en rodillas.",
      "Preparación física bajo control."
    ],
    imageClass: "product-card__image--patella-band"
  },
  {
    id: "competition-glow",
    name: "Spray de Escarcha",
    brandName: "PRFCT10 Spray de Escarcha",
    category: "Brillo de competencia",
    group: "Accesorios",
    price: "Desde $14",
    description: "Escarcha en spray para cuerpo y cabello. El toque final para competir, posar y brillar.",
    details: "Perfecto para peinados, exhibiciones, fotos y competencias. Un detalle lindo para completar el look.",
    benefits: ["Brillo lindo", "Aplicación rápida", "Cuerpo y cabello", "Competencia"],
    accordionBenefits: [
      "Aporta brillo para competencias, exhibiciones y eventos.",
      "Ideal para cabello y cuerpo según formulación.",
      "Da un acabado lindo sin necesidad de accesorios pesados.",
      "Perfecto para presentaciones y fotos."
    ],
    modeOfUse: [
      "Agitar antes de usar.",
      "Aplicar a distancia moderada.",
      "Evitar ojos, boca y mucosas.",
      "Usar en espacios ventilados.",
      "Retirar con baño o limpieza suave."
    ],
    faqs: [
      {
        question: "¿Se puede usar en niñas?",
        answer: "Sí, con supervisión adulta y evitando rostro, ojos y mucosas."
      },
      {
        question: "¿Sirve para cabello?",
        answer: "Sí, si el producto está formulado para cuerpo y cabello."
      },
      {
        question: "¿Mancha la ropa?",
        answer: "Puede transferirse según la cantidad aplicada. Es mejor probar antes."
      }
    ],
    contraindications: [
      "No aplicar cerca de ojos o boca.",
      "No inhalar directamente.",
      "No usar sobre piel irritada o heridas.",
      "Suspender si causa picazón o reacción.",
      "Si es aerosol, mantener lejos del calor o fuego."
    ],
    specifications: [
      "Spray de brillo cosmético.",
      "Uso en cuerpo y cabello según formulación.",
      "Acabado con escarcha.",
      "Ideal para competencia y exhibición.",
      "Aplicación rápida."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Gimnasia rítmica.",
      "Porrismo.",
      "Danza.",
      "Ballet.",
      "Competencias.",
      "Exhibiciones.",
      "Fotos deportivas."
    ],
    imageClass: "product-card__image--competition-glow"
  },
  {
    id: "medal-display",
    name: "Medallero de Gimnasia",
    brandName: "PRFCT10 Medallero de Gimnasia",
    category: "Logros y recuerdos",
    group: "Accesorios",
    price: "Desde $35",
    description: "Medallero para exhibir tus logros, competencias y momentos favoritos.",
    details: "Una pieza especial para celebrar el progreso de cada gimnasta. Perfecto para habitaciones, regalos o espacios del gimnasio.",
    benefits: ["Decorativo", "Organiza medallas", "Para pared", "Recuerdo especial"],
    accordionBenefits: [
      "Organiza medallas de forma decorativa.",
      "Convierte logros deportivos en parte del espacio personal.",
      "Ideal para habitaciones, gimnasios o áreas de entrenamiento.",
      "Mantiene las medallas visibles y ordenadas."
    ],
    modeOfUse: [
      "Instalar en pared firme.",
      "Usar tornillos y anclajes adecuados al tipo de pared.",
      "Colgar las medallas distribuyendo el peso.",
      "Limpiar con paño seco.",
      "Evitar sobrecargar una sola ranura."
    ],
    faqs: [
      {
        question: "¿Sirve para muchas medallas?",
        answer: "Sí, siempre que se instale correctamente y se distribuya el peso."
      },
      {
        question: "¿Es decorativo o funcional?",
        answer: "Ambos. Decora y organiza."
      },
      {
        question: "¿Se puede instalar en pared liviana?",
        answer: "Sí, usando anclajes apropiados."
      }
    ],
    contraindications: [
      "No instalar con cinta adhesiva si va a cargar peso.",
      "No colocar sobre superficies débiles.",
      "No sobrecargar el medallero.",
      "Mantener fuera del alcance de niños pequeños si no está bien fijado."
    ],
    specifications: [
      "Medallero decorativo.",
      "Material metálico.",
      "Acabado negro.",
      "Instalación en pared.",
      "Diseño deportivo para gimnasia."
    ],
    sportsUses: [
      "Gimnasia artística.",
      "Gimnasia rítmica.",
      "Porrismo.",
      "Danza.",
      "Natación.",
      "Carrera.",
      "Artes marciales.",
      "Cualquier deporte competitivo con medallas.",
      "Habitaciones de atletas, gimnasios y espacios de entrenamiento."
    ],
    imageClass: "product-card__image--medal-display"
  }
];
