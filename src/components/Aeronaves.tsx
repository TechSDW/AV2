import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

type AeronavesProps = {
  onNavigate: (page: 'home' | 'aeronaves' | 'funcionarios' | 'relatorios' | 'importar-exportar') => void;
};

type HoverMenu = 'cadastrar' | 'atualizar' | 'deletar' | 'associar' | null;
type SubMenu = 'aeronave' | 'peca' | 'etapa' | null;
type ModalState = { action: HoverMenu; subMenu: SubMenu } | null;

export default function Aeronaves({ onNavigate }: AeronavesProps) {
  const [hoveredButton, setHoveredButton] = useState<HoverMenu>(null);
  const [modalOpen, setModalOpen] = useState<ModalState>(null);

  const handleSubMenuClick = (action: HoverMenu, subMenu: SubMenu) => {
    setModalOpen({ action, subMenu });
    setHoveredButton(null);
  };

  const renderModalContent = () => {
    if (!modalOpen) return null;

    const { action, subMenu } = modalOpen;

    if (subMenu === 'aeronave') {
      return (
        <>
          <h2 className="text-2xl mb-6 text-center capitalize">{action} Aeronave</h2>
          <div className="space-y-4">
            {action !== 'deletar' && (
              <>
                <div>
                  <Label htmlFor="modelo">Modelo</Label>
                  <Input id="modelo" placeholder="Ex: Boeing 737" />
                </div>
                <div>
                  <Label htmlFor="matricula">Matrícula</Label>
                  <Input id="matricula" placeholder="Ex: PT-ABC" />
                </div>
                <div>
                  <Label htmlFor="fabricante">Fabricante</Label>
                  <Input id="fabricante" placeholder="Ex: Boeing" />
                </div>
                <div>
                  <Label htmlFor="ano">Ano de Fabricação</Label>
                  <Input id="ano" type="number" placeholder="Ex: 2020" />
                </div>
              </>
            )}
            {action === 'deletar' && (
              <div>
                <Label htmlFor="matricula-deletar">Matrícula da Aeronave</Label>
                <Input id="matricula-deletar" placeholder="Digite a matrícula" />
              </div>
            )}
            {action === 'associar' && (
              <div>
                <Label htmlFor="funcionario">Funcionário</Label>
                <Input id="funcionario" placeholder="Selecione o funcionário" />
              </div>
            )}
          </div>
        </>
      );
    }

    if (subMenu === 'peca') {
      return (
        <>
          <h2 className="text-2xl mb-6 text-center capitalize">{action} Peça</h2>
          <div className="space-y-4">
            {action !== 'deletar' && (
              <>
                <div>
                  <Label htmlFor="nome-peca">Nome da Peça</Label>
                  <Input id="nome-peca" placeholder="Ex: Motor Turbofan" />
                </div>
                <div>
                  <Label htmlFor="codigo">Código</Label>
                  <Input id="codigo" placeholder="Ex: MT-001" />
                </div>
                <div>
                  <Label htmlFor="fabricante-peca">Fabricante</Label>
                  <Input id="fabricante-peca" placeholder="Ex: Rolls-Royce" />
                </div>
                <div>
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea id="descricao" placeholder="Descrição da peça" />
                </div>
              </>
            )}
            {action === 'deletar' && (
              <div>
                <Label htmlFor="codigo-deletar">Código da Peça</Label>
                <Input id="codigo-deletar" placeholder="Digite o código" />
              </div>
            )}
            {action === 'associar' && (
              <div>
                <Label htmlFor="aeronave-peca">Aeronave</Label>
                <Input id="aeronave-peca" placeholder="Selecione a aeronave" />
              </div>
            )}
          </div>
        </>
      );
    }

    if (subMenu === 'etapa') {
      return (
        <>
          <h2 className="text-2xl mb-6 text-center capitalize">{action} Etapa</h2>
          <div className="space-y-4">
            {action !== 'deletar' && (
              <>
                <div>
                  <Label htmlFor="nome-etapa">Nome da Etapa</Label>
                  <Input id="nome-etapa" placeholder="Ex: Manutenção Preventiva" />
                </div>
                <div>
                  <Label htmlFor="duracao">Duração Estimada (horas)</Label>
                  <Input id="duracao" type="number" placeholder="Ex: 24" />
                </div>
                <div>
                  <Label htmlFor="descricao-etapa">Descrição</Label>
                  <Textarea id="descricao-etapa" placeholder="Descrição da etapa" />
                </div>
              </>
            )}
            {action === 'deletar' && (
              <div>
                <Label htmlFor="etapa-deletar">Nome da Etapa</Label>
                <Input id="etapa-deletar" placeholder="Digite o nome da etapa" />
              </div>
            )}
            {action === 'associar' && (
              <>
                <div>
                  <Label htmlFor="aeronave-etapa">Aeronave</Label>
                  <Input id="aeronave-etapa" placeholder="Selecione a aeronave" />
                </div>
                <div>
                  <Label htmlFor="funcionario-etapa">Funcionário Responsável</Label>
                  <Input id="funcionario-etapa" placeholder="Selecione o funcionário" />
                </div>
              </>
            )}
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl px-8">
          <div className="text-center mb-12">
            <h1 className="text-white text-5xl">Aeronaves</h1>
          </div>

          <div className="text-center mb-8">
            <p className="text-white">Como podemos te ajudar hoje?</p>
          </div>

          <div className="space-y-4 relative flex items-center justify-center">
            <div className="space-y-4 w-full max-w-md">
              <div className="relative">
                <button
                  onMouseEnter={() => setHoveredButton('cadastrar')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
                >
                  Cadastrar
                </button>
                {hoveredButton === 'cadastrar' && (
                  <div 
                    className="absolute left-full top-1/2 -translate-y-1/2 flex items-center pointer-events-auto"
                    onMouseEnter={() => setHoveredButton('cadastrar')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => handleSubMenuClick('cadastrar', 'aeronave')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Aeronave
                      </button>
                      <button 
                        onClick={() => handleSubMenuClick('cadastrar', 'peca')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Peça
                      </button>
                      <button 
                        onClick={() => handleSubMenuClick('cadastrar', 'etapa')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Etapa
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => setHoveredButton('atualizar')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
                >
                  Atualizar
                </button>
                {hoveredButton === 'atualizar' && (
                  <div 
                    className="absolute left-full top-1/2 -translate-y-1/2 flex items-center pointer-events-auto"
                    onMouseEnter={() => setHoveredButton('atualizar')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => handleSubMenuClick('atualizar', 'aeronave')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Aeronave
                      </button>
                      <button 
                        onClick={() => handleSubMenuClick('atualizar', 'peca')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Peça
                      </button>
                      <button 
                        onClick={() => handleSubMenuClick('atualizar', 'etapa')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Etapa
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => setHoveredButton('deletar')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
                >
                  Deletar
                </button>
                {hoveredButton === 'deletar' && (
                  <div 
                    className="absolute left-full top-1/2 -translate-y-1/2 flex items-center pointer-events-auto"
                    onMouseEnter={() => setHoveredButton('deletar')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => handleSubMenuClick('deletar', 'aeronave')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Aeronave
                      </button>
                      <button 
                        onClick={() => handleSubMenuClick('deletar', 'peca')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Peça
                      </button>
                      <button 
                        onClick={() => handleSubMenuClick('deletar', 'etapa')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Etapa
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => setHoveredButton('associar')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="w-full py-4 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg transition-colors"
                >
                  Associar
                </button>
                {hoveredButton === 'associar' && (
                  <div 
                    className="absolute left-full top-1/2 -translate-y-1/2 flex items-center pointer-events-auto"
                    onMouseEnter={() => setHoveredButton('associar')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => handleSubMenuClick('associar', 'aeronave')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Aeronave
                      </button>
                      <button 
                        onClick={() => handleSubMenuClick('associar', 'peca')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Peça
                      </button>
                      <button 
                        onClick={() => handleSubMenuClick('associar', 'etapa')}
                        className="py-2 px-6 bg-gray-300 hover:bg-gray-200 text-black rounded-lg whitespace-nowrap"
                      >
                        Etapa
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end max-w-md mx-auto">
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
