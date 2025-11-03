import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

type FuncionariosProps = {
  onNavigate: (page: 'home' | 'aeronaves' | 'funcionarios' | 'relatorios' | 'importar-exportar') => void;
};

type ModalType = 'cadastrar' | 'atualizar' | 'deletar' | 'associar' | null;

export default function Funcionarios({ onNavigate }: FuncionariosProps) {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);
  const [tipoFuncionario, setTipoFuncionario] = useState<string>('');

  const handleButtonClick = (type: ModalType) => {
    setModalOpen(type);
  };

  const renderModalContent = () => {
    if (!modalOpen) return null;

    if (modalOpen === 'cadastrar' || modalOpen === 'atualizar') {
      return (
        <>
          <h2 className="text-2xl mb-6 text-center capitalize">{modalOpen} Funcionário</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome Completo</Label>
              <Input id="nome" placeholder="Ex: João da Silva" />
            </div>
            <div>
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" placeholder="000.000.000-00" />
            </div>
            <div>
              <Label htmlFor="tipo">Tipo de Funcionário</Label>
              <Select value={tipoFuncionario} onValueChange={setTipoFuncionario}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="administrador">Administrador</SelectItem>
                  <SelectItem value="engenheiro">Engenheiro</SelectItem>
                  <SelectItem value="operador">Operador</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="cargo">Cargo</Label>
              <Input id="cargo" placeholder="Ex: Mecânico de Aeronaves" />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="exemplo@email.com" />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" placeholder="(00) 00000-0000" />
            </div>
            <div>
              <Label htmlFor="data-admissao">Data de Admissão</Label>
              <Input id="data-admissao" type="date" />
            </div>
          </div>
        </>
      );
    }

    if (modalOpen === 'deletar') {
      return (
        <>
          <h2 className="text-2xl mb-6 text-center">Deletar Funcionário</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="cpf-deletar">CPF do Funcionário</Label>
              <Input id="cpf-deletar" placeholder="Digite o CPF" />
            </div>
            <p className="text-red-600 text-center">
              Esta ação não pode ser desfeita!
            </p>
          </div>
        </>
      );
    }

    if (modalOpen === 'associar') {
      return (
        <>
          <h2 className="text-2xl mb-6 text-center">Associar Funcionário</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="funcionario-associar">Funcionário</Label>
              <Input id="funcionario-associar" placeholder="Selecione o funcionário" />
            </div>
            <div>
              <Label htmlFor="aeronave-associar">Aeronave</Label>
              <Input id="aeronave-associar" placeholder="Selecione a aeronave" />
            </div>
            <div>
              <Label htmlFor="funcao">Função na Aeronave</Label>
              <Input id="funcao" placeholder="Ex: Responsável pela manutenção" />
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
            <h1 className="text-white text-5xl">Funcionários</h1>
          </div>

          <div className="text-center mb-8">
            <p className="text-white">Como podemos te ajudar hoje?</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleButtonClick('cadastrar')}
              className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
            >
              Cadastrar
            </button>
            
            <button
              onClick={() => handleButtonClick('atualizar')}
              className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
            >
              Atualizar
            </button>
            
            <button
              onClick={() => handleButtonClick('deletar')}
              className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
            >
              Deletar
            </button>
            
            <button
              onClick={() => handleButtonClick('associar')}
              className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
            >
              Associar
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
          onClick={() => setModalOpen(null)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {renderModalContent()}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setModalOpen(null)}
                className="flex-1 py-3 px-6 bg-gray-300 hover:bg-gray-400 text-black rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
