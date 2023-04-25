using XGEM.PortalCliente.Application.Services.Interfaces;
using XGEM.PortalCliente.Application.Services.Wrappers;
using XGEM.PortalCliente.Data.Interfaces;
using XGEM.PortalCliente.Data.Repositories.Entities;
using XGEM.PortalCliente.Data.Repositoriess.Entities;
using XGEM.PortalCliente.Domain.Model;

namespace XGEM.PortalCliente.Application.Services
{
    public class EnderecoServices : IEnderecoServices
    {
        private readonly IEnderecoRepository _enderecoRepository;

        public EnderecoServices(IEnderecoRepository enderecoRepository)
        {
            _enderecoRepository = enderecoRepository;
        }

        public async Task<Response<EnderecoResponse>> AdicionarEnderecoCliente(EnderecoRequest enderecoRequest)
        {
            EnderecoResponse enderecoResponse = new EnderecoResponse();

            try
            {
                await _enderecoRepository.AddAsync(enderecoRequest.endereco);

                //Id para chamar o cadastro do endereço
                var idEndereco = enderecoRequest.endereco.id;

                if (idEndereco > 0)
                {
                    enderecoResponse.objEndereco = enderecoRequest.endereco;
                    enderecoResponse.Executado = true;
                    enderecoResponse.MensagemRetorno = "Cadastro de cliente efetuada com sucesso";
                }
                else
                {
                    enderecoResponse.Executado = true;
                    enderecoResponse.MensagemRetorno = "Erro ao cadastrar o cliente";
                }

            }
            catch
            {
                enderecoResponse.Executado = false;
                enderecoResponse.MensagemRetorno = "Erro ao cadastrar o cliente";
            }

            return new Response<EnderecoResponse>(enderecoResponse, $"Cadastro Cliente.");
        }

        public async Task<Response<EnderecoResponse>> AtualizarEnderecoCliente(EnderecoRequest enderecoRequest)
        {
            EnderecoResponse enderecoResponse = new EnderecoResponse();

            try
            {
                await _enderecoRepository.UpdateAsync(enderecoRequest.endereco);

                //Id para chamar o cadastro do endereço
                var idEndereco = enderecoRequest.endereco.id;

                if (idEndereco > 0)
                {
                    enderecoResponse.objEndereco = enderecoRequest.endereco;
                    enderecoResponse.Executado = true;
                    enderecoResponse.MensagemRetorno = "Atualização do cadastro de endereço do cliente efetuada com sucesso";
                }
                else
                {
                    enderecoResponse.Executado = true;
                    enderecoResponse.MensagemRetorno = "Erro ao atualizar o cadastro do cliente";
                }

            }
            catch
            {
                enderecoResponse.Executado = false;
                enderecoResponse.MensagemRetorno = "Erro ao atualizar o  cadastro o endereço cliente";
            }

            return new Response<EnderecoResponse>(enderecoResponse, $"Cadastro Atualizado do Endereço Cliente.");
        }

        public async  Task<Response<EnderecoResponse>> ExcluirEnderecoCliente(int id)
        {
            EnderecoResponse enderecoResponse = new EnderecoResponse();

            try
            {
                await _enderecoRepository.RemoveAsync(id);

                enderecoResponse.Executado = true;
                enderecoResponse.MensagemRetorno = "Endereço excluído com sucesso";

            }
            catch
            {
                enderecoResponse.Executado = false;
                enderecoResponse.MensagemRetorno = "Erro ao ecluir o endereço cliente";
            }

            return new Response<EnderecoResponse>(enderecoResponse, $"Cadastro Endereço Cliente.");
        }

        public async Task<Response<EnderecoResponse>> ListarEndereco(int id)
        {
            EnderecoResponse enderecoResponse = new EnderecoResponse();

            try
            {
               var enderecoCliente = await _enderecoRepository.GetAsync(x => x.idCliente == id);

                if (enderecoCliente != null)
                {
                    enderecoResponse.enderecos = enderecoCliente.ToList();
                    enderecoResponse.Executado = true;
                    enderecoResponse.MensagemRetorno = "Consulta de cliente efetuada com sucesso";
                }
                else
                {
                    enderecoResponse.Executado = true;
                    enderecoResponse.MensagemRetorno = "Não existem cliente cadastrado no banco de dados para este consulta";
                }
            }
            catch
            {
                enderecoResponse.Executado = false;
                enderecoResponse.MensagemRetorno = "Erro na consulta de cliente";
            }

            return new Response<EnderecoResponse>(enderecoResponse, $"Endereços Cliente.");
        }

        public async Task<Response<EnderecoResponse>> ListarEnderecoCliente(int id, int idCliente)
        {
            EnderecoResponse enderecoResponse = new EnderecoResponse();

            try
            {
                var enderecoCliente =  _enderecoRepository.GetAsync(x => x.id == id && x.idCliente == idCliente).Result.FirstOrDefault();
               
                if (enderecoCliente != null)
                {
                    enderecoResponse.objEndereco = enderecoCliente;
                    enderecoResponse.Executado = true;
                    enderecoResponse.MensagemRetorno = "Consulta de cliente efetuada com sucesso";
                }
                else
                {
                    enderecoResponse.Executado = true;
                    enderecoResponse.MensagemRetorno = "Não existem cliente cadastrado no banco de dados para este consulta";
                }
            }
            catch
            {
                enderecoResponse.Executado = false;
                enderecoResponse.MensagemRetorno = "Erro na consulta de cliente";
            }

            return new Response<EnderecoResponse>(enderecoResponse, $"Endereços Cliente.");
        }
    }
}
