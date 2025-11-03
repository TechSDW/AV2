type HomeProps = {
  onNavigate: (page: 'home' | 'aeronaves' | 'funcionarios' | 'relatorios' | 'importar-exportar') => void;
};

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-12">
          <p className="text-white mb-2">Bem-vindo ao</p>
          <h1 className="text-white text-5xl">Aerocode</h1>
        </div>

        <div className="text-center mb-8">
          <p className="text-white">Como podemos te ajudar hoje?</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onNavigate('aeronaves')}
            className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
          >
            Aeronaves
          </button>
          
          <button
            onClick={() => onNavigate('funcionarios')}
            className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
          >
            Funcionários
          </button>
          
          <button
            onClick={() => onNavigate('relatorios')}
            className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
          >
            Relatórios
          </button>
          
          <button
            onClick={() => onNavigate('importar-exportar')}
            className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
          >
            Importar & Exportar
          </button>
        </div>
      </div>
    </div>
  );
}
