using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Domain.Model
{
    public class EstadoResponse
    {
        public List<Estado> Estados { get; set; }
        public bool Executado { get; set; }
        public string MensagemRetorno { get; set; }
    }
}
