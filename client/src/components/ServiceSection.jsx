import React from 'react';

const ServiceSection = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Serviços</h2>
      {/* Coloque aqui o sistema de slide para exibir os serviços */}
      <div className="w-full max-w-2xl p-4 border rounded-lg shadow-lg">
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit.
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
