type ImportarExportarProps = {
  onNavigate: (page: 'home' | 'aeronaves' | 'funcionarios' | 'relatorios' | 'importar-exportar') => void;
};

export default function ImportarExportar({ onNavigate }: ImportarExportarProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-12">
          <h1 className="text-white text-5xl">Importar & Exportar</h1>
        </div>

        <div className="text-center mb-8">
          <p className="text-white">Como podemos te ajudar hoje?</p>
        </div>

        <div className="space-y-4">
          <button className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors">
            Importar
          </button>
          
          <button className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors">
            Exportar
          </button>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onNavigate('home')}
            className="py-3 px-8 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
