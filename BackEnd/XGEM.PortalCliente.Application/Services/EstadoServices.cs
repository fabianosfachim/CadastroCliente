using XGEM.PortalCliente.Application.Services.Interfaces;
using XGEM.PortalCliente.Application.Services.Wrappers;
using XGEM.PortalCliente.Data.Interfaces;
using XGEM.PortalCliente.Domain.Entities;
using XGEM.PortalCliente.Domain.Model;

namespace XGEM.PortalCliente.Application.Services
{
    public class EstadoServices : IEstadoServices
    {
        private readonly IEstadoRepository _estadoRepository;

        public EstadoServices(IEstadoRepository estadoRepository)
        {
            _estadoRepository = estadoRepository;
        }

        public async Task<Response<EstadoResponse>> ListarEstado()
        {
            EstadoResponse estadoResponse = new EstadoResponse();

            try
            {
                var estado = await _estadoRepository.GetAllAsync();
                estadoResponse.Estados = estado.ToList();
                estadoResponse.Executado = true;
                estadoResponse.MensagemRetorno = "Consulta efetuada com sucesso";
            }
            catch
            {
                estadoResponse.Executado = false;
                estadoResponse.MensagemRetorno = "Erro na consulta de lista de estados";
            }

            return new Response<EstadoResponse>(estadoResponse, $"Lista Estados.");
        }

    }
}
