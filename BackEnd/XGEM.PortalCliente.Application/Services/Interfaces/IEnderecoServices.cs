using XGEM.PortalCliente.Application.Services.Wrappers;
using XGEM.PortalCliente.Domain.Entities;
using XGEM.PortalCliente.Domain.Model;


namespace XGEM.PortalCliente.Application.Services.Interfaces
{
    public interface IEnderecoServices
    {
        Task<Response<EnderecoResponse>> AdicionarEnderecoCliente(EnderecoRequest enderecoRequest);
        Task<Response<EnderecoResponse>> AtualizarEnderecoCliente(EnderecoRequest enderecoRequest);
        Task<Response<EnderecoResponse>> ExcluirEnderecoCliente(int id);
        Task<Response<EnderecoResponse>> ListarEndereco(int id);
        Task<Response<EnderecoResponse>> ListarEnderecoCliente(int id, int idCliente);
    }
}
