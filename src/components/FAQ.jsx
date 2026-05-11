import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function FAQ() {
  const [activo, setActivo] = useState(null);

  const preguntas = [
    {
      pregunta: "¿Cuáles son los requisitos para la inscripción?",
      titulo: "Para inscribirse es necesario presentar:",
      // Al convertirlo en un arreglo separado por comas, React puede recorrerlo para crear la lista
      respuesta: [
        "Acta de nacimiento original",
        "CURP",
        "Certificado del nivel anterior",
        "Boleta de calificaciones",
        "Certificado Médico",
        "INE de los tutores",
        "Copia de cartilla de vacunación"
      ],
      nota: "Contamos con un proceso sencillo y personalizado en nuestra oficina de admisiones."
    },
    {
      pregunta: "¿Cuentan con alguna promoción?",
      respuesta: "Sí, contamos con algunos descuentos especiales al inscribir  2 o más alumnos, pregunta por nuestra convocatoria vigente."
    },
    {
      pregunta: "¿El colegio cuenta con servicio de estancia o comedor?",
      respuesta: "Si, los alumnos pueden traer sus alimentos o contratar el servicio de comedor que ofrece menús balanceados y supervisados."
    },
    {
      pregunta: "¿Dónde puedo adquirir los uniformes escolares?",
      respuesta: "Los uniformes oficiales de diario y deportes están disponibles para su compra directa en la administración del colegio durante todo el ciclo escolar."
    },
    {
      pregunta: "¿Cuál es el enfoque pedagógico de la institución?",
      respuesta: "Nuestro enfoque es bilingüe, enseñamos matemáticas con el método Singapur, contamos con plataformas con microlearning & A.I."
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50/50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[4px] text-[#0E2976] font-bold mb-3 block">Preguntas Frecuentes</span>
          <h2 className="text-3xl font-bold text-gray-950 tracking-tight sm:text-4xl">
            Información de interés
          </h2>
          <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes de nuestra comunidad educativa para brindarte un mejor servicio.
          </p>
          <div className="h-px w-20 bg-[#0E2976]/20 mt-8 mx-auto"></div>
        </div>

        {/* Lista de Acordeón */}
        <div className="space-y-4"> 
          {preguntas.map((item, index) => {
            const abierto = activo === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-xl bg-white border ${
                  abierto ? "shadow-lg border-gray-200" : "border-gray-100 hover:border-gray-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setActivo(abierto ? null : index)}
                  className="w-full flex items-center justify-between py-5 px-8 text-left outline-none group"
                >
                  <div className="flex gap-4 items-center">
                    <div className={`h-6 w-1 rounded-full transition-colors ${abierto ? "bg-[#0E2976]" : "bg-transparent group-hover:bg-blue-200"}`} />
                    <span className={`text-[16px] transition-colors duration-300 ${
                      abierto ? "text-[#0E2976] font-bold" : "text-gray-700 hover:text-gray-950 font-medium"
                    }`}>
                      {item.pregunta}
                    </span>
                  </div>
                  
                  <div className={`flex items-center justify-center p-2 rounded-full transition-colors ${abierto ? "bg-blue-50" : "bg-transparent"}`}>
                    <div className={`transform transition-transform duration-500 ease-out ${abierto ? "rotate-90" : ""}`}>
                      <ChevronRight
                        size={18}
                        strokeWidth={2.5}
                        className={abierto ? "text-[#0E2976]" : "text-gray-400 group-hover:text-gray-600"}
                      />
                    </div>
                  </div>
                </button>

                {/* Contenedor de Respuesta */}
                <div
                  className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    abierto ? "grid-rows-[1fr] opacity-100 bg-gray-50/50 rounded-b-xl border-t border-gray-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="py-6 px-8 pl-18"> 
                      {/* LÓGICA CONDICIONAL: Si es arreglo (lista), se dibuja la cuadrícula. Si es texto, es párrafo */}
                      {Array.isArray(item.respuesta) ? (
                        <div className="space-y-3">
                          {item.titulo && (
                            <p className="text-[15px] text-gray-900 font-medium mb-3">
                              {item.titulo}
                            </p>
                          )}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            {item.respuesta.map((req, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-red-600 font-bold text-[15px]">✓</span>
                                <span className="text-[14px] sm:text-[15px] text-gray-700">{req}</span>
                              </div>
                            ))}
                          </div>
                          {item.nota && (
                            <p className="text-[14px] text-gray-500 mt-4 leading-relaxed">
                              {item.nota}
                            </p>
                          )}
                        </div>
                      ) : (
                        <p className="text-[15px] text-gray-700 leading-relaxed font-normal">
                          {item.respuesta}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección de Contacto Directo */}
        <div className="mt-16 text-center pt-10 border-t border-gray-100">
          <p className="text-sm text-gray-600 font-medium">
            ¿Tienes otra duda? <span className="text-[#0E2976] cursor-pointer hover:underline">Contáctanos directamente por WhatsApp</span> para una atención personalizada.
          </p>
        </div>

      </div>
    </section>
  );
}