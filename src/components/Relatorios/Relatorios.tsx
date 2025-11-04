import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

type RelatoriosProps = {
  onNavigate: (page: 'home' | 'aeronaves' | 'funcionarios' | 'relatorios' | 'importar-exportar') => void;
};

type ReportType = 'aeronave' | 'funcionarios' | null;

export default function Relatorios({ onNavigate }: RelatoriosProps) {
  const [modalOpen, setModalOpen] = useState<ReportType>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleGenerateReport = () => {
    console.log('Gerando relatório com as opções:', selectedOptions);
    setModalOpen(null);
    setSelectedOptions([]);
  };

  const renderModalContent = () => {
    if (!modalOpen) return null;

    if (modalOpen === 'aeronave') {
      return (
        <>
          <h2 className="text-2xl mb-6 text-center">Relatório de Aeronaves</h2>
          <p className="text-center mb-6 text-gray-600">Selecione as informações que deseja incluir no relatório:</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="modelo" 
                checked={selectedOptions.includes('modelo')}
                onCheckedChange={() => handleCheckboxChange('modelo')}
              />
              <Label htmlFor="modelo" className="cursor-pointer">Modelo da Aeronave</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="matricula" 
                checked={selectedOptions.includes('matricula')}
                onCheckedChange={() => handleCheckboxChange('matricula')}
              />
              <Label htmlFor="matricula" className="cursor-pointer">Matrícula</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="fabricante" 
                checked={selectedOptions.includes('fabricante')}
                onCheckedChange={() => handleCheckboxChange('fabricante')}
              />
              <Label htmlFor="fabricante" className="cursor-pointer">Fabricante</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="ano" 
                checked={selectedOptions.includes('ano')}
                onCheckedChange={() => handleCheckboxChange('ano')}
              />
              <Label htmlFor="ano" className="cursor-pointer">Ano de Fabricação</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="status" 
                checked={selectedOptions.includes('status')}
                onCheckedChange={() => handleCheckboxChange('status')}
              />
              <Label htmlFor="status" className="cursor-pointer">Status Operacional</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="manutencoes" 
                checked={selectedOptions.includes('manutencoes')}
                onCheckedChange={() => handleCheckboxChange('manutencoes')}
              />
              <Label htmlFor="manutencoes" className="cursor-pointer">Histórico de Manutenções</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="pecas" 
                checked={selectedOptions.includes('pecas')}
                onCheckedChange={() => handleCheckboxChange('pecas')}
              />
              <Label htmlFor="pecas" className="cursor-pointer">Peças Associadas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="funcionarios-resp" 
                checked={selectedOptions.includes('funcionarios-resp')}
                onCheckedChange={() => handleCheckboxChange('funcionarios-resp')}
              />
              <Label htmlFor="funcionarios-resp" className="cursor-pointer">Funcionários Responsáveis</Label>
            </div>
          </div>
        </>
      );
    }

    if (modalOpen === 'funcionarios') {
      return (
        <>
          <h2 className="text-2xl mb-6 text-center">Relatório de Funcionários</h2>
          <p className="text-center mb-6 text-gray-600">Selecione as informações que deseja incluir no relatório:</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="nome" 
                checked={selectedOptions.includes('nome')}
                onCheckedChange={() => handleCheckboxChange('nome')}
              />
              <Label htmlFor="nome" className="cursor-pointer">Nome Completo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="cpf" 
                checked={selectedOptions.includes('cpf')}
                onCheckedChange={() => handleCheckboxChange('cpf')}
              />
              <Label htmlFor="cpf" className="cursor-pointer">CPF</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="cargo" 
                checked={selectedOptions.includes('cargo')}
                onCheckedChange={() => handleCheckboxChange('cargo')}
              />
              <Label htmlFor="cargo" className="cursor-pointer">Cargo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="email" 
                checked={selectedOptions.includes('email')}
                onCheckedChange={() => handleCheckboxChange('email')}
              />
              <Label htmlFor="email" className="cursor-pointer">E-mail</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="telefone" 
                checked={selectedOptions.includes('telefone')}
                onCheckedChange={() => handleCheckboxChange('telefone')}
              />
              <Label htmlFor="telefone" className="cursor-pointer">Telefone</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="data-admissao" 
                checked={selectedOptions.includes('data-admissao')}
                onCheckedChange={() => handleCheckboxChange('data-admissao')}
              />
              <Label htmlFor="data-admissao" className="cursor-pointer">Data de Admissão</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="aeronaves-assoc" 
                checked={selectedOptions.includes('aeronaves-assoc')}
                onCheckedChange={() => handleCheckboxChange('aeronaves-assoc')}
              />
              <Label htmlFor="aeronaves-assoc" className="cursor-pointer">Aeronaves Associadas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="horas-trabalhadas" 
                checked={selectedOptions.includes('horas-trabalhadas')}
                onCheckedChange={() => handleCheckboxChange('horas-trabalhadas')}
              />
              <Label htmlFor="horas-trabalhadas" className="cursor-pointer">Horas Trabalhadas</Label>
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="text-center mb-12">
            <h1 className="text-white text-5xl">Relatórios</h1>
          </div>

          <div className="text-center mb-8">
            <p className="text-white">Como podemos te ajudar hoje?</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => setModalOpen('aeronave')}
              className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
            >
              Aeronave
            </button>
            
            <button 
              onClick={() => setModalOpen('funcionarios')}
              className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
            >
              Funcionários
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

      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => {
            setModalOpen(null);
            setSelectedOptions([]);
          }}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {renderModalContent()}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setModalOpen(null);
                  setSelectedOptions([]);
                }}
                className="flex-1 py-3 px-6 bg-gray-300 hover:bg-gray-400 text-black rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleGenerateReport}
                className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Gerar Relatório
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
