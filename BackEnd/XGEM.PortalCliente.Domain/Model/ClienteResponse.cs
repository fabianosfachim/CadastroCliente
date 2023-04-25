using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Domain.Model
{
    public class ClienteResponse
    {
        public List<Cliente> Cliente { get; set; }
        public Cliente objCliente { get; set; }
        public bool Executado { get; set; }
        public string MensagemRetorno { get; set; }
    }
}
