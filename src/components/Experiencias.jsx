import React from 'react';

const ExperiencesGrid = () => {
  const experiences = [
    {
      title: "Lucha contra el cáncer infantil",
      description: "Actividades de concientización y apoyo a la comunidad.",
      image: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/633643442_1378483954292224_8167615114061674339_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=91I1mNDBMRMQ7kNvwHnmCzB&_nc_oc=AdqLa-Oau7GevkJIj4HWnWAl1tMkv5siOCPTHwA9PBwz6j5NBc7e-PDcRviyKP9aU10IzUXCSvrpVq3aIkEVDeET&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=AVARRXxxcUfgLnYunNt-gQ&_nc_ss=7a389&oh=00_Af0OupxSYEMuJPZwIegYwCbTgvy8ISqzXwn0g2p6_y_Awg&oe=69EDE1D4",
      className: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]",
      level: "General"
    },
    {
      title: "Amor y Amistad",
      description: "Celebración de la amistad con actividades de integración.",
      image: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/634727650_1376234184517201_5423934136152546227_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=Sxa3p5YGps8Q7kNvwFEomNy&_nc_oc=Adow74kGMTTKiHYcGNPhGiSApMMjQuWuPC0ovKVPmtKMh1Qi4dkh-1559My1qq8yo3Z4uI_JTOk7hOlSapXYv9NK&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=i5Us8EJ34ZkkhmSDYmSn4w&_nc_ss=7a389&oh=00_Af26p8dBEPFcpZB3PcPzlJVUQ2Yc-eqAkemmBI9-krRXTg&oe=69EDCC75",
      className: "md:col-span-2 md:row-span-1 min-h-[200px]",
      level: "Primaria"
    },
    {
      title: "Día del Maestro",
      description: "Reconocimiento a nuestra labor docente.",
      image: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/498274518_1146818754125413_6238808660393267717_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=cxJOpdi-uzIQ7kNvwE9Ldzs&_nc_oc=AdqQ4fHiBOQChsuIVjvm8HrS4JTEwMFmtWCzeWbGLs2aYaltVjI33j0j5iaG1X6Pybu40QCiNFJXUw0CXRoCcJaJ&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=Aj4p6M6fbcwu98fwyly6UQ&_nc_ss=7a389&oh=00_Af2sdtaIBgs9IaWtPYoE94b5jk0wA5m9JhBd7eL-qSCCPA&oe=69EDD826",
      className: "md:col-span-1 md:row-span-1 min-h-[200px]",
      level: "Docentes"
    },
    {
      title: "Día de la Mujer",
      description: "Reflexión y empoderamiento femenino.",
      image: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/648501110_1394864039320882_4700067049278671492_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=SHzLCvHP210Q7kNvwHuWq8h&_nc_oc=AdoGACkUthgWAdWU81wPaxhPEjHjoL24KT7o9L60uOcdETDDAQ1klXh5GG-TdSmgP40KWZNWfpfEg2WvC4JnX-Vb&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=N3NMcuMU1zt0Apq2RXS81Q&_nc_ss=7a389&oh=00_Af2rlaYDFRvD_fkA-rji72SrueQTGcJD_hgZWCT_nKjJBA&oe=69EDE733",
      className: "md:col-span-1 md:row-span-2 min-h-[300px]",
      level: "Primaria"
    },
    {
      title: "Fuera del Aula",
      description: "Excursiones y aprendizaje experiencial.",
      image: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/495573956_1137287041745251_3499297871848470925_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=MDyHZ3dlIjQQ7kNvwEDRDvw&_nc_oc=AdoBj-yy71kgUvKtnRsvwp4erG2g-0nha3QS1wQ_0_YQZ_ZPDBcYUafvOi9aBmYGJYOap8AmPYeqt0-lFgl72_c3&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=xsEutBOjYIpSc8LyBDvunQ&_nc_ss=7a389&oh=00_Af0tgfZ4Op1j14xFHr2mjBhqqyeNIjq4Opk5jQbxuC_Uqw&oe=69EDC9AE",
      className: "md:col-span-2 md:row-span-1 min-h-[200px]",
      level: "Todos"
    },
    {
      title: "Con Padres",
      description: "Fortaleciendo la comunidad educativa.",
      image: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/492416418_1126882926118996_2967854373480383938_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XeQxV-MGMFQQ7kNvwHVl_vB&_nc_oc=AdoTmQjdGyv7gfeuXIiDNLI13bBQr8GGOilLpCnkaQjYuU56uZZ4IvXpZzvqXpN7GiFcDdy0WwCa0NlJfbJGm0wJ&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=MX7TuI2nhpRZ8e80qzo96g&_nc_ss=7a389&oh=00_Af1H4-qwEwoYjPg-dgcd1QilnUZu_CUh-HokUYiGtQbFYg&oe=69EDD2C6",
      className: "md:col-span-1 md:row-span-1 min-h-[200px]",
      level: "Primaria"
    },
  ];

  return (
    <section id="experiencias" className="py-8 md:py-16 px-4 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera optimizada y compacta */}
        <header className="mb-6 text-left border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Experiencias <span className="text-blue-600 font-light italic">Educativas</span>
          </h2>
          <p className="mt-1 text-gray-500 max-w-xl text-sm md:text-base leading-snug">
            Descubre los eventos que fortalecen el aprendizaje y la convivencia en nuestra comunidad escolar.
          </p>
        </header>

        {/* Bento Grid 100% Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[2rem] bg-gray-50 transition-all duration-700 hover:shadow-2xl ${exp.className}`}
            >
              {/* Imagen con efecto Zoom al hover */}
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay suave para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

              {/* ETIQUETA SUPERIOR IZQUIERDA (Glassmorphism) */}
              <div className="absolute top-0 left-0 p-5 z-30">
                <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-white/90 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  {exp.level}
                </span>
              </div>

              {/* CONTENIDO INFERIOR */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                <h3 className="text-lg md:text-xl font-bold leading-tight mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-2 font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesGrid;