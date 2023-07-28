import React from 'react';
import Slide1 from '../assets/Slide1.png'
import Slide2 from '../assets/Slide2.png'
import Slider from '../components/Slider';
import ServiceSection from '../components/ServiceSection';

const Home = () => {
  // Coloque aqui as URLs das imagens para o slide
  const images = [
    Slide1,
    Slide2,
  ];

  return (
    <div>
      <Slider images={images} />
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Sobre</h2>
        <div className="w-full max-w-2xl p-4 border rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold mb-4"> Bem-vindo ao Flask Hospital! </h1>
            <p class="text-gray-700 leading-relaxed mb-6">
                Nosso hospital é pioneiro em fornecer consultas médicas de alta qualidade por meio de um ambiente totalmente
                online e seguro. Nossa missão é garantir que nossos pacientes tenham acesso fácil e rápido aos melhores
                profissionais de saúde, independentemente de sua localização.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
            Com uma equipe de especialistas altamente qualificados e experientes, abrangendo diversas áreas da saúde,
                estamos comprometidos em oferecer aos nossos pacientes um atendimento excepcional. Nossos profissionais estão
                disponíveis para consultas virtuais em várias especialidades, como cardiologia, pediatria, psicologia,
                nutrição, fisioterapia e muito mais.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
                Através de nossa plataforma de consultas online, nossos pacientes podem agendar e realizar suas consultas de
                forma conveniente e segura, sem a necessidade de deslocamento ou espera em salas de espera. Nossa tecnologia
                avançada garante uma conexão estável e de alta qualidade para que nossos profissionais possam realizar
                diagnósticos precisos e oferecer tratamentos adequados.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
                Nossa equipe está comprometida em proporcionar uma experiência de atendimento personalizada, focada nas
                necessidades individuais de cada paciente. Valorizamos a confiança e a privacidade, e todos os dados e
                informações de saúde dos pacientes são tratados com o mais alto padrão de segurança.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
                Além das consultas online, nosso hospital oferece uma variedade de serviços adicionais, como exames
                laboratoriais virtuais, monitoramento remoto de condições crônicas e programas de bem-estar para promover uma
                vida saudável.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
                Se você está buscando uma solução moderna e eficiente para suas necessidades de saúde, venha nos conhecer e
                experimente os benefícios das nossas excelentes consultas online com os melhores profissionais da área médica.
                Estamos aqui para cuidar de você e garantir que sua saúde esteja em boas mãos, onde quer que você esteja.
            </p>
        </div>
      </div>
      <ServiceSection />
    </div>
  );
};

export default Home;
