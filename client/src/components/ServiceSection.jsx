import React from 'react';
import Slider from './Slider';
import Slide3 from '../assets/Slide3.png'
import Slide4 from '../assets/Slide4.png'

const images = [
  Slide3,
  Slide4
];

const ServiceSection = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Serviços do Flask Hospital</h2>
      <Slider images={images} />
      <div className="w-full max-w-2xl p-4 border rounded-lg shadow-lg">
        <p class="text-lg mb-6">
          O nosso hospital oferece uma ampla gama de serviços médicos e de saúde para atender às necessidades de
          nossos pacientes e comunidade. Com uma equipe dedicada de profissionais altamente qualificados, estamos
          comprometidos em proporcionar cuidados de qualidade, tratamento abrangente e bem-estar para todos os nossos
          pacientes.
        </p>

        <p class="text-lg mb-6">
        Na área de emergência, nossa equipe de pronto-socorro está pronta para prestar atendimento imediato e
        eficiente a pacientes com lesões, condições agudas ou emergências médicas. Nossos médicos e enfermeiros
        especializados garantem que os pacientes recebam atenção imediata e cuidados médicos de primeira linha,
        garantindo estabilidade e tratamento adequado.
        </p>

        <p class="text-lg mb-6">
        Nossa missão é fornecer uma abordagem abrangente para a saúde, com foco no bem-estar geral de nossos
        pacientes. Nosso compromisso com a excelência, cuidado compassivo e tecnologia avançada nos permite oferecer
        serviços médicos e de saúde de alta qualidade para nossa comunidade.
        </p>

        <p class="text-lg">
        Estamos aqui para atender às necessidades médicas e de saúde de todos os pacientes, proporcionando um
        ambiente seguro, acolhedor e de confiança para todos que buscam nossos serviços. Com dedicação e paixão pela
        saúde, nosso hospital está comprometido em ajudar nossos pacientes a viverem vidas mais saudáveis e felizes.
        </p>

      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => console.log('Direcionar para a rota "/doutores"')}
      >
        Marque sua consulta agora!
      </button>
    </div>
  );
};

export default ServiceSection;
